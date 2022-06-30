import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Instagram from './embed/Instagram';
import Youtube from './embed/Youtube';
import Tiktok from './embed/Tiktok';
import PostInfo from './PostInfo';
import Sharers from './embed/Sharers';

import '../resources/css/Post.scss';

function Post({post, readOnly, onRemovePost}) {
    const { t } = useTranslation();
    let embed = <></>;

    if(post.url.indexOf('instagram')>=0) {
        embed = <Instagram className="postUrlContent" url={post.url} />
    } else if(post.url.indexOf('youtu')>=0) {
        embed = <Youtube className="postUrlContent" url={post.url} />
    } else if(post.url.indexOf('tiktok')>=0) {
        embed = <Tiktok className="postUrlContent" url={post.url} />
    }

    return <div key={post.pid} className="post rounded ">
            <PostInfo post={post} 
                onRemovePost={onRemovePost}
                readOnly={readOnly}>
            {embed}
            </PostInfo>
            <Sharers url={`post?pid=${post.pid}`} 
                    headerText={t('content.comparteenredespost')}
                    text={t('content.sharePostText')} />
        </div>;
}

export default Post;