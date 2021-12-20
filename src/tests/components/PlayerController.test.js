import { render } from '@testing-library/react';
import PlayerController from '../../components/PlayerController.js';

const div = document.createElement('div'),
    players = [{"id":1,"name":"Álvaro","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Álvaro","time":0,"points":0,"handicap":0},
               {"id":2,"name":"Joan","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Joan","time":0,"points":0,"handicap":0},
               {"id":3,"name":"K","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=K","time":0,"points":0,"handicap":0},
               {"id":0,"name":"Jose","avatar":"https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=Jose","time":0,"points":0,"handicap":0}];

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
  localStorage.setItem("players", JSON.stringify(players));
});

afterEach(()=> {
    localStorage.clear();
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

test('renders PlayerController', () => {
    const onPlayerNumerChangeMock = jest.fn(),
        { container } = render(<PlayerController onPlayerNumerChange={onPlayerNumerChangeMock} />, div),
        listItems = container.querySelectorAll(".playersList > li");

    expect(listItems.length).toBe(4);
    expect(listItems[0].querySelector(".playerBox").textContent).toBe("Álvaro (0)-");
    expect(listItems[1].querySelector(".playerBox").textContent).toBe("Joan (0)-");
    expect(listItems[2].querySelector(".playerBox").textContent).toBe("K (0)-");
    expect(listItems[3].querySelector(".playerBox").textContent).toBe("Jose (0)-");
});

test('randomizes on demand', () => {
    const onPlayerNumerChangeMock = jest.fn(),
        { container } = render(<PlayerController onPlayerNumerChange={onPlayerNumerChangeMock} />, div),
        randomButton = container.querySelector(".buttonRandomOrder");

    randomButton.click();
    expect(onPlayerNumerChangeMock).toHaveBeenCalled();
});