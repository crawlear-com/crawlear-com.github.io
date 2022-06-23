import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Instagram from './embed/Instagram';
import Youtube from './embed/Youtube';
import Tiktok from './embed/Tiktok';
import WinnerTable from './WinnerTable';
import '../resources/css/Post.scss';

function Post({post, readOnly, onRemovePost}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [game, setGame] = React.useState({});
    let embed = <></>;

    function resolveGame(gid) {
        firebase.getGame(gid, (game)=>{
            setGame(game);
        }, ()=>{})
    }

    if(post.url.indexOf('instagram')>=0) {
        embed = <Instagram className="postUrlContent" url={post.url} />
    } else if(post.url.indexOf('youtu')>=0) {
        embed = <Youtube className="postUrlContent" url={post.url} />
    } else if(post.url.indexOf('tiktok')>=0) {
        embed = <Tiktok className="postUrlContent" url={post.url} />
    }

    return <div key={post.pid} className="post rounded ">
            {readOnly ? <button data-id={post.pid} onClick={onRemovePost} className='removePostButton'>-</button>: <></>}
            <div className='postDate'>{post.date.toDate().toLocaleDateString()}</div>
            
            {game.gid ? <div className='postDate bold'>{game.gid ? <WinnerTable game={game} /> : <></>}</div> : 
                    post.gid && post.gid.length>2 ? <div className='postDate bold' onClick={()=>{resolveGame(post.gid)}}>{t('description.resolverjuego')}</div> :
                        <div className='postDate bold'>{t('description.sinjuego')}</div>}
            
            <div className='postText bold'>{post.text}</div>
            {embed}                        
            <div className='postGame'></div>
        </div>;
}

export default Post;