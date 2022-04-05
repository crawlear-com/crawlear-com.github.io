import { render } from '@testing-library/react';
import GameTypePlayer from '../../components/GameTypePlayer.js';
import { Game } from '../../model/Game.js';

let game;
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
  document.body.append(div);

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
                battery: false,
                controlTextValues: [0,5,1,3,2,4,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0],
                fiascoControlTextValues: [0,5,1,3,2,4,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0],
                gateProgression: 10,
                points: 12,
                time: 16480
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
                battery: false,
                controlTextValues: [0,5,1,3,2,4,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0],
                fiascoControlTextValues: [0,5,1,3,2,4,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0],
                gateProgression: 10,
                points: 12,
                time: 16480
            }]
        }], [], 600000, 40, 10, 1, 0, [], []);
});

test('renders GameTypePlayer: 0', () => {
    const onGameEndMock = jest.fn(), 
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            player={0}
            zone={0}
            game={game} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 1', () => {
    const onGameEndMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            player={0}
            zone={0}
            game={game} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 2', () => {
    const onGameEndMock = jest.fn(), 
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            player={0}
            zone={0}
            game={game} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});