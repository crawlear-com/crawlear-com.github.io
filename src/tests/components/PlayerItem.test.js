import { render } from '@testing-library/react';
import PlayerItem from '../../components/PlayerItem.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
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

test('renders PlayerItem', () => {
    const onRemovePlayerMock = jest.fn(),
        onHandicapChangeMock = jest.fn(),
        { container } = render(<PlayerItem player={{
            name: "Player1",
            points: 20,
            handicap: 0,
            time: 10
            }}
            i={0} 
            onRemovePlayer={onRemovePlayerMock}
            onHandicapChange={onHandicapChangeMock} />, div);

    expect(container.querySelector(".playerBox").textContent).toBe("Player1 (0)-");
    expect(container.querySelectorAll(".handicapBox").length).toBe(1);
});

test('- removes the player', () => {
    const onRemovePlayerMock = jest.fn(),
        onHandicapChangeMock = jest.fn(),
        { container } = render(<PlayerItem player={{
            name: "Player1",
            points: 20,
            handicap: 0,
            time: 10
            }}
            i={0} 
            onRemovePlayer={onRemovePlayerMock}
            onHandicapChange={onHandicapChangeMock} />, div);

    expect(container.querySelector(".playerBox").textContent).toBe("Player1 (0)-");
    expect(container.querySelectorAll(".handicapBox").length).toBe(1);
});

test('calls the handicap callback', () => {
    const onRemovePlayerMock = jest.fn(),
        onHandicapChangeMock = jest.fn(),
        { container } = render(<PlayerItem player={{
            name: "Player1",
            points: 20,
            handicap: 0,
            time: 10
            }}
            i={0} 
            onRemovePlayer={onRemovePlayerMock}
            onHandicapChange={onHandicapChangeMock} />, div),
        button = container.querySelector(".picker--arrowUp");

    button.click();
    expect(onHandicapChangeMock).toHaveBeenCalled();
});

test('click PlayerItem handicapBox stopsPropagation', () => {
    const onRemovePlayerMock = jest.fn(),
        onHandicapChangeMock = jest.fn(),
        { container } = render(<PlayerItem player={{
            name: "Player1",
            points: 20,
            handicap: 0,
            time: 10
            }}
            i={0} 
            onRemovePlayer={onRemovePlayerMock}
            onHandicapChange={onHandicapChangeMock} />, div),
        buttonControlTextMinus = container.querySelector(".buttonControlTextMinus"),
        event = document.createEvent('Events');

    event.initEvent('click', true, false);
    event.stopPropagation = jest.fn();
    buttonControlTextMinus.dispatchEvent(event);

    expect(onRemovePlayerMock).toHaveBeenCalled();
});