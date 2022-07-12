import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserProfile from '../UserProfile';
import UserPoster from '../UserPoster';
import Analytics from '../../Analytics';
import Utils from '../../Utils';
import Post from '../Post';
import LoadingLogo from '../LoadingLogo';

import logo from '../../resources/img/logo5.png';
import '../../resources/css/UserViewer.scss';

const USER_TYPE_PILOT = 0;
const USER_TYPE_JUDGE = 1;
const USER_TYPE_NEUTRAL = 2;

function UserViewer({uid, onLogout, onLogin}) {
    const isUidTheUserLogged = window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid;
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [user, setUser] = React.useState({});
    const [userData, setUserData] = React.useState({});
    const [userPosts, setUserPosts] = React.useState([])
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(()=>{
        firebase.checkIfLogged(()=>{onLogin(false)});
    },[]);


    React.useEffect(()=>{
        if(uid) {
            firebase.getUser(uid, (user)=>{
                setUser({...user});
                firebase.getUserExtraData(uid, (data)=>{
                    setUserData(data);
                });
            });
    
            firebase.getPosts(uid, (data)=>{
                setUserPosts([...userPosts, ...data]);
            }, ()=>{});
    
            isVisible && Analytics.pageview(`${document.location.pathname}${document.location.search}`);
        } 
    }, [isVisible, uid]);

    React.useEffect(()=>{
        window.instgrm && window.instgrm.Embeds.process();
    },[userPosts]);

    function getPostType(post) {
        return post.url ? (Utils.isInstagramUrl(post.url) ? 'instagram' : 'youtube') : 'text';
    }

    function onPostEntry(post) {
        const newUserPosts = [...userPosts];

        newUserPosts.unshift(post);
        setUserPosts(newUserPosts);
        Analytics.event('post','added', getPostType(post));
    }

    function removePostClick(event) {
        const id = event.target.getAttribute('data-id');

        if(id && window.confirm(t('content.seguroborrarpost'))) {
            firebase.removePost(id, ()=>{
                const newUserPosts = userPosts.filter((elem)=>{
                    return elem.pid !== id;
                });

                setUserPosts(newUserPosts);
                Analytics.event('post','removed');
            }, ()=>{});
        }
    }

    function onScreen(visible) {
        visible && setIsVisible(visible);
    }

    if (user.registrationDate && isVisible) {
        const embeds = [];
        let userType;

        if (userPosts.length) {
            userPosts.forEach((post, index) => {
                embeds.push(<Post key={index} post={post} onRemovePost={removePostClick} readOnly={isUidTheUserLogged} />);
            });
        } else {
            embeds.push(<div key="nopost" className='rounded rounded3'>{t('content.nopost')}</div>);
        }

        if ((userData.judgeGames - userData.pilotGames) > 0) {
            userType = USER_TYPE_JUDGE;
        } else if ((userData.judgeGames - userData.pilotGames) === 0) { 
            userType = USER_TYPE_NEUTRAL;
        } else {
            userType = USER_TYPE_PILOT;
        }

        return <div className="userViewer">
            {!firebase.isUserLogged() ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : 
                <>
                    <div className='headerText bold sectionTitle'>{t('description.perfilsocial')}</div>
                    {isUidTheUserLogged ? <p className='profileHelper rounded rounded3 bold'>{t('description.ayuda')}: {t('content.ayudafeedsocial')}</p> : <></>}
                </>}
            <><UserProfile onLogout={onLogout} user={user} /> 
                <div className="statistics rounded rounded3">
                <div className='headerText bold'>{t('description.estadisticas')}</div>
                <div>
                    {t('description.partidascreadas')}: {userData.ownerGames || 0}
                </div>
                <div>
                    {t('description.partidasdejuez')}: {userData.judgeGames || 0}
                </div>
                <div>
                    {t('description.partidasprevias')}: {userData.pilotGames || 0}
                </div>
                <p className='bold'>
                    {userType === USER_TYPE_JUDGE ? t('description.tendenciajuez') : (userType === USER_TYPE_PILOT ? t('description.tendenciapiloto') : t('description.tendencianeutral'))}
                </p>

                <div>{`${t('description.siguiendo')}: ${userData.following}`}</div>
                <div>{`${t('description.seguidores')}: ${userData.followers}`}</div>
            </div></>

            <div className="posts">
                <div className='sectionTitle headerText bold'>{t('description.murodepiloto')}</div>
                {isUidTheUserLogged ? <UserPoster isOpened={!userPosts.length} onPostEntry={onPostEntry}/> : <></>}
                {embeds}
            </div>
        </div>;
    } else {
        return <LoadingLogo onVisible={onScreen}/>;
    }
}

export default UserViewer;