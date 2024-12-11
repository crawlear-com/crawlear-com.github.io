import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { UserStatusContext } from '../../../context/UserStatusContext';

const useUserProfile = (user: User): [string,string,string,React.JSX.Element, React.ChangeEventHandler,React.ChangeEventHandler,
        React.ChangeEventHandler,React.FocusEventHandler,React.FocusEventHandler,React.FocusEventHandler, Function] => {
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const { t } = useTranslation(['main'])
    const [userName, setUserName] = React.useState<string>(user.displayName)
    const [description, setDescription] = React.useState<string>(user.description)
    const [instagram, setInstagram] = React.useState<string>(user.instagram)
    const { isUserLoged } = React.useContext(UserStatusContext)
    const [fid, setFid] = React.useState<number>(-1)
    let followActionElement: React.JSX.Element = <></>

    if (isUserLoged && !isTheUserLogged(user.uid)) {
        if (fid !== -1) {
            followActionElement = <div className='follow' onClick={onUnFollowClick}>{t('description.unfollow')}</div>
        } else {
            followActionElement = <div className='follow' onClick={onFollowClick}>{t('description.follow')}</div>
        }
    }

    React.useEffect(()=>{
        if (isUserLoged && !isTheUserLogged(user.uid)) {
            window.crawlear.fb.getFidFromFollow(window.crawlear.user.uid, user.uid, (result: number)=>{
                setFid(result)
            }, ()=>{})
        }
    },[isUserLoged, user.uid])

    function onUserNameChange(event: React.ChangeEvent) {
        const newUserName = (event.target as HTMLInputElement).value

        if(isTheUserLogged(user.uid) && newUserName !== userName && newUserName.length>0) {
            setUserName(newUserName)
        }
    }

    function onDescriptionChange(event: React.ChangeEvent) {
        const newDescription = (event.target  as HTMLInputElement).value

        if(isTheUserLogged(user.uid) && newDescription !== description) {
            setDescription(newDescription)
        }
    }

    function onInstagramChange(event: React.ChangeEvent) {
        const newInstagram = (event.target as HTMLInputElement).value

        if(isTheUserLogged(user.uid) && newInstagram !== instagram) {
            setInstagram(newInstagram)
        }
    }

    function onBlurSetName(event: React.FocusEvent<HTMLInputElement>) {
        const newUserName = (event.target as HTMLInputElement).value

        if(isTheUserLogged(user.uid) && user.displayName !== newUserName && newUserName.length>0) {
            user.displayName = newUserName
            setUserName(newUserName)
            fbBase.setUser(user,()=>{ },()=>{ })
        }
    }


    function onBlurSetInstagram(event: React.FocusEvent<HTMLInputElement>) {
        const newInstagram = (event.target as HTMLInputElement).value;

        if(isTheUserLogged(user.uid) && user.instagram !== newInstagram) {
            user.instagram = newInstagram;
            setInstagram(newInstagram);
            fbBase.setUser(user,()=>{ },()=>{ });
        }
    }

    function onBlurSetDescription(event: React.FocusEvent<HTMLInputElement>) {
        const newDescription = (event.target as HTMLInputElement).value

        if(isTheUserLogged(user.uid) && user.description !== newDescription) {
            user.description = newDescription
            setDescription(newDescription)
            fbBase.setUser(user,()=>{ },()=>{ })
        }
    }

    function onFollowClick() {
        fb.setFollow(window.crawlear.user.uid, user.uid, (fid: number)=>{
            fid && setFid(fid);
        }, ()=>{});
    }

    function onUnFollowClick() {
        fb.removeFollow(fid, ()=>{
            setFid(-1)
        }, ()=>{})
    }


    function isTheUserLogged(uid: string) {
        return window.crawlear.fbBase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid
    }

    return [userName, description, instagram, followActionElement,
        onUserNameChange, onDescriptionChange, onInstagramChange, onBlurSetName, onBlurSetDescription, onBlurSetInstagram,
        isTheUserLogged]
}

export default useUserProfile