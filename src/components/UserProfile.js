import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FacebookSharer from './embed/FacebookSharer';
import TwitterSharer from './embed/TwitterSharer';
import TelegramSharer from './embed/TelegramSharer';
import WhatsappSharer from './embed/WhatsappSharer';

import '../resources/css/UserProfile.scss';


function UserProfile({user, onLogout}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const navigate = useNavigate();
    const [userName, setUserName] = React.useState(user.displayName);
    const [description, setDescription] = React.useState(user.description);
    const [instagram, setInstagram] = React.useState(user.instagram);
    const readOnly = !(window.crawlear && window.crawlear.user && window.crawlear.user.uid) || (window.crawlear && window.crawlear.user && window.crawlear.user.uid !== user.uid) ;

    function onUserNameChange(event) {
        const newUserName = event.target.value;

        if(!readOnly && newUserName !== userName && newUserName.length>0) {
            setUserName(newUserName);
        }
    }

    function onDescriptionChange(event) {
        const newDescription = event.target.value;

        if(!readOnly && newDescription !== description) {
            setDescription(newDescription);
        }
    }

    function onInstagramChange(event) {
        const newInstagram = event.target.value;

        if(!readOnly && newInstagram !== instagram) {
            setInstagram(newInstagram);
        }
    }

    function onBlurSetName(event) {
        const newUserName = event.target.value;

        if(!readOnly && user.displayName !== newUserName && newUserName.length>0) {
            user.displayName = newUserName;
            setUserName(newUserName);
            firebase.setUser(user,()=>{ },()=>{ });
        }
    }


    function onBlurSetInstagram(event) {
        const newInstagram = event.target.value;

        if(!readOnly && user.instagram !== newInstagram) {
            user.instagram = newInstagram;
            setInstagram(newInstagram);
            firebase.setUser(user,()=>{ },()=>{ });
        }
    }

    function onBlurSetDescription(event) {
        const newDescription = event.target.value;

        if(!readOnly && user.description !== newDescription) {
            user.description = newDescription;
            setDescription(newDescription);
            firebase.setUser(user,()=>{ },()=>{ });
        }
    }

/* 
                <FacebookSharer url={`https://crawlear.com/profile?uid=${user.uid}`}/>
                <TwitterSharer url={`https://crawlear.com/profile?uid=${user.uid}`} />
                <WhatsappSharer url={`https://crawlear.com/profile?uid=${user.uid}`} />
                <TelegramSharer url={`https://crawlear.com/profile?uid=${user.uid}`} />
                {!readOnly ? <div className='viewProfileLink' onClick={()=>{navigate(`/profile?uid=${window.crawlear.user.uid}`)}}> {t('description.verperfil')}</div> : <></>}
*/

    return <div className="userProfileContainer rounded rounded2">
        <div className="userProfilePhotoContainer">
            <img referrerPolicy="no-referrer" className="photo" src={user.photoURL} alt="user avatar"></img>
            
            <div className='sharerContainer'>
                {!readOnly ? <div className='logout' 
                onClick={()=> {
                    window.crawlear.fb.logout();
                    onLogout();
                    navigate("/");
            }} >Logout</div> : <></>}
            </div>
        </div>
        <div className="userProfileInlineContainer">
            <div className="name">
                <input type="text" 
                    className="bold textOverflow hidenInput" 
                    readOnly={readOnly}
                    value={userName} 
                    onChange={onUserNameChange}
                    onBlur={onBlurSetName} />
            </div>
            <div className='registrationDate'>
                <span className='bold'>{t('description.registro')}</span>: {new Date(user.registrationDate).toLocaleDateString()}
            </div>
            <p className='description'>
                <span className='bold'>{t('description.descripcion')}</span>: 
                <textarea type="text" 
                    readOnly={readOnly}
                    className="hidenInput textOverflow"
                    value={description} 
                    onChange={onDescriptionChange} 
                    onBlur={onBlurSetDescription} />
            </p>
            <div className='instagram'>
                <div className='bold'>Instagram: </div>
                {!readOnly ?<input type="text" 
                        className="textOverflow hidenInput" 
                        readOnly={readOnly}
                        value={instagram} 
                        onChange={onInstagramChange}
                        onBlur={onBlurSetInstagram} />:
                        instagram ? <a href={`https://www.instagram.com/${instagram}/`} target="_blank">@{instagram}</a> : <></>}
            </div>

            {!readOnly ? <div className='userProfileHelper'>
                <p><span className='bold'>{t('description.ayuda')}:</span> {t('content.editprofile')}</p>
            </div> : <></>}
        </div>
    </div>;
}

export default UserProfile;
