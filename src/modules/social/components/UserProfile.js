import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sharers from './embed/Sharers';
import { UserStatusContext } from '../../../context/UserStatusContext';

import '../styles/UserProfile.scss';


function UserProfile({user, onLogout}) {
    const { t } = useTranslation(['main'])
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const navigate = useNavigate()
    const [userName, setUserName] = React.useState(user.displayName)
    const [description, setDescription] = React.useState(user.description)
    const [instagram, setInstagram] = React.useState(user.instagram)
    const { isUserLoged } = React.useContext(UserStatusContext)
    const [fid, setFid] = React.useState(-1)
    const followAction = []

    React.useEffect(()=>{
        if (isUserLoged && !isTheUserLogged(user.uid)) {
            fb.getFidFromFollow(window.crawlear.user.uid, user.uid, (result)=>{
                setFid(result)
            }, ()=>{})
        }
    },[isUserLoged])

    function onUserNameChange(event) {
        const newUserName = event.target.value

        if(isTheUserLogged(user.uid) && newUserName !== userName && newUserName.length>0) {
            setUserName(newUserName)
        }
    }

    function onDescriptionChange(event) {
        const newDescription = event.target.value

        if(isTheUserLogged(user.uid) && newDescription !== description) {
            setDescription(newDescription)
        }
    }

    function onInstagramChange(event) {
        const newInstagram = event.target.value

        if(isTheUserLogged(user.uid) && newInstagram !== instagram) {
            setInstagram(newInstagram)
        }
    }

    function onBlurSetName(event) {
        const newUserName = event.target.value

        if(isTheUserLogged(user.uid) && user.displayName !== newUserName && newUserName.length>0) {
            user.displayName = newUserName
            setUserName(newUserName)
            fbBase.setUser(user,()=>{ },()=>{ })
        }
    }


    function onBlurSetInstagram(event) {
        const newInstagram = event.target.value;

        if(isTheUserLogged(user.uid) && user.instagram !== newInstagram) {
            user.instagram = newInstagram;
            setInstagram(newInstagram);
            fbBase.setUser(user,()=>{ },()=>{ });
        }
    }

    function onBlurSetDescription(event) {
        const newDescription = event.target.value

        if(isTheUserLogged(user.uid) && user.description !== newDescription) {
            user.description = newDescription
            setDescription(newDescription)
            fbBase.setUser(user,()=>{ },()=>{ })
        }
    }

    function onFollowClick() {
        fb.setFollow(window.crawlear.user.uid, user.uid, (fid)=>{
            fid && setFid(fid);
        }, ()=>{});
    }

    if (isUserLoged && !isTheUserLogged(user.uid)) {
        if (fid !== -1) {
            followAction.push(<div key="followAction" className='follow' onClick={onUnFollowClick}>{t('description.unfollow')}</div>)
        } else {
            followAction.push(<div key="followAction" className='follow' onClick={onFollowClick}>{t('description.follow')}</div>)
        }
    }

    function onUnFollowClick() {
        fb.removeFollow(fid, ()=>{
            setFid(-1)
        }, ()=>{})
    }

    return <div className="userProfileContainer rounded rounded2">
        <div className="userProfilePhotoContainer">
            {!isUserLoged || !isTheUserLogged(user.uid) ? <a href={`https://crawlear.com/profile?uid=${user.uid}`}>
                <img referrerPolicy="no-referrer" className="photo" src={user.photoURL} alt="user avatar"></img>
            </a> : <img referrerPolicy="no-referrer" className="photo" src={user.photoURL} alt="user avatar"></img> }

            <div className='sharerContainer'>
                {isTheUserLogged(user.uid) ? <div className='logout'
                onClick={()=> {
                    window.crawlear.fb.logout()
                    onLogout && onLogout()
                    navigate("/")
            }} >Logout</div> : <></>}
            {followAction}
            </div>
        </div>
        <div className="userProfileInlineContainer">
            <div className="name">
                <input type="text"
                    className="bold textOverflow hidenInput"
                    readOnly={!isUserLoged || !isTheUserLogged(user.uid)}
                    value={userName}
                    onChange={onUserNameChange}
                    onBlur={onBlurSetName} />
            </div>
            {isTheUserLogged(user.uid) ? <div className='registrationDate'>
                <span className='bold'>{t('description.registro')}</span>: {new Date(user.registrationDate).toLocaleDateString()}
                </div> : <></>}
            <div className='description'>
                {isTheUserLogged(user.uid) ? <span className='bold'>{t('description.descripcion')}:</span> : <></> }
                <textarea type="text"
                    readOnly={!isUserLoged || !isTheUserLogged(user.uid)}
                    className="hidenInput textOverflow"
                    value={description}
                    onChange={onDescriptionChange}
                    onBlur={onBlurSetDescription} />
            </div>
            {(((!isUserLoged || !isTheUserLogged(user.uid)) &&  instagram) || isTheUserLogged(user.uid)) ?
            <div className='instagram'>
                <div className='bold'>Instagram: </div>
                {isTheUserLogged(user.uid) ? <input type="text"
                        className="textOverflow hidenInput"
                        readOnly={!isUserLoged || !isTheUserLogged(user.uid)}
                        value={instagram}
                        onChange={onInstagramChange}
                        onBlur={onBlurSetInstagram} /> :
                    instagram ?
                        <a rel="noreferrer" href={`https://www.instagram.com/${instagram}/`} target="_blank">@{instagram}</a> : <></>}
            </div> : <></>}

            <Sharers url={`profile?uid=${user.uid}`}
                headerText={t('content.comparteenredespiloto')}
                text={t('content.shareProfileText')} />

            {isTheUserLogged(user.uid) ? <div className='userProfileHelper'>
                <p><span className='bold'>{t('description.ayuda')}:</span> {t('content.editprofile')}</p>
            </div> : <></>}
        </div>
    </div>
}

function isTheUserLogged(uid) {
    return window.crawlear.fbBase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid
}

export default UserProfile
