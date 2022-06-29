import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Post from '../Post';
import Sharers from '../embed/Sharers';
import Spinner from '../Spinner';
import Analytics from '../../Analytics';

import logo from '../../resources/img/logo5.png'

function PostViewer({pid}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [post, setPost] = React.useState({});
    const bottomButtons = [];

    React.useEffect(()=>{
        firebase.getPost(pid, (post)=>{
            setPost(post);
        }, ()=>{});

        Analytics.pageview(`${document.location.pathname}${document.location.search}`);
    },[]);

    if (firebase.isUserLogged()) {
        bottomButtons.push(<button key='backButton' onClick={()=>{
            window.history && window.history.back();
        }}>{t('description.atras')}</button>);
    }

    return <div className='userViewer'>
        {!firebase.isUserLogged() ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : <></>}
        {post.pid ? <>
                <Post post={post} readOnly={false} /> 
                <Sharers url={`post?pid=${post.pid}`} text={t('content.sharePostText')} />
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