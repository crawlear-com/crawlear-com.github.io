import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Post from '../components/Post'
import Spinner from '../../../components/Spinner'
import UserProfile from '../components/UserProfile'

import logo from '../../../resources/img/logo5.png'
import UsePostViewer from '../hooks/UsePostViewer'

function PostViewer({pid}) {
    const { t } = useTranslation(['main'])
    const fbBase = window.crawlear.fbBase
    const bottomButtons = []
    const [user, post] = UsePostViewer(pid)

    if (fbBase.isUserLogged()) {
        bottomButtons.push(<button key='backButton' onClick={()=>{
            window.history && window.history.back()
        }}>{t('description.atras')}</button>)
    }

    return <div className='userViewer'>
        {!fbBase.isUserLogged() ? <a rel="noreferrer" href="https://crawlear.com" target="_blank"><img src={logo} className="notLoggedLogo" alt="web logo"></img></a> : <></>}
        {post.pid ? <>
            { user.displayName ? <UserProfile user={user}/> : <></> }
            <Post post={post} readOnly={false} /></> :
            <><br/> <Spinner /> <br /></>}

            {bottomButtons}
        </div>
}

export default PostViewer