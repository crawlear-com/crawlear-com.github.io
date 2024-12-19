import * as React from 'react'
import { useNavigate } from 'react-router-dom'

interface UserProfilePhotoProps {
    photoUrl: string,
    inputUserIsTheLoggedOne: boolean,
    onLogout: Function
}

function UserProfilePhoto({ photoUrl, inputUserIsTheLoggedOne, onLogout }: UserProfilePhotoProps) {
    const navigate = useNavigate()

    return (<div className="userProfilePhotoContainer">
        <img referrerPolicy="no-referrer" className="photo" src={ photoUrl } alt="user avatar"></img>
        <div className='sharerContainer'>
            { inputUserIsTheLoggedOne ?
            <div className='logout' onClick={()=> {
                window.crawlear.fb.logout()
                onLogout && onLogout()
                navigate("/") }}>Logout</div> :
            <></> }
        </div>
    </div>)
}

export default UserProfilePhoto