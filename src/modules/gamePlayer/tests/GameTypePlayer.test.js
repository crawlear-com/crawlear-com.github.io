import { render } from '@testing-library/react'
import GameTypePlayer from '../components/GameTypePlayer'
import { Game, GameUtils } from '../../../games/Game'
import { GameContext } from '../../../context/GameContext'
import CoreGame from '../components/CoreGame'
import KingGame from '../components/KingGame'

let game, gameContent
const div = document.createElement('div')
const gameExtras = {
    controlTextValuesInit: jest.fn(),
    fiascoControlTextValuesInit: jest.fn(),
    onTimerChange: jest.fn(),
    onChangeScore:  jest.fn(),
    onEndPlayer:  jest.fn(),
    onGameEnd:  jest.fn(),
    onGateProgressionChange: jest.fn(),
    onFiascoChangeScore: jest.fn(),
    onPointBecauseLastMinute: jest.fn(),
    generateSliderMarksFromGates: jest.fn(),
    doPageView:jest.fn()
};
const getGameContent = jest.fn().mockImplementation(() => {
    return  <div></div>
})

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

jest.mock('../components/CoreGame')
jest.mock('../components/KingGame')

beforeEach(()=>{
    window.scrollTo = jest.fn()
    document.body.innerHTML = ''
    div.className = 'AppMainContainer'
    document.body.append(div)

    gameContent = getGameContent("", 0,0, 0)
    game = new Game("",
        new Date().toLocaleDateString(),
        { latitude: 0, longitude: 0 },
        false, 2,
        [{
            avatar: "https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=D2",
            id: 0,
            name: "D1",
            points: 0,
            time: 0,
            totalGateProgression: 10,
            totalPoints: 12,
            totalTime: 16480,
            uid: "",
            zones: [{
                fiascoControlTextValues: [],
                controlTextValues: [],
                gateProgression: 1,
                gateProgressionData: [],
                gatesWithBonification: 0,
                gatesWithFail: 0,
                judgedBy: [],
                points: 10,
                totalPoints: 10,
                simpathyPoints: 0,
                time: 6000,
                handicap: 0
              }]
        },{
            avatar: "https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=D2",
            id: 1,
            name: "D2",
            points: 0,
            time: 0,
            totalGateProgression: 10,
            totalPoints: 12,
            totalTime: 16480,
            uid: "",
            zones: [{
                fiascoControlTextValues: [],
                controlTextValues: [],
                gateProgression: 1,
                gateProgressionData: [],
                gatesWithBonification: 0,
                gatesWithFail: 0,
                judgedBy: [],
                points: 10,
                totalPoints: 10,
                simpathyPoints: 0,
                time: 6000,
                handicap: 0
              }]
        }], [], 600000, 40, 10, 1, 0, [], [])
        GameUtils.init(game)
})

test('renders GameTypePlayer: not king game uses CoreGame', () => {
    const onGameEndMock = jest.fn(),
        onRepairMock = jest.fn()
    render(<GameContext.Provider value={{game: game }}>
            <GameTypePlayer
                gameExtras={gameExtras}
                onGameEnd={onGameEndMock}
                onRepair={onRepairMock}
                player={0}
                zone={0}
                game={game}>{gameContent}</GameTypePlayer>
            </GameContext.Provider>, div)
    expect(CoreGame).toHaveBeenCalled()
    expect(KingGame).not.toHaveBeenCalled()
});

test('renders GameTypePlayer: king game uses KingGame', () => {
    game.gameType = 1
    const onGameEndMock = jest.fn(),
        onRepairMock = jest.fn()

    render(<GameContext.Provider value={{game: game }}>
        <GameTypePlayer
            gameExtras={gameExtras}
            onGameEnd={onGameEndMock}
            onRepair={onRepairMock}
            player={0}
            zone={0}
            game={game}>{gameContent}</GameTypePlayer>
        </GameContext.Provider>, div)
    expect(CoreGame).not.toHaveBeenCalled()
    expect(KingGame).toHaveBeenCalled()
});
