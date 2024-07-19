import * as React from 'react';
import { UserStatusContext } from '../../../context/UserStatusContext';

import '../styles/PostLikes.scss';
import icon from '../../../resources/img/iconLike.png';

const NOT_LOADED=-1;
const NOT_PRESSED=0;
const PRESSED=1;

function PostLikes({post, onLikePost, onRemoveLikePost}) {
    const likes = [];
    const firebase = window.crawlear.fb;
    const { isUserLoged } = React.useContext(UserStatusContext);
    const [status, setStatus] = React.useState({
        status: NOT_LOADED,
        likes: 0,
        lid: 0
    });

    React.useEffect(()=>{
        if (isUserLoged) {
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

        if (isPostFromUserLogged(post.uid) || !isUserLoged) {
            firebase.getPostLikesCount(post.pid, (likes)=>{
                setStatus({ ...status,
                    likes: likes
                }); 
            },()=>{}); 
        }

    },[]);

    function onClickLike() {
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
        likes.push(<div key="likes+++" className='bold'>Likes 🔥🔥🔥</div>);
    } else if (status.likes >5) {
        likes.push(<div key="likes++" className='bold'>Likes 🔥🔥</div>);
    } else if (status.likes >0) { 
        likes.push(<div key="likes+" className='bold'>Likes 🔥</div>);
    } else {
        likes.push(<div key="likes" className='bold'>Likes 🧊</div>);
    }

    return isUserLoged ? 
            (isPostFromUserLogged(post.uid) ? <div className="likeContainer">{likes}</div> :
            <div className="likeContainer">
              <span className={status.state === PRESSED?'press':''}>
                <img src={icon} onClick={onClickLike} alt='like button' />
              </span>
        </div>) : <div className="likeContainer">{likes}</div>;
}

function isPostFromUserLogged(uid) { 
    return window.crawlear.fbBase.isUserLogged() && window.crawlear && window.crawlear.user && window.crawlear.user.uid === uid; 
}

export default PostLikes;