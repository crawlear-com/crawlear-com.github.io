import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Instagram from './embed/Instagram';
import Youtube from './embed/Youtube';
import Tiktok from './embed/Tiktok';
import Facebook from './embed/Facebook';
import PostInfo from './PostInfo';
import Sharers from './embed/Sharers';
import UseIfVisible from '../hooks/UseIfVisible';
import Spinner from '../../../components/Spinner';

import '../styles/Post.scss';

function Post({ post, readOnly, onRemovePost }) {
    const { t } = useTranslation(['main']);
    const onScreenContainerRef = React.useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [statusRendered, setStatusRendered] = React.useState(false);
    let embed = <></>;

    React.useEffect(() => {
        setStatusRendered(true);
    }, []);

    UseIfVisible(onScreenContainerRef.current, (visible) => {
        if (!isVisible && visible) {
            setIsVisible(true);
            if (post.url.indexOf('instagram') >= 0) {
                window.instgrm && window.instgrm.Embeds.process();
            }
        }
    });

    if (post.url.indexOf('instagram') >= 0) {
        embed = <Instagram className="postUrlContent" url={post.url} />
    } else if (post.url.indexOf('youtu') >= 0) {
        embed = <Youtube className="postUrlContent" url={post.url} />
    } else if (post.url.indexOf('tiktok') >= 0) {
        embed = <Tiktok className="postUrlContent" url={post.url} />
    } else if (post.url.indexOf('facebook') >= 0) {
        embed = <Facebook className="postUrlContent" url={post.url} />
    }

    if (isVisible) {
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
    } else {
        return <div className="embedLoadingContainer" ref={onScreenContainerRef}>
            <Spinner />
        </div>;
    }
}

export default Post;