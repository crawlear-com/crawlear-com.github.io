import { render } from '@testing-library/react';
import WinnerTable from '../../components/WinnerTable.js';

const div = document.createElement('div'),
    goToMenuMock = jest.fn();

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

test("renders the basic winner table", () => {
  const { container } = render(<WinnerTable mode={0} goToMenu={goToMenuMock} orderedPlayers={[{
      name: "Player1",
      points: 0,
      time: 0,
      handicap: 0
  }]} />, div);

  const elem  = container.querySelector(".winnerBox");

  expect(elem.textContent.indexOf("Player1")).toBeGreaterThan(0);
});

test("renders the winner table", () => {
    const { container } = render(<WinnerTable mode={0} goToMenu={goToMenuMock} orderedPlayers={[{
        name: "Player1",
        points: 100,
        time: 5,
        handicap: 0
    },{
        name: "Player2",
        points: 10,
        time: 10,
        handicap: 0
    }]} />, div);
  
    const elem  = container.querySelector(".winnerBox");
  
    expect(elem.textContent.indexOf("Player1")).toBe(21);
    expect(elem.textContent.indexOf("Player2")).toBe(-1);
  });
  
  test("calls the goToMenu callback", () => {
    const { container } = render(<WinnerTable mode={0} goToMenu={goToMenuMock} orderedPlayers={[{
        name: "Player1",
        points: 10,
        time: 5,
        handicap: 0
    }]} />, div);
  
    const goBackButton  = container.querySelector("button");
  
    goBackButton.click();
    expect(goToMenuMock).toHaveBeenCalled();
  });