import { render, screen } from '@testing-library/react'
import GameViewer from '../GameViewer'

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

jest.mock('react-helmet-async', () => ({
    Helmet: jest.fn(),
    HelmetProvider: jest.fn(),
  }));

jest.mock('../../components/WinnerTable')
jest.mock('../hooks/UseGameViewer')

beforeEach(() => {
    window.crawlear = {
        fb: {
            checkIfLogged: jest.fn(),
            isUserLogged: jest.fn()
        }
    }
})

afterEach(() => {
    delete window.crawlear
})

test('renders winner table', () => {
    render(<GameViewer gid='213123123' />)
    const winnerTable = screen.getByText('winnerTable')
    const name = screen.getByText('gameName')

    expect(winnerTable).not.toBeNull()
    expect(winnerTable).not.toBeUndefined()
    expect(winnerTable).toBeInTheDocument()

    expect(name).toBeInTheDocument()
})