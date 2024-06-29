"use client"

import * as React from 'react'
import UserViewer from './UserViewer'

function PilotWall() {
    const uid = window ? window.crawlear && window?.crawlear.user && window?.crawlear.user.uid : ''

    function onLogout() {
        window.crawlear?.fbBase.signOutWithGoogle()
    }

    React.useEffect(()=>{   
        window.document.body.classList.add('social')

        return () => {
            window.document.body.classList.remove('social')
        }
    },[]);

    return <UserViewer onLogout={onLogout} uid={uid}/>

}

export default PilotWall;