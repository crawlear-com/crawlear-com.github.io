import { render, screen } from '@testing-library/react';
import PlayerItem from '../components/PlayerItem.js';

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
    const onRemovePlayerMock = jest.fn()

    render(<PlayerItem player={{
            name: "Player1",
            points: 20,
            time: 10
        }}
        i={0}
        onRemovePlayer={onRemovePlayerMock} />, div);

    expect(screen.getByText("Player1")).toBeInTheDocument()
});

test('- removes the player', () => {
    const onRemovePlayerMock = jest.fn()

    render(<PlayerItem player={{
            name: "Player1",
            points: 20,
            time: 10
        }}
        i={0}
        onRemovePlayer={onRemovePlayerMock} />, div)

    expect(screen.getByText("Player1")).toBeInTheDocument()
});
