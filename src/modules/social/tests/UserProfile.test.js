import { render, screen, fireEvent } from '@testing-library/react'
import UserProfile from '../components/UserProfile';
import { UserStatusContext } from '../../../context/UserStatusContext';
import { BrowserRouter } from 'react-router-dom';
import useUserProfile from '../hooks/useUserProfile';
import UserProfilePhoto from '../components/UserProfilePhoto';

const div = document.createElement('div')
const testUser = {
    uid: 'uid',
    description: 'description for user',
    displayName: 'name for user',
    instagram: 'instagram url',
    photoURL: 'avatar url',
    registrationDate: 'registration date'
}

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

jest.mock('../components/UserProfilePhoto')

const mockOnUserNameChange = jest.fn()
const mockOnDescriptionChange = jest.fn()
const mockOnInstagramChange = jest.fn()
const mockOnBlurSetName = jest.fn()
const mockOnBlurSetDescription = jest.fn()
const mockOnBlurSetInstagram = jest.fn()
const mockITheUserLogged = jest.fn()
jest.mock('../hooks/useUserProfile', () => (user) => ([user.displayName, user.description, user.instagram,
    mockOnUserNameChange, mockOnDescriptionChange, mockOnInstagramChange, mockOnBlurSetName, mockOnBlurSetDescription,
    mockOnBlurSetInstagram, mockITheUserLogged]))

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

test('renders UserProfile not logged', () => {
    const onLogout = jest.fn()
    mockITheUserLogged.mockReturnValue(false)

    render(<UserStatusContext.Provider value={{ isUserLoged: false }}>
        <UserProfile user={ testUser } onLogout={ onLogout } />
    </UserStatusContext.Provider>)

    const as = screen.getAllByRole('link')
    expect(as.length).toBe(5)
});

test('renders UserProfile logged', () => {
    const onLogout = jest.fn()
    mockITheUserLogged.mockReturnValue(true)

    render(<UserStatusContext.Provider value={{ isUserLoged: true }}>
        <UserProfile user={ testUser } onLogout={ onLogout } />
    </UserStatusContext.Provider>)

    const as = screen.getAllByRole('link')
    expect(as.length).toBe(4)
});

test('on name change', () => {
    const onLogout = jest.fn()

    mockITheUserLogged.mockReturnValue(true)
    render(<BrowserRouter><UserStatusContext.Provider value={{ isUserLoged: true }}>
        <UserProfile user={ testUser } onLogout={ onLogout } />
    </UserStatusContext.Provider></BrowserRouter>)
    const name = screen.getAllByRole('textbox')[0]

    fireEvent.click(name)
    fireEvent.change(name, { target: { value: "other name" }})

    expect(mockOnUserNameChange).toHaveBeenCalled()
});

test('on description change', () => {
    const onLogout = jest.fn()

    mockITheUserLogged.mockReturnValue(true)
    render(<BrowserRouter><UserStatusContext.Provider value={{ isUserLoged: true }}>
        <UserProfile user={ testUser } onLogout={ onLogout } />
    </UserStatusContext.Provider></BrowserRouter>)
    const description = screen.getAllByRole('textbox')[1]

    fireEvent.click(description)
    fireEvent.change(description, { target: { value: "other description" }})

    expect(mockOnDescriptionChange).toHaveBeenCalled()
});

test('on description blur', () => {
    const onLogout = jest.fn()

    mockITheUserLogged.mockReturnValue(true)
    render(<BrowserRouter><UserStatusContext.Provider value={{ isUserLoged: true }}>
        <UserProfile user={ testUser } onLogout={ onLogout } />
    </UserStatusContext.Provider></BrowserRouter>)
    const description = screen.getAllByRole('textbox')[1]

    fireEvent.click(description)
    fireEvent.blur(description)

    expect(mockOnBlurSetDescription).toHaveBeenCalled()
});