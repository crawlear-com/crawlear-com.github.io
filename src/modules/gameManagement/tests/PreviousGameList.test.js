import { render, screen, act, fireEvent } from '@testing-library/react'
import PreviousGameList from '../components/PreviousGameList'
import Spinner from '../../../components/Spinner'
import List from '../../list/List'
import Game from '../../../games/Game'
import GameListTransformer from '../../list/components/GameListTransformer'


const div = document.createElement('div')

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

jest.mock('../../list/List')
jest.mock('../../../components/Spinner')
jest.mock('../../../games/Game')
jest.mock('../../list/components/GameListTransformer', () => ({
    itemTransform: jest.fn()
}))

beforeEach(() => {
    document.body.append(div)
    window.crawlear = {
        fbBase: jest.fn(),
        user: {
            uid: 'userUid'
        }
      }    
});

afterEach(() => {
    window.document.body.removeChild(div)
    delete window.crawlear
})

test('renders PreviousGameList on initial state', () => {
    const onRemoveStoredGames = jest.fn()
    const onConfigureGames = jest.fn()
    const onLoadPreviousGames = jest.fn()

    render(<PreviousGameList storedGames={[]}
        onRemoveStoredGames={onRemoveStoredGames}
        onConfigureGames={onConfigureGames}
        onLoadPreviousGames={onLoadPreviousGames}></PreviousGameList>)

    const gameList = screen.queryByText('GameList')
    const previousGamesButton = screen.queryByText('description.cargar')

    expect(Spinner).not.toHaveBeenCalled()
    expect(gameList).toBeNull()
    expect(previousGamesButton).not.toBeNull()
})

test('renders PreviousGameList on load', () => {
    const onRemoveStoredGames = jest.fn()
    const onConfigureGames = jest.fn()
    const onLoadPreviousGames = jest.fn()

    const { container } = render(<PreviousGameList storedGames={[]}
        onRemoveStoredGames={onRemoveStoredGames}
        onConfigureGames={onConfigureGames}
        onLoadPreviousGames={onLoadPreviousGames}></PreviousGameList>)
    

    fireEvent.click(screen.getByTitle('loadButton'))

    const gameList = screen.queryByText('GameList')
    const previousGamesButton = screen.queryByText('description.cargar')

    expect(Spinner).toHaveBeenCalled()
    expect(gameList).toBeNull()
    expect(previousGamesButton).toBeNull()
    expect(onLoadPreviousGames).toHaveBeenCalled()
});