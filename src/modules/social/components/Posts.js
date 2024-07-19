import * as React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../../resources/img/logo5.png';
import Post from './Post';

import '../styles/FeedViewer.scss';

function Posts({posts, removePostClick, readOnly}) {
    const { t } = useTranslation(['main']);
    const fbBase = window.crawlear.fbBase;

    React.useEffect(()=>{
        window.instgrm && window.instgrm.Embeds.process();
    },[posts]);

    function onRemovePostClick(event) {
        const id = event.target.getAttribute('data-id');

        if(id && window.confirm(t('content.seguroborrarpost'))) {
            removePostClick && removePostClick(id);
        }
    }

    if (posts && posts.length) {
        const embeds = [];

        posts.forEach((post, index) => {
            embeds.push(<Post key={index} post={post} onRemovePost={onRemovePostClick} readOnly={readOnly} />);
        });

        return <div className="feedViewer">
            {!fbBase.isUserLogged() ? <a href="https://crawlear.com" rel="noreferrer" target="_blank"><img src={logo} className="notLoggedLogo" alt="web logo"></img></a> : <></>}
            <div className="posts">
                {embeds}
            </div>
        </div>;
    } else {
        return <div className="posts">
                <div className='rounded rounded3'>{t('content.nofeedpost')}</div>
            </div>;
    }
}

export default Posts;