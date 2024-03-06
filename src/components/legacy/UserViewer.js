import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserProfile from '../components/UserProfile';
import UserPoster from '../components/UserPoster';
import Analytics from '../../../Analytics';
import Utils from '../../../Utils';
import Posts from '../components/Posts';
import LoadingLogo from '../components/LoadingLogo';

import logo from '../../../resources/img/logo5.png';
import '../styles/UserViewer.scss';

const USER_TYPE_PILOT = 0;
const USER_TYPE_JUDGE = 1;
const USER_TYPE_NEUTRAL = 2;

function UserViewer({uid, onLogout, onLogin}) {
    const isUidTheUserLogged = window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid
    const { t } = useTranslation()
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const [user, setUser] = React.useState({})
    const [userData, setUserData] = React.useState({})
    const [userPosts, setUserPosts] = React.useState([])
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(()=>{
        fbBase.checkIfLogged(()=>{onLogin(false)});
    },[]);


    React.useEffect(()=>{
        if(uid) {
            fbBase.getUser(uid, (user)=>{
                setUser({...user});
                fb.getUserExtraData(uid, (data)=>{
                    setUserData(data);
                });
            });
    
            fb.getPosts(uid, (data)=>{
                setUserPosts([...userPosts, ...data]);
            }, ()=>{});
    
            isVisible && Analytics.pageview(`${document.location.pathname}${document.location.search}`);
        } 
    }, [isVisible, uid]);

    function getPostType(post) {
        return post.url ? (Utils.isInstagramUrl(post.url) ? 'instagram' : 'youtube') : 'text';
    }

    function onPostEntry(post) {
        const newUserPosts = [...userPosts];

        newUserPosts.unshift(post);
        setUserPosts(newUserPosts);
        Analytics.event('post','added', getPostType(post));
    }

    function removePostClick(id) {
        id && fb.removePost(id, ()=>{
                const newUserPosts = userPosts.filter((elem)=>{
                    return elem.pid !== id;
                });

                setUserPosts(newUserPosts);
                Analytics.event('post','removed');
            }, ()=>{});
    }

    function onScreen(visible) {
        visible && setIsVisible(visible);
    }

    if (user.registrationDate && userPosts && isVisible) {
        let userType;

        if ((userData.judgeGames - userData.pilotGames) > 0) {
            userType = USER_TYPE_JUDGE;
        } else if ((userData.judgeGames - userData.pilotGames) === 0) { 
            userType = USER_TYPE_NEUTRAL;
        } else {
            userType = USER_TYPE_PILOT;
        }

        return <div className="userViewer">
            {!fbBase.isUserLogged() ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="notLoggedLogo" alt="web logo"></img></a> : 
                <>
                    <div className='headerText bold sectionTitle'>{t('description.perfilsocial')}</div>
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
                    {t('description.partidascomopiloto')}: {userData.pilotGames || 0}
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
                <Posts posts={userPosts} readOnly={!isUidTheUserLogged} removePostClick={removePostClick} />
            </div>
        </div>;
    } else {
        return <LoadingLogo onVisible={onScreen}/>;
    }
}

export default UserViewer;