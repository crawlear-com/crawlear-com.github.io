import { render, screen } from '@testing-library/react'
import GameManagementMenu from '../components/GameManagementMenu'
import GameListTransformer from '../../list/components/GameListTransformer'
import List from '../../list/List'
import GameRequests from '../components/GameRequests'
import UseGameManagementMenu, { onRemoveGames } from '../hooks/UseGameManagementMenu'
import PreviousGameList from '../components/PreviousGameList'

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

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

jest.mock('../../list/List')
jest.mock('../components/GameRequests')
jest.mock('../hooks/UseGameManagementMenu')
jest.mock('../components/PreviousGameList')
jest.mock('../../list/components/GameListTransformer', () => ({
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

    expect(gameRequests).not.toBeNull()
    expect(gameList).not.toBeNull()
    expect(previousGamesButton).not.toBeNull()
});