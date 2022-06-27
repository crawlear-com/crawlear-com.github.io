import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/PostLikes.scss';
import icon from '../resources/img/iconLike.png';

const NOT_LOADED=-1;
const NOT_PRESSED=0;
const PRESSED=1;

function PostLikes({post, isReadOnly, onLikePost, onRemoveLikePost}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [status, setStatus] = React.useState({
        status: NOT_LOADED,
        lid: 0
    });

    React.useEffect(()=>{
        if (window.crawlear && window.crawlear.user && window.crawlear.user.uid) {
            firebase.getIfPostIsLiked(post.pid, window.crawlear.user.uid, (isLiked, lid)=>{
                if(isLiked) {
                    setStatus({ 
                        state: PRESSED, 
                        lid: lid
                    }); 
                } else {
                    setStatus({
                        state: NOT_PRESSED, 
                        lid: 0
                    }); 
                }
            },()=>{}); 
        }
    },[]);

    function onClickLike(event) {
        if (status.state === NOT_LOADED) return;

        if(status.state === PRESSED) {
            firebase.removeLike(status.lid,()=>{
                setStatus({
                    state: NOT_PRESSED, 
                    lid: 0
                });
            },()=>{});
        }  else {
            firebase.setLike(post.pid, window.crawlear.user.uid, (lid)=>{
                setStatus({ 
                    state: PRESSED, 
                    lid: lid
                }); 
            });
        }
    }

    return window.crawlear && window.crawlear.user && window.crawlear.user.uid ? <div className="likeContiner">
              <span className={status.state === PRESSED?'press':''}>
                <img src={icon} onClick={onClickLike} />
              </span>
        </div> : <></>;
}

export default PostLikes;