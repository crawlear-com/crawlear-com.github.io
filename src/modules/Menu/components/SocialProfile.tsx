import * as React from 'react'
import { Link } from 'react-router-dom'
import UserProfilePhoto from '../../social/components/UserProfilePhoto'

const SOCIAL_PATH = '/social'

function SocialProfile() {
    const user = window.crawlear.user

    return <>
        <UserProfilePhoto photoUrl={user.photoURL} onLogout={()=>{}} inputUserIsTheLoggedOne={true} />
        <Link className="menuUserDisplayName" to={SOCIAL_PATH} onClick={() =>{ /*Analytics.event('navigation','menu', SOCIAL_PATH);*/ }}>
            { user.displayName }
       </Link>
    </>
}

export default SocialProfile