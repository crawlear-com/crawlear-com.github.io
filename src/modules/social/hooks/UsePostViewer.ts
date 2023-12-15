import * as React from 'react'
import Analytics from '../../../Analytics';
import { Player } from '../../../games/GameInterfaces';

function UsePostViewer(pid: number) {
    const firebase = window.crawlear.fb;
    const [post, setPost] = React.useState({});
    const [user, setUser] = React.useState({});

    React.useEffect(()=>{
        firebase.getPost(pid, (post: any)=>{
            setPost(post);
            firebase.getUser(post.uid, (user: Player)=>{
                setUser(user);
            }, ()=>{});
        }, ()=>{});

        Analytics.pageview(`${document.location.pathname}${document.location.search}`);
        window.document.body.classList.add('postview');

        return ()=>{
            window.document.body.classList.remove('postview');
        }
    },[])

    return [user, post]
}

export default UsePostViewer