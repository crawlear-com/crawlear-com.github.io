import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Post from '../Post';
import Sharers from '../embed/Sharers';

function PostViewer({pid}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [post, setPost] = React.useState({});

    React.useEffect(()=>{
        firebase.getPost(pid, (post)=>{
            setPost(post);
        }, ()=>{});
    },[]);

        return <div className='userViewer'>
            {post.pid ? <>
                    <Post post={post} readOnly={false} /> 
                    <Sharers url={`post?pid=${post.pid}`} />
                </>
                : 
                <div>No exsiste el post</div>}
            </div>
}

export default PostViewer;