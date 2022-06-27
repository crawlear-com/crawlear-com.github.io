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
import FacebookSharer from '../embed/FacebookSharer';
import TwitterSharer from '../embed/TwitterSharer';
import TelegramSharer from '../embed/TelegramSharer';
import WhatsappSharer from '../embed/WhatsappSharer';

function UserViewer({uid, onLogout, onLogin}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [user, setUser] = React.useState({});
    const [userData, setUserData] = React.useState({});
    const [userPosts, setUserPosts] = React.useState([])
    const isUserLogged = window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid;

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
        post.url ? (Utils.isInstagramUrl(url) ? 'instagram' : 'youtube') : 'text'
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
                embeds.push(<Post key={index} post={post} onRemovePost={removePostClick} readOnly={isUserLogged} />);
            });
        } else {
            embeds.push(<div key="nopost" className='rounded '>{t('content.nopost')}</div>);
        }

        return <div className="userViewer">
            {!window.crawlear || !window.crawlear.user || !window.crawlear.user.uid ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : <></>}
            <UserProfile onLogout={onLogout} user={user} />

            <div className='sharerContainer'>
                {t('content.comparteenredes')}<br />
                <FacebookSharer url={`https://crawlear.com/profile?uid=${user.uid}`}/>
                <TwitterSharer url={`https://crawlear.com/profile?uid=${user.uid}`} />
                <WhatsappSharer url={`https://crawlear.com/profile?uid=${user.uid}`} />
                <TelegramSharer url={`https://crawlear.com/profile?uid=${user.uid}`} />
            </div>

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

            {isUserLogged ? <UserPoster onPostEntry={onPostEntry}/> : <></>}

            <div className="posts">
                <div className='headerText bold'>{t('description.murodepiloto')}</div>
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