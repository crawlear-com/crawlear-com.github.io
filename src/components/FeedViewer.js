import * as React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../resources/img/logo5.png'
import Analytics from '../Analytics';
import Post from './Post';
import UseIfVisible from '../hooks/UseIfVisible';
import { UserStatusContext } from '../UserStatusContext';
import LoadingLogo from './LoadingLogo';

import '../resources/css/FeedViewer.scss';

const STATUS_LOADING = 0;
const STATUS_LOADED = 1;

function FeedViewer(props) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [feedPosts, setFeedPosts] = React.useState([]);
    const [status, setStatus] = React.useState(STATUS_LOADING);
    const [isVisible, setIsVisible] = React.useState(false);
    const mainContainerRef = React.useRef();
    const { isUserLoged } = React.useContext(UserStatusContext);

    UseIfVisible(mainContainerRef.current, (visible)=>{
        visible && setIsVisible(visible);
    });

    React.useEffect(()=>{
/*        firebase.getPosts(uid, (data)=>{
            setFeedPosts([...feedPosts, ...data]);
        }, ()=>{});*/

        isVisible && isUserLoged && firebase.getPostsFromFollowFeed(window.crawlear.user.uid, (data)=>{
            setFeedPosts([...feedPosts, ...data]);
            setStatus(STATUS_LOADED);
            Analytics.pageview(`/feedviewer/`);
        }, ()=>{});

        return ()=>{

        }
    }, [isVisible, isUserLoged]);

    React.useEffect(()=>{
        window.instgrm && window.instgrm.Embeds.process();
    },[feedPosts]);

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

    if (status===STATUS_LOADED && feedPosts.length && isVisible) {
        const embeds = [];

        feedPosts.forEach((post, index) => {
            embeds.push(<Post key={index} post={post} onRemovePost={removePostClick} readOnly={window.crawlear && window.crawlear.user && window.crawlear.user.uid === post.uid} />);
        });

        return <div className="feedViewer">
            {!firebase.isUserLogged() ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : <></>}
            <div className="posts">
                <div className='headerText bold sectionTitle'>{t('description.murodefollows')}</div>
                {embeds}
            </div>
        </div>;
    } else if(status===STATUS_LOADED && isVisible) {
        return <div className=''>No posts!</div>;
    } else {
        return <LoadingLogo logoRef={mainContainerRef}/>;
    }
}

export default FeedViewer;