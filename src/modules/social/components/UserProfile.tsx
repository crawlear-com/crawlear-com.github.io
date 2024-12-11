import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sharers from './embed/Sharers';
import { UserStatusContext } from '../../../context/UserStatusContext';
import useUserProfile from '../hooks/useUserProfile';

import '../styles/UserProfile.scss';

interface UserProfileProps {
    user: User,
    onLogout: Function
}

function UserProfile({ user, onLogout }: UserProfileProps) {
    const { t } = useTranslation(['main'])
    const [userName, description, instagram, followActionElement,
        onUserNameChange, onDescriptionChange, onInstagramChange, onBlurSetName,
        onBlurSetDescription, onBlurSetInstagram, isTheUserLogged] = useUserProfile(user)
    const navigate = useNavigate()
    const { isUserLoged } = React.useContext(UserStatusContext)

    return <div className="userProfileContainer rounded rounded2">
        <div className="userProfilePhotoContainer">
            { !isUserLoged || !isTheUserLogged(user.uid) ?
                <a href={`https://crawlear.com/profile?uid=${user.uid}`}>
                    <img referrerPolicy="no-referrer" className="photo" src={user.photoURL} alt="user avatar"></img>
                </a>:
                <img referrerPolicy="no-referrer" className="photo" src={user.photoURL} alt="user avatar"></img> }

            <div className='sharerContainer'>
                { isTheUserLogged(user.uid) ? <div className='logout'
                onClick={()=> {
                    window.crawlear.fb.logout()
                    onLogout && onLogout()
                    navigate("/")
            }}>Logout</div> : <></> }
            { followActionElement }
            </div>
        </div>
        <div className="userProfileInlineContainer">
            <div className="name">
                <input type="text"
                    className="bold textOverflow hidenInput"
                    readOnly={ !isUserLoged || !isTheUserLogged(user.uid) }
                    value={ userName }
                    onChange={ onUserNameChange }
                    onBlur={ onBlurSetName } />
            </div>
            { isTheUserLogged(user.uid) ? <div className='registrationDate'>
                <span className='bold'>{t('description.registro')}</span>: {new Date(user.registrationDate).toLocaleDateString()}
                </div> : <></> }
            <div className='description'>
                { isTheUserLogged(user.uid) ? <span className='bold'>{t('description.descripcion')}:</span> : <></> }
                <textarea readOnly={!isUserLoged || !isTheUserLogged(user.uid)}
                    className="hidenInput textOverflow"
                    value={description}
                    onChange={onDescriptionChange}
                    onBlur={onBlurSetDescription} />
            </div>
            { (((!isUserLoged || !isTheUserLogged(user.uid)) && instagram) || isTheUserLogged(user.uid)) ?
            <div className='instagram'>
                <div className='bold'>Instagram: </div>
                {isTheUserLogged(user.uid) ? <input type="text"
                        className="textOverflow hidenInput"
                        readOnly={ !isUserLoged || !isTheUserLogged(user.uid) }
                        value={ instagram }
                        onChange={ onInstagramChange }
                        onBlur={ onBlurSetInstagram } /> :
                    instagram ?
                        <a rel="noreferrer" href={`https://www.instagram.com/${instagram}/`} target="_blank">@{instagram}</a> : <></>}
            </div> : <></> }

            <Sharers url={`profile?uid=${user.uid}`}
                headerText={ t('content.comparteenredespiloto') }
                text={ t('content.shareProfileText') } />

            { isTheUserLogged(user.uid) ? <div className='userProfileHelper'>
                <p><span className='bold'>{t('description.ayuda')}:</span> {t('content.editprofile')}</p>
            </div> : <></> }
        </div>
    </div>
}

export default UserProfile
