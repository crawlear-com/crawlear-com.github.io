import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../resources/css/UserProfile.scss';

function UserProfile({user, onLogout}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const navigate = useNavigate();
    const [userName, setUserName] = React.useState(user.displayName);
    const [description, setDescription] = React.useState(user.description);

    function onUserNameChange(event) {
        const newUserName = event.target.value;

        if(newUserName !== userName && newUserName.length>0) {
            setUserName(newUserName);
        }
    }

    function onDescriptionChange(event) {
        const newDescription = event.target.value;

        if(newDescription !== description) {
            setDescription(newDescription);
        }
    }

    function onBlurSetName(event) {
        const newUserName = event.target.value;

        if(user.displayName !== newUserName && newUserName.length>0) {
            user.displayName = newUserName;
            setUserName(newUserName);
            firebase.setUser(user,()=>{ },()=>{ });
        }
    }

    function onBlurSetDescription(event) {
        const newDescription = event.target.value;

        if(user.description !== newDescription) {
            user.description = newDescription;
            setDescription(newDescription);
            firebase.setUser(user,()=>{ },()=>{ });
        }
    }

    return <div className="userProfileContainer rounded rounded2">
        <div className="userProfilePhotoContainer">
            <img referrerPolicy="no-referrer" className="photo" src={user.photoURL} alt="user avatar"></img>
            <div className='logout' onClick={()=> {
                    window.crawlear.fb.logout();
                    onLogout();
                    navigate("/");
                }} >Logout</div>
        </div>
        <div className="userProfileInlineContainer">
            <div className="name">
                <input type="text" className="bold textOverflow hidenInput" 
                    value={userName} 
                    onChange={onUserNameChange}
                    onBlur={onBlurSetName} />
            </div>
            <div className='registrationDate'>
                <span className='bold'>{t('description.registro')}</span>: {user.registrationDate}
            </div>
            <div className="handicap">
                <span className='bold'>{t('description.handicap')}</span>: {user.handicap}</div>
            <p className='description'>
                <span className='bold'>{t('description.descripcion')}</span>: 
                <textarea type="text" className="hidenInput textOverflow" 
                    value={description} 
                    onChange={onDescriptionChange} 
                    onBlur={onBlurSetDescription} />
            </p>
        </div>
    </div>;
}

export default UserProfile;