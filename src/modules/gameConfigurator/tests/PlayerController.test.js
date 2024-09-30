import { render, screen } from '@testing-library/react';
import PlayerController from '../components/PlayerController.js';

const div = document.createElement('div'),
    players = [{"id":1,"name":"Álvaro","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Álvaro","time":0,"points":0},
               {"id":2,"name":"Joan","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Joan","time":0,"points":0},
               {"id":3,"name":"K","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=K","time":0,"points":0},
               {"id":0,"name":"Jose","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Jose","time":0,"points":0}];

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);

  window.crawlear = {
    fbBase: {
        isUserLogged: jest.fn()
      }
  }
});

afterEach(()=> {
    delete window.crawlear;
});

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

jest.mock('../components/PlayerItem')
jest.mock('../components/UserSearchForGame')

test('renders PlayerController', () => {
    const onPlayerNumerChangeMock = jest.fn()
    const onGameDirectorChangeMock = jest.fn()
    render(<PlayerController 
        inPlayers={players}
        isForJudge={false}
        onPlayerNumerChange={onPlayerNumerChangeMock}
        onGameDirectorChange={onGameDirectorChangeMock}
        gameName="game name test"
        maxGroups={1}
        />, div)

    const listItems = screen.getAllByRole('listitem');
    const userSearchElement = screen.getByText('UserSearchForGame')

    expect(listItems.length).toBe(4);
    expect(listItems[0].value).toBe(0);
    expect(listItems[1].value).toBe(1);
    expect(listItems[2].value).toBe(2);
    expect(listItems[3].value).toBe(3);
    expect(onPlayerNumerChangeMock).toHaveBeenCalled()
    expect(userSearchElement).toBeInTheDocument()
});