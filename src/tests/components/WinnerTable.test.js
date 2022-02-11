import { render } from '@testing-library/react';
import WinnerTable from '../../components/WinnerTable.js';
import Game from '../../model/Game.js';

const div = document.createElement('div'),
    goToMenuMock = jest.fn();
let game;

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
    //{"id":0,"uid":"","name":"1","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=1","time":0,"points":22,"controlTextValues":[5,3,2,5,5,3,-1]}
  game = new Game("game test", new Date(), true, {
        longitude: 0,
        latitude: 0
    }, [], 0, 0, 0, [], 0, 0);
});

test("renders the basic winner table", () => {
    game.players = [{
        name: "Player1",
        points: 0,
        time: 0,
        controlTextValues: [5,3,2,5,5,3,-1]
    }];

  const { container } = render(<WinnerTable game={game} />, div);
  const elem  = container.querySelector(".winnerBox");

  expect(elem.textContent.indexOf("Player1")).toBeGreaterThan(0);
});

test("renders the winner table", () => {
    game.players = [{
        name: "Player1",
        points: 100,
        time: 5,
        controlTextValues: [5,3,2,5,5,3,-1]
    },{
        name: "Player2",
        points: 10,
        time: 10,
        controlTextValues: [5,3,2,5,5,3,-1]
    }];
    const { container } = render(<WinnerTable game={game} />, div);
  
    const elem  = container.querySelector(".winnerBox");
  
    expect(elem.textContent.indexOf("Player1")).toBe(21);
    expect(elem.textContent.indexOf("Player2")).toBe(-1);
  });
