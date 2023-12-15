import * as React from 'react'
import { Navigate } from 'react-router-dom'
import UserViewer from './UserViewer'
import { UserStatusContext } from '../../../context/UserStatusContext'

function PilotWall({onLogout}) {
    const uid = window.crawlear && window.crawlear.user && window.crawlear.user.uid;
    const { isUserLoged } = React.useContext(UserStatusContext)

    React.useEffect(()=>{
        window.document.body.classList.add('social')

        return () => {
            window.document.body.classList.remove('social')
        }
    },[]);

    if (!isUserLoged) {
        return <Navigate state={{ from: "/route" }} to={{ pathname: "/" }} />
    }

    return <>
        <UserViewer onLogout={onLogout} uid={uid}/>
        </>

}

export default PilotWall;