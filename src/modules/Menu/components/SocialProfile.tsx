import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import UserProfilePhoto from '../../social/components/UserProfilePhoto'

function SocialProfile() {
    const navigate = useNavigate()
    const user = window.crawlear.user

    return <>
        <UserProfilePhoto photoUrl={user.photoURL} onLogout={()=>{}} inputUserIsTheLoggedOne={true} />
        <div className="menuUserDisplayName" onClick={()=>{ navigate('/social')}}>
            { user.displayName }
       </div>
    </>
}

export default SocialProfile