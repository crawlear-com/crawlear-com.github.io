import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserProfile from '../UserProfile';
import logo from '../../resources/img/logo5.png'
import '../../resources/css/UserViewer.scss';
import Spinner from '../Spinner';
import UserPoster from '../UserPoster';
import Analytics from '../../Analytics';
import Utils from '../../Utils';
import Post from '../Post';
import Sharers from '../embed/Sharers';
import { useNavigate } from 'react-router-dom';

function UserViewer({uid, onLogout, onLogin}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const navigate = useNavigate();
    const [user, setUser] = React.useState({});
    const [userData, setUserData] = React.useState({});
    const [userPosts, setUserPosts] = React.useState([])
    const isUidTheUserLogged = window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid;

    React.useEffect(()=>{
        firebase.checkIfLogged(()=>{onLogin(false)});
        firebase.getUser(uid, (user)=>{
            setUser({...user});
            firebase.getUserExtraData(uid, (data)=>{
                setUserData(data);
            });
        });

        firebase.getPosts(uid, (data)=>{
            setUserPosts([...userPosts, ...data]);
        }, ()=>{});

        Analytics.pageview(`${document.location.pathname}${document.location.search}`);
    }, []);

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

    if (user.registrationDate ) {
        const embeds = [];

        if (userPosts.length) {
            userPosts.forEach((post, index) => {
                embeds.push(<Post key={index} post={post} onRemovePost={removePostClick} readOnly={isUidTheUserLogged} />);
            });
        } else {
            embeds.push(<div key="nopost" className='rounded rounded3'>{t('content.nopost')}</div>);
        }

        return <div className="userViewer">
            {!firebase.isUserLogged() ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : <></>}
            <UserProfile onLogout={onLogout} user={user} />

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
            </div>

            {firebase.isUserLogged() ? <div className='viewProfileLink importantNote' onClick={()=>{
                    navigate(`/completegame`)
                    Analytics.event('navigation','tool', window.crawlear.user.uid);
                }}> {t('description.volverherramientajuego')}</div> : <></>}

            <div className="posts">
                <div className='headerText bold'>{t('description.murodepiloto')}</div>
                {isUidTheUserLogged ? <UserPoster onPostEntry={onPostEntry}/> : <></>}
                {embeds}
            </div>
        </div>;
    } else {
        return <div className=''>
                <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a>
                <br />
                <Spinner />
            </div>;
    }
}

export default UserViewer;