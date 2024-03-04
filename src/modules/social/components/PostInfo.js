import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import WinnerTable from '../../../components/WinnerTable';
import PostLikes from './PostLikes';
import GoogleMapsLocation from './embed/GoogleMapsLocation';
import Analytics from '../../../Analytics';

function PostInfo({ post, readOnly, onRemovePost, children }) {
    const { t } = useTranslation(['main']);
    const firebase = window.crawlear.fb;
    const [game, setGame] = React.useState({});
    const [userFromPost, setUserFromPost] = React.useState({});
    const navigate = useNavigate();

    function resolveGame(gid) {
        firebase.getGame(gid, (game)=>{
            setGame(game);
        }, ()=>{})
    }

    function postHasGameAssigned() {
        return post.gid && post.gid.length>2;
    }

    function goToPost(event) {
        Analytics.event('navigation','post', post.uid);
        navigate(`/post?pid=${post.pid}`);
    }

    React.useEffect(()=>{
        if(readOnly) {
            firebase.getUser(post.uid, (user)=>{
                setUserFromPost(user);
            },()=>{})
        }
    },[]);

    return <>
            {!readOnly ? <button data-id={post.pid} onClick={onRemovePost} className='removePostButton'>-</button>: <></>}
            
            {userFromPost.uid ? <a href={`https://crawlear.com/profile?uid=${userFromPost.uid}`} className="userProfileContainer" alt="user profile name and link">
                    <div className="userProfilePhotoContainer">
                        <img referrerPolicy="no-referrer" className="photo" src={userFromPost.photoURL} alt="user avatar"></img>
                    </div>

                    <div className="userProfileInlineContainer">
                        <div className="name">
                            <input type="text" 
                                className="bold textOverflow hidenInput" 
                                readOnly={true}
                                value={userFromPost.displayName} />
                        </div>
                    </div>
            </a> : <></>}
            <div className='postDate'>{post.date.toDate().toLocaleDateString()}</div>
            <div className='postText bold' onClick={goToPost}>{post.text}</div>
            {children}

            <PostLikes post={post} isReadOnly={readOnly} />
            <div className='postGameContainer'>
                {game.gid ? <div className='postGame bold'>
                                {game.gid ? <><div className='gameAssigned bold'>{t('description.juegoasignado')}:</div>
                                            {t('description.nombre')}:<span className='gameName'>{game.name} </span><WinnerTable game={game} /></> : <></>}
                                {game.location && game.location.longitude && game.location.longitude && game.isPublic ? <><div className='gameName'>{t('description.localizacion')}:</div><GoogleMapsLocation location={game.location} /></> : <></>}
                            </div> : 
                                postHasGameAssigned() ? 
                                    <><div className='gameAssigned bold'>{t('description.juegoasignado')}:</div>
                                    <button className='getGameName importantNote' onClick={()=>{resolveGame(post.gid)}}>{t('description.resolverjuego')}</button></> :
                                        <div className='getGameName bold'>{t('description.sinjuego')}</div>}
            </div>
        </>;
}

export default PostInfo;