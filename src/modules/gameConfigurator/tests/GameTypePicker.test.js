import { render, fireEvent, screen } from '@testing-library/react';
import GameTypePicker from '../components/GameTypePicker';
import useGameTypePicker from '../hooks/useGameTypePicker';

const div = document.createElement('div');
const KEY_DOWN = 40

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

const mockOnSelectGameTypeChange = jest.fn()
jest.mock('../hooks/useGameTypePicker',
  () => (selectedGameType, onGameTypeChange) => [0, [<option key="1" value="1"></option>, <option key="2" value="2"></option>], mockOnSelectGameTypeChange])

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

test('renders GameTypePicker', () => {
  const onGameTypeChangeMock = jest.fn()

  render(<GameTypePicker
      onGameTypeChange={onGameTypeChangeMock}
      selectedGameType={0}
      selectedPointsType={0} />, div);

  const select = screen.getByRole('combobox')

  expect(select.length).toBe(2);
  expect(select.childNodes.length).toBe(2)
});

test('onChange calls the callback with correct parameters', () => {
  const onGameTypeChangeMock = jest.fn()

  render(<GameTypePicker
    onGameTypeChange={onGameTypeChangeMock}
    selectedGameType={0}
    selectedPointsType={0} />, div);

  const select = screen.getByRole('combobox')

  fireEvent.change(select, { target: { value: '1' }})
  expect(mockOnSelectGameTypeChange).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({
        value: "1"
      })
    })
  );
});