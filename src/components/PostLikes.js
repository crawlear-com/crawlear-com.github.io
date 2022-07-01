import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/PostLikes.scss';
import icon from '../resources/img/iconLike.png';

const NOT_LOADED=-1;
const NOT_PRESSED=0;
const PRESSED=1;

function PostLikes({post, onLikePost, onRemoveLikePost}) {
    const { t } = useTranslation();
    const likes = [];
    const firebase = window.crawlear.fb;
    const [status, setStatus] = React.useState({
        isPostFromUserLogged: firebase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid === post.uid,
        isUserLogged: firebase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid,
        status: NOT_LOADED,
        likes: 0,
        lid: 0
    });

    React.useEffect(()=>{
        const isPostFromUserLogged = firebase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid === post.uid;
        const isUserLogged = firebase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid;

        setStatus({...status, 
                isPostFromUserLogged: isPostFromUserLogged,
                isUserLogged: isUserLogged 
        });
        if (isUserLogged) {
            firebase.getIfPostIsLiked(post.pid, window.crawlear.user.uid, (isLiked, lid)=>{
                if(isLiked) {
                    setStatus({ ...status,
                        state: PRESSED,
                        lid: lid
                    }); 
                } else {
                    setStatus({ ...status, 
                        state: NOT_PRESSED, 
                        lid: 0
                    }); 
                }
            },()=>{}); 
        }

        if (isPostFromUserLogged || !isUserLogged) {
            firebase.getPostLikesCount(post.pid, (likes)=>{
                setStatus({ ...status,
                    likes: likes
                }); 
            },()=>{}); 
        }

    },[]);

    function onClickLike(event) {
        if (status.state === NOT_LOADED) return;

        if(status.state === PRESSED) {
            firebase.removeLike(status.lid,()=>{
                setStatus({ ...status,
                    state: NOT_PRESSED, 
                    lid: 0
                });
                onRemoveLikePost && onRemoveLikePost();
            },()=>{});
        }  else {
            firebase.setLike(post.pid, window.crawlear.user.uid, (lid)=>{
                setStatus({ ...status,
                    state: PRESSED, 
                    lid: lid
                });
                onLikePost && onLikePost();
            });
        }
    }

    if (status.likes >10) {
        likes.push(<div className='bold'>Likes 🔥🔥🔥</div>);
    } else if (status.likes >5) {
        likes.push(<div className='bold'>Likes 🔥🔥</div>);
    } else if (status.likes >0) { 
        likes.push(<div className='bold'>Likes 🔥</div>);
    } else {
        likes.push(<div className='bold'>Likes 🧊</div>);
    }

    return status.isUserLogged ? 
            status.isPostFromUserLogged ? <div className="likeContainer">{likes}</div> :
            <div className="likeContainer">
              <span className={status.state === PRESSED?'press':''}>
                <img src={icon} onClick={onClickLike} alt='like button' />
              </span>
        </div> : <div className="likeContainer">{likes}</div>;
}

export default PostLikes;