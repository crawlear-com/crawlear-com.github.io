import { render } from '@testing-library/react';
import WinnerTable from '../../components/WinnerTable.js';
import { Game } from '../../model/Game.js';

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
    game = new Game("game test", new Date(), true, {
            longitude: 0,
            latitude: 0
        }, [], 0, 0, 0, [], 0, 0, 1, 1);

    game.players = [{
        photoURL: "avatar1",
        battery: false,
        id: 0,
        name: "Player1",
        points: 0,
        time: 0,
        uid: "uid1",
        zones: [{
            battery: false,
            controlTextValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            points: 10,
            time: 0 
        }]
    },{
        photoURL: "avatar2",
        battery: true,
        id: 0,
        name: "Player2",
        points: 0,
        time: 0,
        uid: "uid2",
        zones: [{
            battery: false,
            controlTextValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            points: 5,
            time: 0 
        }]
    }];
});

test("renders the basic winner table", () => {
  const { container } = render(<WinnerTable game={game} />, div);
  const elem  = container.querySelector(".gameParticipants");

  expect(elem.textContent.indexOf("Player1")).toBeGreaterThan(0);
});

test("renders the winner table", () => {
    const { container } = render(<WinnerTable game={game} />, div);  
    const elem  = container.querySelector(".gameParticipants");
  
    expect(elem.textContent.indexOf("Player1")).toBe(48);
    expect(elem.textContent.indexOf("Player2")).toBe(98);
  });
