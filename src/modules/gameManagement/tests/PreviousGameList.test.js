import { render, screen, fireEvent } from '@testing-library/react'
import PreviousGameList from '../components/PreviousGameList'

const div = document.createElement('div')
const previousGameListData = [
    {
        courtesyTime: 0,
        date: "14/10/2023",
        gameStatus: 2,
        gameType: 5,
        gates: [9],
        gid: "RojLmzdOs3HRuYIuRcWl",
        isPublic: false,
        jids: ['Rj4dvcdDSTQKwg0VCaY7Fj6Qd2r1', 'DDzlRnl4s7Ovj72CT6Rq5rmJzc52'],
        judges: [{
            avatar: "https://lh3.googleusercontent.com/a-/AOh14GjXEAbgGCAYymAu9Yi80oe465ViL3G_RIzOEbk6-g=s96-c",
            group: 0,
            id: 0,
            name: "Jose A. \"Neuro\" Anguita",
            points: 0,
            time: 0
        }],
        location: {latitude: 0, longitude: 0},
        maxPoints: 80,
        maxTime: 480000,
        name: "Kiro park 2",
        owner: ['Rj4dvcdDSTQKwg0VCaY7Fj6Qd2r1'],
        players: [{
            avatar: "https://lh3.googleusercontent.com/a-/AOh14GjXEAbgGCAYymAu9Yi80oe465ViL3G_RIzOEbk6-g=s96-c",
            id: 9,
            name: "Jose A. \"Neuro\" Anguita",
            points: 0,
            time: 0
        }],
        uids: ['O7T5XQB8KvgdPaHgZ15onss6sPI2', 'DDzlRnl4s7Ovj72CT6Rq5rmJzc52', 'iTVZP9EUJXg5r8FHvQtPUYn454p1', '5BNgnTWpO3YADAeluLr0lC3ncV72', 'mzcvSbwHHAPGu6h034MW4EZ78FG3', 'hxKoS59vXDZquKayFyEL3AiLtbl2', 'Rj4dvcdDSTQKwg0VCaY7Fj6Qd2r1'],
        zones: 1
    }
]

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
jest.mock('../../../components/Spinner')
jest.mock('../../list/transformers/GameListTransformer', () => ({
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

    const gameList = screen.queryByText('List')
    const previousGamesButton = screen.queryByText('description.cargar')

    expect(screen.queryByText("Spinner")).not.toBeInTheDocument()
    expect(gameList).toBeNull()
    expect(previousGamesButton).not.toBeNull()
})

test('renders PreviousGameList on load', () => {
    const onRemoveStoredGames = jest.fn()
    const onConfigureGames = jest.fn()
    const onLoadPreviousGames = jest.fn()

    render(<PreviousGameList storedGames={[]}
        onRemoveStoredGames={onRemoveStoredGames}
        onConfigureGames={onConfigureGames}
        onLoadPreviousGames={onLoadPreviousGames}></PreviousGameList>)

    fireEvent.click(screen.getByTitle('loadButton'))

    const gameList = screen.queryByText('List')
    const previousGamesButton = screen.queryByText('description.cargar')

    expect(screen.getByText("Spinner")).toBeInTheDocument()
    expect(gameList).toBeNull()
    expect(previousGamesButton).toBeNull()
    expect(onLoadPreviousGames).toHaveBeenCalled()
});

test('renders game list when available', () => {
    const onRemoveStoredGames = jest.fn()
    const onConfigureGames = jest.fn()
    const onLoadPreviousGames = jest.fn()

    render(<PreviousGameList storedGames={previousGameListData}
        onRemoveStoredGames={onRemoveStoredGames}
        onConfigureGames={onConfigureGames}
        onLoadPreviousGames={onLoadPreviousGames}></PreviousGameList>)

    const gameList = screen.queryByText('List')
    const previousGamesButton = screen.queryByText('description.cargar')

    expect(screen.queryByTitle('loadButton')).not.toBeInTheDocument()
    expect(screen.queryByText("Spinner")).not.toBeInTheDocument()
    expect(gameList).not.toBeNull()
    expect(previousGamesButton).toBeNull()
    expect(onLoadPreviousGames).not.toHaveBeenCalled()
});