import { render, fireEvent, getByLabelText, findByText, getByText, findByDisplayValue } from '@testing-library/react';
import GameTypeController from '../../components/GameTypeController.js';

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
  fireEvent.focus(getByLabelText(container, label))
  fireEvent.keyDown(getByLabelText(container, label), {
    keyCode: KEY_DOWN,
  })

  await findByText(container, choice)
  fireEvent.click(getByText(container, choice))
  await findByDisplayValue(container, choice)
}

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders GameTypeController', () => {
  const onGameTypeChangeMock = jest.fn(), 
    onPointsTypeChangeMock = jest.fn(),
    { container } = render(<GameTypeController
        onGameTypeChange={onGameTypeChangeMock}
        onPointsTypeChange={onPointsTypeChangeMock}
        selectedGameType={0}
        selectedPointsType={0} />, div);

    const selects = container.querySelectorAll('select'),
        selectGameType = selects[0],
        selectGameMode = selects[1];

    expect(selects.length).toBe(2);
    expect(selectGameType.querySelectorAll('option').length).toBe(3);
    expect(selectGameMode.querySelectorAll('option').length).toBe(2);
});
