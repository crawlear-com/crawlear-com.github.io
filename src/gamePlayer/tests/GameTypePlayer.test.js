import { render } from '@testing-library/react';
import GameTypePlayer from '../components/GameTypePlayer.js';
import { Game, GameUtils } from '../../model/Game.ts';
import { gameExtras, getGameContent } from '../../components/games/AecarGameScores.js';

let game, gameContent;
const div = document.createElement('div'),
    players = [{"id":1,"name":"Álvaro","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Álvaro","time":0,"points":0,},
        {"id":2,"name":"Joan","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Joan","time":0,"points":0},
        {"id":3,"name":"K","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=K","time":0,"points":0},
        {"id":0,"name":"Jose","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Jose","time":0,"points":0}];

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

beforeEach(()=>{  
    window.scrollTo = jest.fn();
    document.body.innerHTML = '';
    div.className = 'AppMainContainer';
    document.body.append(div);

    gameContent = getGameContent("", 0,0, 0);
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
        }], [], 600000, 40, 10, 1, 0, [], []);
        GameUtils.init(game);
});

test('renders GameTypePlayer: 0', () => {
    const onGameEndMock = jest.fn(),
        onRepairMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            gameExtras={gameExtras}
            onGameEnd={onGameEndMock}
            onRepair={onRepairMock}
            player={0}
            zone={0}
            game={game}>{gameContent}</GameTypePlayer>, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 1', () => {
    const onGameEndMock = jest.fn(),
        onRepairMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            gameExtras={gameExtras}
            onGameEnd={onGameEndMock}
            onRepair={onRepairMock}
            player={0}
            zone={0}
            game={game}>{gameContent}</GameTypePlayer>, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 2', () => {
    const onGameEndMock = jest.fn(), 
        onRepairMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            gameExtras={gameExtras}
            onGameEnd={onGameEndMock}
            onRepair={onRepairMock}
            player={0}
            zone={0}
            game={game}>{gameContent}</GameTypePlayer>, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});


