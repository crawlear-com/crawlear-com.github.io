import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserProfile from './UserProfile';
import logo from '../resources/img/logo5.png'
import '../resources/css/UserViewer.scss';
import Spinner from './Spinner';
import Instagram from './embed/Instagram';
import Youtube from './embed/Youtube';
import UserPoster from './UserPoster';

function UserViewer({uid, onLogout}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [user, setUser] = React.useState({});
    const [userData, setUserData] = React.useState({});
    const [userPosts, setUserPosts] = React.useState([])
    const isUserLogged = window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid;

    React.useEffect(()=>{
        firebase.getUser(uid, (user)=>{
            setUser({...user});
            firebase.getUserExtraData(uid, (data)=>{
                setUserData(data);
            });
        });

        firebase.getPosts(uid, (data)=>{
            setUserPosts([...userPosts, ...data]);
        }, ()=>{});
    }, []);

    function onPostEntry(post) {
        const newUserPosts = [...userPosts];

        newUserPosts.push(post);
        setUserPosts(newUserPosts);
    }

    function removePostClick(event) {
        const id = event.target.getAttribute('data-id');

        if(id) {
            firebase.removePost(id);
        }
    }

    if (user.registrationDate ) {
        const embeds = [];

        if (userPosts.length) {
            userPosts.forEach((post, index) => {
                if(post.url.indexOf('instagram')>=0) {
                    //Unify this!
                    embeds.push(
                        <div className="post rounded rounded2">
                            {isUserLogged ? <button data-id={post.pid} onClick={removePostClick} className='removePostButton'>-</button>: <></>}
                            <div className='postDate bold'>{new Date(post.date).toLocaleDateString()}</div>
                            <div className='postText bold'>{post.text}</div>
                            <Instagram className="postUrlContent" key={`insta${index}`} url={post.url} />
                        </div>);
                } else {
                    embeds.push(
                        <div className="post rounded rounded2">
                            {isUserLogged ? <button data-id={post.pid} onClick={removePostClick} className='removePostButton'>-</button>: <></>}
                            <div className='postDate'>{new Date(post.date).toLocaleDateString()}</div>
                            <div className='postText'>{post.text}</div>
                            <Youtube className="postUrlContent" key={`yout${index}`} url={post.url} />
                        </div>);
                }
            });
        } else {
            embeds.push(<div className='rounded rounded2'>{t('content.nopost')}</div>);
        }

        return <div className="userViewer">
            {!isUserLogged ? <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a> : <></>}
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

            {isUserLogged ? <UserPoster onPostEntry={onPostEntry}/> : <></>}

            <div className="posts rounded rounded3">
                <div className='headerText bold'>{t('description.posts')}</div>
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