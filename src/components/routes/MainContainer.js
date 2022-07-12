import * as React from 'react';
import ViewNavigator from '../ViewNavigator';
import UserViewer from './UserViewer';
import FeedViewer from '../FeedViewer';
import Footer from '../Footer';
import { UserStatusContext } from '../context/UserStatusContext';

const body = window.document.body;

function MainContainer({onLogin, onLogout}) {
    const col1Ref = React.useRef();
    const col2Ref = React.useRef();
    const col3Ref = React.useRef();
    const uid = window.crawlear && window.crawlear.user && window.crawlear.user.uid;
    const { isUserLoged } = React.useContext(UserStatusContext);

    React.useEffect(()=>{
        body.classList.add('profile');
    },[]);

    if (isUserLoged){
        return <ViewNavigator col1={col1Ref} col2={col2Ref}>
        <div id='col1' ref={col1Ref} className='col1 current animated'>
            <UserViewer onLogin={()=>{onLogin(false)}} onLogout={onLogout} uid={uid}/>
            <Footer></Footer>
        </div>
        <div id='col2' ref={col2Ref} className='col2 animated'>
            <FeedViewer uid={uid} />
            <Footer></Footer>
        </div>
    </ViewNavigator>;

    } else {
        return <>Not logged! go to <a href='https://crawlear.com'>crawlear.com</a></>
    }

}

export default MainContainer;