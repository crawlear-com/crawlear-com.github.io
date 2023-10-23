import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Post from '../components/Post';
import Spinner from '../../../components/Spinner';
import UserProfile from '../components/UserProfile';

import logo from '../../../resources/img/logo5.png'
import UsePostViewer from '../hooks/UsePostViewer';

function PostViewer({pid, onLogin}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const bottomButtons = [];
    const [user, post] = UsePostViewer(pid, onLogin)

    if (firebase.isUserLogged()) {
        bottomButtons.push(<button key='backButton' onClick={()=>{
            window.history && window.history.back();
        }}>{t('description.atras')}</button>);
    }

    return <div className='userViewer'>
        {!firebase.isUserLogged() ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : <></>}
        {post.pid ? <>
                {user.displayName ? <UserProfile user={user}/> : <></>}
                <Post post={post} readOnly={false} /> 
            </>
            : 
            <>
                <br/>
                <Spinner />
                <br />
            </>}

            {bottomButtons}
        </div>;
}

export default PostViewer;