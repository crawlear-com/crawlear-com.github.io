import * as React from 'react';
import { useTranslation } from 'react-i18next';
import WinnerTable from './WinnerTable';
import PostLikes from './PostLikes';

function PostInfo({ post, readOnly, onRemovePost, children }) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [game, setGame] = React.useState({});

    function resolveGame(gid) {
        firebase.getGame(gid, (game)=>{
            setGame(game);
        }, ()=>{})
    }

    return <>
            {readOnly ? <button data-id={post.pid} onClick={onRemovePost} className='removePostButton'>-</button>: <></>}
            <div className='postDate'>{post.date.toDate().toLocaleDateString()}</div>
            
            {game.gid ? <div className='postDate bold'>{game.gid ? <WinnerTable game={game} /> : <></>}</div> : 
                    post.gid && post.gid.length>2 ? <div className='postDate bold' onClick={()=>{resolveGame(post.gid)}}>{t('description.resolverjuego')}</div> :
                        <div className='postDate bold'>{t('description.sinjuego')}</div>}
            
            <div className='postText bold'>{post.text}</div>
            <div className='postGame'></div>
            {children}
            <PostLikes post={post} isReadOnly={readOnly} />
        </>;
}

export default PostInfo;