import { render, screen } from '@testing-library/react';
import TotalTimeGame from '../../components/games/TotalTimeGame.js';
import GameTypePlayer from '../../components/GameTypePlayer.js';

const div = document.createElement('div'),
    players = [{"id":1,"name":"Álvaro","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Álvaro","time":0,"points":0,"handicap":0},
        {"id":2,"name":"Joan","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Joan","time":0,"points":0,"handicap":0},
        {"id":3,"name":"K","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=K","time":0,"points":0,"handicap":0},
        {"id":0,"name":"Jose","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Jose","time":0,"points":0,"handicap":0}];

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
});

test('renders GameTypePlayer: 0', () => {
    const onGameEndMock = jest.fn(), goToMenuMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            goToMenu={goToMenuMock}
            gameSelected={0}
            pointsTypeSelected={0}
            players={players} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 1', () => {
    const onGameEndMock = jest.fn(), goToMenuMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            goToMenu={goToMenuMock}
            gameSelected={1}
            pointsTypeSelected={0}
            players={players} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('renders GameTypePlayer: 2', () => {
    const onGameEndMock = jest.fn(), 
        goToMenuMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            goToMenu={goToMenuMock}
            gameSelected={2}
            pointsTypeSelected={0}
            players={players} />, div);
    expect(container.querySelector('.gameContainer')).not.toBeNull();
    expect(container.querySelector('.gameContainer')).not.toBeUndefined();
});

test('render back button', () => {
    const onGameEndMock = jest.fn(), 
        goToMenuMock = jest.fn(),
        { container } = render(<GameTypePlayer 
            onGameEnd={onGameEndMock}
            goToMenu={goToMenuMock}
            gameSelected={2}
            pointsTypeSelected={0}
            players={players} />, div),
        button = container.querySelector(".backButton");

    button.click();
    expect(goToMenuMock).toHaveBeenCalled();
});