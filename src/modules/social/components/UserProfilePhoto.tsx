import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { UserStatusContext } from '../../../context/UserStatusContext';

interface UserProfilePhotoProps {
    uid: string,
    photoUrl: string,
    inputUserIsTheLoggedOne: boolean,
    onLogout: Function
}

function UserProfilePhoto({ uid, photoUrl, inputUserIsTheLoggedOne, onLogout }: UserProfilePhotoProps) {
    const navigate = useNavigate()
    const fb = window.crawlear.fb
    const [fid, setFid] = React.useState<number>(-1)
    const { isUserLoged } = React.useContext(UserStatusContext)
    const { t } = useTranslation(['main'])
    let followActionElement: React.JSX.Element = <></>

    React.useEffect(()=>{
        if (isUserLoged && !inputUserIsTheLoggedOne) {
            window.crawlear.fb.getFidFromFollow(window.crawlear.user.uid, uid, (result: number)=>{
                setFid(result)
            }, ()=>{})
        }
    },[isUserLoged, uid, inputUserIsTheLoggedOne])

    if (isUserLoged && !inputUserIsTheLoggedOne) {
        if (fid !== -1) {
            followActionElement = <div className='follow' onClick={onUnFollowClick}>{t('description.unfollow')}</div>
        } else {
            followActionElement = <div className='follow' onClick={onFollowClick}>{t('description.follow')}</div>
        }
    }

    function onFollowClick() {
        fb.setFollow(window.crawlear.user.uid, uid, (fid: number)=>{
            fid && setFid(fid);
        }, ()=>{});
    }

    function onUnFollowClick() {
        fb.removeFollow(fid, ()=>{
            setFid(-1)
        }, ()=>{})
    }

    return (<div className="userProfilePhotoContainer">
        <img referrerPolicy="no-referrer" className="photo" src={ photoUrl } alt="user avatar"></img>
        <div className='sharerContainer'>
            { inputUserIsTheLoggedOne ?
            <div className='logout' onClick={()=> {
                window.crawlear.fb.logout()
                onLogout && onLogout()
                navigate("/") }}>Logout</div> :
            <></> }
            { followActionElement }
        </div>
    </div>)
}

export default UserProfilePhoto