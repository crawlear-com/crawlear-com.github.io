import { render, screen } from '@testing-library/react'
import GameViewer from '../GameViewer'
import GameList from '../../modules/gameManagement/components/GameList'
import UseGameViewer from '../hooks/UseGameViewer.ts'

const div = document.createElement('div');

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            }
        }
    }
}))

jest.mock('../../modules/gameManagement/components/GameList')
jest.mock('../hooks/UseGameViewer.ts')

beforeEach(() => {
    document.body.append(div)

})

afterEach(() => {
    document.body.remove(div)
    delete window.crawlear
})

test('renders GameList', () => {
    render(<GameViewer gid='213123123' />, div)        
    const content = screen.getAllByText('GameList')

    expect(content).not.toBeNull()
    expect(content).not.toBeUndefined()
})
