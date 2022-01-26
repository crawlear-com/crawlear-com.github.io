import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../resources/css/UserProfile.scss';

function UserProfile({user, onLogout}) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return <div className="userProfileContainer rounded rounded2">
        <img referrerPolicy="no-referrer" className="photo" src={user.photoURL} alt="user avatar"></img>
        <div className="userProfileInlineContainer">
            <div className="name bold textOverflow">{user.displayName}</div>
            <div className='registrationDate'>
                <span className='bold'>{t('description.registro')}</span>: {user.registrationDate}
            </div>
            <div className="handicap">
                <span className='bold'>{t('description.handicap')}</span>: {user.handicap}</div>
            <div className='logout' onClick={()=> {
                window.crawlear.fb.logout();
                onLogout();
                navigate("/");
            }} >Logout</div>
            <p className='description'>
                <span className='bold'>{t('description.descripcion')}</span>: {user.description}
            </p>
        </div>
    </div>;
}

export default UserProfile;