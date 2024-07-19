import { render, screen } from '@testing-library/react';
import PlayerController from '../components/PlayerController.js';

const div = document.createElement('div')
/*    players = [{"id":1,"name":"Álvaro","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Álvaro","time":0,"points":0},
               {"id":2,"name":"Joan","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Joan","time":0,"points":0},
               {"id":3,"name":"K","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=K","time":0,"points":0},
               {"id":0,"name":"Jose","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Jose","time":0,"points":0}];
*/

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
    render(<PlayerController 
            onPlayerNumerChange={onPlayerNumerChangeMock}
            gameName="game name test"
            />, div)

    const listItems = screen.getByRole("listitem");

    expect(listItems.length).toBe(0);
/*    expect(listItems[0].querySelector(".playerBox").textContent).toBe("Álvaro (0)-");
    expect(listItems[1].querySelector(".playerBox").textContent).toBe("Joan (0)-");
    expect(listItems[2].querySelector(".playerBox").textContent).toBe("K (0)-");
    expect(listItems[3].querySelector(".playerBox").textContent).toBe("Jose (0)-");*/
});

/*
test('randomizes on demand', () => {
    const onPlayerNumerChangeMock = jest.fn(),
        { container } = render(<PlayerController 
            onPlayerNumerChange={onPlayerNumerChangeMock}
            gameName="game name test" />, div),
        randomButton = container.querySelector(".buttonRandomOrder");

    randomButton.click();
    expect(onPlayerNumerChangeMock).toHaveBeenCalled();
});*/