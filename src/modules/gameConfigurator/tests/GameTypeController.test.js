import { render, fireEvent, screen } from '@testing-library/react';
import GameTypeController from '../components/GameTypeController.js';

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

const KEY_DOWN = 40

export async function selectItem(container, label, choice) {
  fireEvent.focus(screen.getByLabelText(container, label))
  fireEvent.keyDown(screen.getByLabelText(container, label), {
    keyCode: KEY_DOWN,
  })

  await screen.findByText(container, choice)
  fireEvent.click(screen.getByText(container, choice))
  await screen.findByDisplayValue(container, choice)
}

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders GameTypeController', () => {
  const onGameTypeChangeMock = jest.fn(), 
    onPointsTypeChangeMock = jest.fn()

    render(<GameTypeController
        onGameTypeChange={onGameTypeChangeMock}
        onPointsTypeChange={onPointsTypeChangeMock}
        selectedGameType={0}
        selectedPointsType={0} />, div);

    const select = screen.getByRole('combobox')

    expect(select.length).toBe(7);
    expect(select.childNodes.length).toBe(7)
});

test('onChange calls the callback with correct parameters', () => {
  const onGameTypeChangeMock = jest.fn(), 
    onPointsTypeChangeMock = jest.fn()

  render(<GameTypeController
    onGameTypeChange={onGameTypeChangeMock}
    onPointsTypeChange={onPointsTypeChangeMock}
    selectedGameType={0}
    selectedPointsType={0} />, div);

  const select = screen.getByRole('combobox')

  fireEvent.change(select, { target: { value: '2' }})
  expect(onGameTypeChangeMock).toHaveBeenCalledWith(2)
});