import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import WinnerTable from './WinnerTable';
import PostLikes from './PostLikes';
import GoogleMaps from './embed/GoogleMaps';
import Analytics from '../Analytics';

function PostInfo({ post, readOnly, onRemovePost, children }) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [game, setGame] = React.useState({});
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

    return <>
            {readOnly ? <button data-id={post.pid} onClick={onRemovePost} className='removePostButton'>-</button>: <></>}
            <div className='postDate'>{post.date.toDate().toLocaleDateString()}</div>
            
            <div className='postText bold' onClick={goToPost}>{post.text}</div>
            {children}

            <div className='postGameContainer'>
                <div className='gameAssigned bold'>{t('description.juegoasignado')}:</div>
                {game.gid ? <div className='postGame bold'>
                                {game.gid ? <>{t('description.nombre')}:<span className='gameName'>{game.name} </span><WinnerTable game={game} /></> : <></>}
                                {game.location && game.isPublic ? <><div className='gameName'>{t('description.localizacion')}:</div><GoogleMaps location={game.location} /></> : <></>}
                            </div> : 
                                postHasGameAssigned() ? 
                                    <button className='getGameName importantNote' onClick={()=>{resolveGame(post.gid)}}>{t('description.resolverjuego')}</button> :
                                    <div className='getGameName bold'>{t('description.sinjuego')}</div>}
            </div>
            <PostLikes post={post} isReadOnly={readOnly} />
        </>;
}

export default PostInfo;