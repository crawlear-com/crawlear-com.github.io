import { render, screen } from '@testing-library/react'
import WinnerTable from '../../components/WinnerTable'

import { Game, GAME_TYPE_AECAR } from '../../games/Game'

const div = document.createElement('div');
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

jest.mock('../../modules/social/components/embed/Sharers')
jest.mock('../../components/WinnerOrTieBox')
jest.mock('../../components/GameHeaderInfo')
jest.mock('../../components/GameResultTable/GameResultTable')
jest.mock('../../components/Spinner')

beforeEach(()=>{
    document.body.innerHTML = ''
    document.body.append(div)
    game = new Game("Game test",
        new Date(),
        {
            longitude: 0,
            latitude: 0
        },
        true,
        GAME_TYPE_AECAR,
        [], [], 0, 0, [0], ["uid1","uid2"], ["jid1", "jid2"], 1, 0, "owner", 0)
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
    }]
})

test("renders the basic winner table with all the elements", () => {
  render(<WinnerTable game={game} />, div)

  expect(screen.getByText("winnerOrTieBox")).toBeInTheDocument()
  expect(screen.getByText("GameHeaderInfo")).toBeInTheDocument()
  expect(screen.getByText("GameResultTable")).toBeInTheDocument()
  expect(screen.getByText("sharers box")).toBeInTheDocument()
})

test("render spinner if game does not exist", () => {
    delete game.players
    render(<WinnerTable game={game} />, div)

    expect(screen.queryByText("winnerOrTieBox")).not.toBeInTheDocument()
    expect(screen.queryByText("GameHeaderInfo")).not.toBeInTheDocument()
    expect(screen.queryByText("GameResultTable")).not.toBeInTheDocument()
    expect(screen.queryByText("sharers box")).not.toBeInTheDocument()
    expect(screen.getByText("Spinner")).toBeInTheDocument()
} )