import { renderHook } from '@testing-library/react'
import UseGameViewer from '../hooks/UseGameViewer'

const div = document.createElement('div');

beforeEach(() => {
    document.body.append(div)
    window.crawlear = {
        fb: {
            getGameProgression: jest.fn('getGameProgression').mockImplementation(() => {
                return []
            }),
            getGame: jest.fn('getGame').mockImplementation(() => {
                return {
                    gid: '213123123' 
                }
            })
        }
    }
})

afterEach(() => {
    document.body.remove(div)
    delete window.crawlear
})

test('renders GameList', () => {
    const gid = '213123123'
    const { result } = renderHook(UseGameViewer, {
        initialProps: gid
    })

    expect(window.crawlear.fb.getGame).toHaveBeenCalled()
});
