import { render, screen } from '@testing-library/react'
import GameViewer from '../GameViewer'
import WinnerTable from '../../components/WinnerTable'
import UseGameViewer from '../hooks/UseGameViewer'

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

jest.mock('../../components/WinnerTable')
jest.mock('../hooks/UseGameViewer')

beforeEach(() => {
    document.body.append(div)

})

afterEach(() => {
    document.body.remove(div)
    delete window.crawlear
})

test('renders winner table', () => {
    render(<GameViewer gid='213123123' />, div)        
    const content = screen.getByText('winnerTable')

    expect(content).not.toBeNull()
    expect(content).not.toBeUndefined()
})
