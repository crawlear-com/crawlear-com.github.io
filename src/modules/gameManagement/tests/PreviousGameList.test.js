import { render, screen, act, fireEvent } from '@testing-library/react'
import PreviousGameList from '../components/PreviousGameList'
import GameList from '../components/GameList'
import Spinner from '../../../components/Spinner';

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

jest.mock('../components/GameList')
jest.mock('../../../components/Spinner')

beforeEach(() => {
    document.body.append(div)
    window.crawlear = {
        fb: jest.fn(),
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
    
    act(() => {
        fireEvent.click(screen.getByTitle('loadButton'))
    })

    const gameList = screen.queryByText('GameList')
    const previousGamesButton = screen.queryByText('description.cargar')

    expect(Spinner).toHaveBeenCalled()
    expect(gameList).toBeNull()
    expect(previousGamesButton).toBeNull()
    expect(onLoadPreviousGames).toHaveBeenCalled()
});