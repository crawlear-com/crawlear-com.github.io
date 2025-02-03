import { renderHook, act } from "@testing-library/react"
import UseGameConfigurator from '../hooks/UseGameConfigurator'
import { Game, GAME_TYPE_LEVANTE, GAME_TYPE_AECAR } from '../../../games/Game';
import { isOffline } from '../../../pages/Offline';
import { OfflinePlayer } from "../../../games/Game";

const div = document.createElement('div')
let winBack

beforeEach(() => {
    winBack = window.scrollTo
    window.scrollTo = jest.fn()

    document.body.appendChild(div)
    window.crawlear = {
        fb: jest.fn(),
        user: { },
        isUserLogged: jest.fn().mockReturnValue(true)
    }
    isOffline.mockClear();
});

afterAll(() => {
    window.scrollTo = winBack
    window.document.body.removeChild(div)
    delete window.crawlear
});

const GAME_POSITION = 0
const GAME_TYPE_CHANGE_POSITION = 3
const LOCATION_CHANGE_POSITION = 4
const JUDGE_CHANGE_POSITION = 5
const PLAYER_CHANGE_POSITION = 6
const MAXPOINTS_CHANGE_POSITION = 7
const MAXTIME_CHANGE_POSITION = 8

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}))

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

jest.mock('../../../pages/Offline', () => ({
    isOffline: jest.fn()
}));

test('onGameTypeChange test', () => {
    isOffline.mockImplementation(() => false);

    const preconfiguredGame = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, [], [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { result } = renderHook(UseGameConfigurator, {
        initialProps: { preconfiguredGame, onGameCreated }
    })
    act(() => {
        //Executing onGameTypeChange returned by the hook
        result.current[GAME_TYPE_CHANGE_POSITION](GAME_TYPE_AECAR)
    })
    expect(result.current[GAME_POSITION].gameType).toBe(GAME_TYPE_AECAR)
});

test('onLocationResolved test', () => {
    isOffline.mockImplementation(() => false);

    const preconfiguredGame = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, [], [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { result } = renderHook(UseGameConfigurator, {
        initialProps: { preconfiguredGame, onGameCreated }
    })
    act(() => {
        result.current[LOCATION_CHANGE_POSITION]({
            latitude: 99,
            longitude: 101
        })
    })
    expect(result.current[GAME_POSITION].location.latitude).toBe(99)
    expect(result.current[GAME_POSITION].location.longitude).toBe(101)
});

test('onJudgeNumerChange test', () => {
    isOffline.mockImplementation(() => false);
    const judges = [0,1]
    const preconfiguredGame = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, [], judges, 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { result } = renderHook(UseGameConfigurator, {
        initialProps: { preconfiguredGame, onGameCreated }
    })
    act(() => {
        result.current[JUDGE_CHANGE_POSITION]([2])
    })
    expect(result.current[GAME_POSITION].judges.length).toBe(1)
    expect(result.current[GAME_POSITION].judges[0]).toBe(2)
});

test('onPlayerNumerChange test', () => {
    isOffline.mockImplementation(() => false);
    const players = [0,1]
    const preconfiguredGame = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, players, [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { result } = renderHook(UseGameConfigurator, {
        initialProps: { preconfiguredGame, onGameCreated }
    })
    act(() => {
        result.current[PLAYER_CHANGE_POSITION]([2])
    })
    expect(result.current[GAME_POSITION].players.length).toBe(1)
    expect(result.current[GAME_POSITION].players[0]).toBe(2)
});

test('onMaxTimeChange test', () => {
    isOffline.mockImplementation(() => false);
    const players = [0,1]
    const preconfiguredGame = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, players, [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { result } = renderHook(UseGameConfigurator, {
        initialProps: { preconfiguredGame, onGameCreated }
    })
    act(() => {
        result.current[MAXTIME_CHANGE_POSITION](10001)
    })
    expect(result.current[GAME_POSITION].maxTime).toBe(10001)
});

test('onMaxPointsChange test', () => {
    isOffline.mockImplementation(() => false);
    const players = [0,1]
    const preconfiguredGame = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, players, [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { result } = renderHook(UseGameConfigurator, {
        initialProps: { preconfiguredGame, onGameCreated }
    })
    act(() => {
        result.current[MAXPOINTS_CHANGE_POSITION](10001)
    })
    expect(result.current[GAME_POSITION].maxPoints).toBe(10001)
});

test('isOffline game has initial judge and director', () => {
    isOffline.mockImplementation(() => true);

    const judges = [0,1]
    const preconfiguredGame = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, [], judges, 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { result } = renderHook(UseGameConfigurator, {
        initialProps: { preconfiguredGame, onGameCreated }
    })
    expect(result.current[GAME_POSITION].judges.length).toBe(1)
    expect(result.current[GAME_POSITION].judges[0]).toStrictEqual(OfflinePlayer)
})
