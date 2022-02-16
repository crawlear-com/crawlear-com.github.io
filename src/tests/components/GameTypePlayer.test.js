import { render } from '@testing-library/react';
import GameTypePlayer from '../../components/GameTypePlayer.js';
import Game from '../../model/Game.js';

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
  document.body.innerHTML = '';
  document.body.append(div);

  game = new Game("game test", new Date(), true, {
        longitude: 0,
        latitude: 0
    }, [{
        name: "Player1",
        points: 100,
        time: 5,
        controlTextValues: [5,3,2,5,5,3,-1]
    },{
        name: "Player2",
        points: 10,
        time: 10,
        controlTextValues: [5,3,2,5,5,3,-1]
    }], 0, 0, 0, [], 0, 0);

});

test('renders GameTypePlayer: 0', () => {
    const onGameEndMock = jest.fn(), 
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            game={game} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 1', () => {
    const onGameEndMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            game={game} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 2', () => {
    const onGameEndMock = jest.fn(), 
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            game={game} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});