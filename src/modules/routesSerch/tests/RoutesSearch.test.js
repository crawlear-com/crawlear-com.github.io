import { render } from '@testing-library/react'
import RoutesSearch from '../RoutesSearch'

const div = document.createElement('div');

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => { }),
            }
        };
    }
}));

jest.mock('react-gpxroutemap')
jest.mock('../../list/List')
jest.mock('../../../components/Popup')

beforeEach(() => {
    document.body.append(div)
    window.crawlear = {
        fb: {
            routeSearchByLatLon: jest.fn((loc, callback) => {
                callback([{ name: 'test', description: 'test', scale: '1/10', gpx: {}, locationMap: ''}])
            }),
            getGpx: jest.fn((gid, callback) => {
                callback({})
            })
        }
    } 
});

afterEach(() => {
    window.document.body.removeChild(div)
    delete window.crawlear
})

test('renders correctly', () => {
    render(<RoutesSearch></RoutesSearch>)
})
