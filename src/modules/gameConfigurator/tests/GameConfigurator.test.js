import { render, screen } from '@testing-library/react'
import GameConfigurator from '../pages/GameConfigurator'
import ZonesPicker from '../components/ZonesPicker'
import GateProgressionPicker from '../components/GateProgressionPicker'
import UserSearchForGame from '../components/UserSearchForGame'
import { Game, GAME_TYPE_LEVANTE } from '../../../games/Game'
import { UserStatusContext } from '../../../context/UserStatusContext'

const div = document.createElement('div')

beforeEach(()=>{  
  document.body.appendChild(div);
  window.scrollTo = jest.fn()
  window.crawlear = {
    fb: {
        checkIfLogged: jest.fn(),
        isUserLogged: jest.fn()
    },
    user: { }
  } 
})

afterEach(()=>{  
    document.body.removeChild(div);
})

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

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

jest.mock('../components/ZonesPicker')
jest.mock('../components/UserSearchForGame')
jest.mock('../components/GateProgressionPicker')

test('renders GameConfigurator', () => {
    const game = new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        false, GAME_TYPE_LEVANTE, [], [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])
    const onGameCreated = jest.fn()
    const { container } = render(
        <UserStatusContext.Provider value={{ isUserLoged: true }}>
            <GameConfigurator preconfiguredGame={game} onGameCreated={onGameCreated} />, div)
        </UserStatusContext.Provider>)

    const progressionPickerContainer = screen.getByText('gateProgressionPicker')
    const zonesPickerContainer = screen.getByText('zonesPicker')
    expect(progressionPickerContainer).not.toBeNull()
    expect(zonesPickerContainer).not.toBeNull()
    expect(UserSearchForGame).toHaveBeenCalled()
})