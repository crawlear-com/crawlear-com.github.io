import { render, fireEvent, getByLabelText, findByText, getByText, findByDisplayValue } from '@testing-library/react';
import GameManagementMenu from '../../components/GameManagementMenu.js';
import GameList from '../../components/GameList.js';
import GameRequests from '../../components/GameRequests.js';
import UseGameManagementMenu, { onRemoveGames } from '../../hooks/UseGameManagementMenu.ts';

const div = document.createElement('div');

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

jest.mock('../../components/GameList.js')
jest.mock('../../components/GameRequests.js')
jest.mock('../../hooks/UseGameManagementMenu.ts')

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);

  window.crawlear = {
    fb: jest.fn(),
    user: { }
  }
});

afterEach(() => {
    window.document.body.removeChild(div)
    delete window.crawlear
})

test('renders GameManagementMenu', () => {
    const onConfigureGame = jest.fn()
    const onGamePlay = jest.fn()

    render(<GameManagementMenu 
        onConfigureGame={onConfigureGame}
        onGamePlay={onGamePlay}></GameManagementMenu>)

    expect(GameRequests).toHaveBeenCalled()
    expect(GameList).toHaveBeenCalled()
});