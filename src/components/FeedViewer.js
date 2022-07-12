import * as React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../resources/img/logo5.png';
import refreshIcon from '../resources/img/iconRefresh.png';
import Analytics from '../Analytics';
import Post from './Post';
import { UserStatusContext } from './context/UserStatusContext';
import LoadingLogo from './LoadingLogo';

import '../resources/css/FeedViewer.scss';

const STATUS_LOADING = 0;
const STATUS_LOADED = 1;

function FeedViewer({uid}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [feedPosts, setFeedPosts] = React.useState([]);
    const [status, setStatus] = React.useState(STATUS_LOADING);
    const [isVisible, setIsVisible] = React.useState(false);
    const { isUserLoged } = React.useContext(UserStatusContext);

    React.useEffect(()=>{
        getData();
        isVisible && Analytics.pageview(`/feedviewer/`);
    }, [isVisible, isUserLoged, uid]);

    React.useEffect(()=>{
        window.instgrm && window.instgrm.Embeds.process();
    },[feedPosts]);

    function getData() {
        isVisible && isUserLoged && firebase.getPostsFromFollowFeed(uid, (data)=>{
            setFeedPosts([...data]);
            setStatus(STATUS_LOADED);
        }, ()=>{});
    }

    function refreshContent() {
        setStatus(STATUS_LOADING);
        getData();
    }

    function removePostClick(event) {
        const id = event.target.getAttribute('data-id');

        if(id && window.confirm(t('content.seguroborrarpost'))) {
            firebase.removePost(id, ()=>{
                const newUserPosts = feedPosts.filter((elem)=>{
                    return elem.pid !== id;
                });

                setFeedPosts(newUserPosts);
                Analytics.event('post','removed');
            }, ()=>{});
        }
    }

    function onScreen(visible) {
        visible && setIsVisible(visible);
    }

    if (status===STATUS_LOADED && feedPosts.length && isVisible) {
        const embeds = [];

        feedPosts.forEach((post, index) => {
            embeds.push(<Post key={index} post={post} onRemovePost={removePostClick} readOnly={uid === post.uid} />);
        });

        return <div className="feedViewer">
            {!firebase.isUserLogged() ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : <></>}
            <div className="posts">
                <div className='headerText bold sectionTitle'>{t('description.murodefollows')}</div>

                <div className="refreshButton" onClick={refreshContent}><img src={refreshIcon} alt="refresh icon"></img>
                </div>

                {embeds}
            </div>
        </div>;
    } else if(status===STATUS_LOADED && isVisible) {
        return <div className="posts">
                <div className='headerText bold sectionTitle'>{t('description.murodefollows')}</div>
                <div className='rounded rounded3'>{t('content.nofeedpost')}</div>
            </div>;
    } else {
        return <LoadingLogo onVisible={onScreen}/>;
    }
}

export default FeedViewer;