import { render, screen, fireEvent } from '@testing-library/react'
import GameManagementMenu from '../components/GameManagementMenu'

const div = document.createElement('div')

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            }
        };
    }
}));

const mockUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

jest.mock('../../list/List')
jest.mock('../components/GameRequests')
jest.mock('../hooks/UseGameManagementMenu')
jest.mock('../components/PreviousGameList')
jest.mock('../../list/transformers/GameListTransformer', () => ({
    itemTransform: jest.fn()
}))

beforeEach(()=>{
  document.body.append(div)

  window.crawlear = {
    fbBase: jest.fn(),
    user: { }
  }
});

afterEach(() => {
    window.document.body.removeChild(div)
    delete window.crawlear
})

test('renders GameManagementMenu', () => {
    const onConfigureGame = jest.fn()
    const onGamePlay = jest.fn()

    render(<GameManagementMenu
        onConfigureGame={onConfigureGame}
        onGamePlay={onGamePlay}></GameManagementMenu>)

    const gameRequests = screen.queryByText('GameRequests')
    const gameList = screen.queryAllByText('GameList')
    const previousGamesButton = screen.queryByText('PreviousGameList')
    const partidasPilototJuez = screen.queryAllByText('List')
    const createButton = screen.getByText('description.crearjuego')

    expect(gameRequests).not.toBeNull()
    expect(gameList).not.toBeNull()
    expect(previousGamesButton).not.toBeNull()
    expect(partidasPilototJuez.length).toBe(2)
    expect(createButton).toBeInTheDocument()
});

test('click on create game', () => {
    const onConfigureGame = jest.fn()
    const onGamePlay = jest.fn()

    render(<GameManagementMenu
        onConfigureGame={onConfigureGame}
        onGamePlay={onGamePlay}></GameManagementMenu>)

    const button = screen.getByText('description.crearjuego')

    fireEvent.click(button)

    expect(mockUsedNavigate).toHaveBeenCalled()
})