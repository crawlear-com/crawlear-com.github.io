import { render } from '@testing-library/react';
import WinnerTable from '../../components/WinnerTable.js';
import { Game, GAME_TYPE_AECAR } from '../../games/Game.js';

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
    game = new Game("Game test", 
        new Date(), 
        {
            longitude: 0,
            latitude: 0
        },
        true,
        GAME_TYPE_AECAR,
        [], [], 0, 0, [0], ["uid1","uid2"], ["jid1", "jid2"], 1, 0, "owner", 0);
        
    game.players = [{
        photoURL: "avatar1",
        battery: false,
        id: 0,
        name: "Player1",
        points: 0,
        time: 0,
        uid: "uid1",
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
        photoURL: "avatar2",
        battery: true,
        id: 0,
        name: "Player2",
        points: 0,
        time: 0,
        uid: "uid2",
        zones: [{
            fiascoControlTextValues: [],
            controlTextValues: [],
            gateProgression: 1,
            gateProgressionData: [],
            gatesWithBonification: 0,
            gatesWithFail: 0,
            judgedBy: [],
            points: 11,
            totalPoints: 11,
            simpathyPoints: 0,
            time: 6001,
            handicap: 0
          }]
    }];
    game.judges = [{
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
  
    expect(elem.textContent.indexOf("Player1")).toBe(101);
    expect(elem.textContent.indexOf("Player2")).toBe(152);
  });
