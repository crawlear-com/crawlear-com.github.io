import { renderHook, act } from '@testing-library/react'
import UseRouteSearch from '../hooks/UseRouteSearch';

const ROUTES = 0
const ROUTETOSHOW = 1
const MAPCLICK = 2
const VIEWROUTE = 3
const gpx = {
    id: 'id',
    data: '<gpx></gpx>'
}

beforeEach(() => {
    window.crawlear = {
        fb: {
            routeSearchByLatLon: jest.fn((loc, callback) => {
                callback([{ name: 'test', description: 'test', scale: '1/10', gpx: {}, locationMap: ''}])
            }),
            getGpx: jest.fn((gid, callback) => {
                callback(gpx)
            })
        }
    }    
});

afterEach(() => {
    delete window.crawlear
})

test('initially does not have routes', () => {
    const ROUTES = 0
    const { result } = renderHook(UseRouteSearch)

    expect(result.current[ROUTES].length).toBe(0)
})

test('onClick loads a route from fb', () => {
    const { result } = renderHook(UseRouteSearch)
    act(() => {
        result.current[MAPCLICK]()
    })

    expect(window.crawlear.fb.routeSearchByLatLon).toHaveBeenCalled()
    expect(result.current[ROUTES].length).toBe(1)
})


test('onViewRoute loads the gpx and returns it inside the route', () => {
    const { result } = renderHook(UseRouteSearch)

    act(() => {
        result.current[MAPCLICK]()
    })
    act(() => {
        result.current[VIEWROUTE](0)
    })

    expect(result.current[ROUTES].length).toBe(1)
    expect(window.crawlear.fb.getGpx).toHaveBeenCalled()
    expect(result.current[ROUTETOSHOW].gpx).toBe(gpx)
})
