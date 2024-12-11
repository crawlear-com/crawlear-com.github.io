import * as React from 'react'

const useUserProfile = (user: User): [string,string,string,React.ChangeEventHandler,React.ChangeEventHandler,
        React.ChangeEventHandler,React.FocusEventHandler,React.FocusEventHandler,React.FocusEventHandler, Function] => {
    const fbBase = window.crawlear.fbBase
    const [userName, setUserName] = React.useState<string>(user.displayName)
    const [description, setDescription] = React.useState<string>(user.description)
    const [instagram, setInstagram] = React.useState<string>(user.instagram)

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

    function isTheUserLogged(uid: string) {
        return window.crawlear.fbBase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid
    }

    return [userName, description, instagram, onUserNameChange, onDescriptionChange, onInstagramChange,
        onBlurSetName, onBlurSetDescription, onBlurSetInstagram, isTheUserLogged]
}

export default useUserProfile