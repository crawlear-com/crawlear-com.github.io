import { render, screen, fireEvent } from '@testing-library/react'
import GameRequests from '../components/GameRequests'

const div = document.createElement('div')
const user = {
    uid: 'uid',
    description: 'description',
    displayName: 'name',
    instagram: 'instagram url',
    photoURL: 'avatar url',
    registrationDate: 'registration date'
}

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

jest.mock('../hooks/useGameRequests')

beforeEach(()=>{
  document.body.append(div)

  window.crawlear = {
        fb: {
            acceptGameRequest: jest.fn(),
            rejectGameRequest: jest.fn()
        },
        user: { }
    }
});

afterEach(() => {
    window.document.body.removeChild(div)
    delete window.crawlear
})

test('renders GameRequests with requests', () => {
    render(<GameRequests user={ user }/>)

    expect(screen.getByText('description.peticionesdejuego')).toBeInTheDocument()
    expect(screen.getAllByText('description.peticionde:')[0]).toBeInTheDocument()
    expect(screen.getAllByText('description.parajuego:')[0]).toBeInTheDocument()

    expect(screen.getByText('from name')).toBeInTheDocument()
    expect(screen.getByText('game name')).toBeInTheDocument()

    expect(screen.getByText('from name2')).toBeInTheDocument()
    expect(screen.getByText('game name2')).toBeInTheDocument()
})

test('Accept a request', () => {
    render(<GameRequests user={ user }/>)
    const buttons = screen.getAllByRole('img')
    fireEvent.click(buttons[0])

    expect(window.crawlear.fb.acceptGameRequest).toHaveBeenCalledWith(user.uid, 'key1')
})

test('Reject a request', () => {
    render(<GameRequests user={ user }/>)
    const buttons = screen.getAllByRole('img')
    fireEvent.click(buttons[1])

    expect(window.crawlear.fb.rejectGameRequest).toHaveBeenCalledWith(user.uid, 'key1')
})