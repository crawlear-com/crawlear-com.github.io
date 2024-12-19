import { render, screen, fireEvent } from '@testing-library/react'
import { UserStatusContext } from '../../../context/UserStatusContext';
import UserProfilePhoto from '../components/UserProfilePhoto';

const div = document.createElement('div')

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}))

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            }
        };
    }
}))

beforeEach(()=>{
    document.body.innerHTML = ''
    document.body.append(div)

    window.crawlear = {
        fb: {
            logout: jest.fn(),
            setFollow: jest.fn(),
            removeFollow: jest.fn(),
            getFidFromFollow: jest.fn()
        },
        fbBase: {
            isUserLogged: jest.fn(),
            sewtUser: jest.fn()
        },
        user: {
            uid: 'uid'
        }
    }
});

test('renders UserProfilePhoto not logged', () => {
    const onLogout = jest.fn()

    render(<UserStatusContext.Provider value={{ isUserLoged: true }}>
        <UserProfilePhoto uid='uid' photoUrl='photoUrl' inputUserIsTheLoggedOne={false} onLogout={onLogout} />
    </UserStatusContext.Provider>)
    const photo = screen.getByRole('img')

    expect(window.crawlear.fb.getFidFromFollow).toHaveBeenCalled()
    expect(screen.getByText('description.follow')).toBeInTheDocument()
    expect(photo).toBeInTheDocument()
    expect(photo.src).toBe('http://localhost/photoUrl')
});


test('renders UserProfilePhoto logout', () => {
    const onLogout = jest.fn()

    render(<UserStatusContext.Provider value={{ isUserLoged: true }}>
        <UserProfilePhoto uid='uid' photoUrl='photoUrl' inputUserIsTheLoggedOne={true} onLogout={onLogout} />
    </UserStatusContext.Provider>)
    const logout = screen.getByText('Logout')

    fireEvent.click(logout)

    expect(onLogout).toHaveBeenCalled()
});
