import * as React from 'react';
import UserProfilePhoto from './UserProfilePhoto';
import { useTranslation } from 'react-i18next';
import Sharers from './sharers/Sharers';
import { UserStatusContext } from '../../../context/UserStatusContext';
import useUserProfile from '../hooks/useUserProfile';

import '../styles/UserProfile.scss';

interface UserProfileProps {
    user: User,
    onLogout: Function
}

function UserProfile({ user, onLogout }: UserProfileProps) {
    const { t } = useTranslation(['main'])
    const { isUserLoged } = React.useContext(UserStatusContext)
    const [userName, description, instagram, onUserNameChange, onDescriptionChange,
        onInstagramChange, onBlurSetName, onBlurSetDescription, onBlurSetInstagram, isTheUserLogged] = useUserProfile(user)
    const inputUserIsTheLoggedOne = isTheUserLogged(user.uid)

    return <div className="userProfileContainer rounded rounded2">
        <UserProfilePhoto photoUrl={user.photoURL} onLogout={onLogout} inputUserIsTheLoggedOne={inputUserIsTheLoggedOne} />
        <div className="userProfileInlineContainer">
            <div className="name">
                <input type="text"
                    className="bold textOverflow hidenInput"
                    readOnly={ !isUserLoged || !inputUserIsTheLoggedOne }
                    value={ userName }
                    onChange={ onUserNameChange }
                    onBlur={ onBlurSetName } />
            </div>
            <div className='registrationDate'>
                <span className='bold'>{t('description.registro')}</span>: { new Date(user.registrationDate).toLocaleDateString() }
            </div>
            <div className='description'>
                { inputUserIsTheLoggedOne ? <span className='bold'>{t('description.descripcion')}:</span> : <></> }
                <textarea readOnly={ !isUserLoged || !inputUserIsTheLoggedOne }
                    className="hidenInput textOverflow"
                    value={description}
                    onChange={onDescriptionChange}
                    onBlur={onBlurSetDescription} />
            </div>
            { (instagram || inputUserIsTheLoggedOne) ?
                <div className='instagram'>
                    <div className='bold'>Instagram: </div>
                    { inputUserIsTheLoggedOne ? <input type="text"
                            className="textOverflow hidenInput"
                            readOnly={ !isUserLoged || !inputUserIsTheLoggedOne }
                            value={ instagram }
                            onChange={ onInstagramChange }
                            onBlur={ onBlurSetInstagram } /> :
                        instagram ?
                            <a rel="noreferrer" href={`https://www.instagram.com/${instagram}/`} target="_blank">@{instagram}</a> : <></>}
                </div> : <></> }

            <Sharers url={`profile?uid=${user.uid}`}
                headerText={ t('content.comparteenredespiloto') }
                text={ t('content.shareProfileText') } />

            { inputUserIsTheLoggedOne ? <div className='userProfileHelper'>
                <p><span className='bold'>{t('description.ayuda')}:</span> {t('content.editprofile')}</p>
            </div> : <></> }
        </div>
    </div>
}

export default UserProfile
