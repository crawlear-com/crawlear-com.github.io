import * as React from 'react';
import ViewNavigator from '../ViewNavigator';
import GameManagement from './GameManagement';
import UserViewer from './UserViewer';
import FeedViewer from '../FeedViewer';
import Footer from '../Footer';

function MainContainer({onLogin, onLogout}) {
    const firebase = window.crawlear.fb;
    const col1Ref = React.useRef();
    const col2Ref = React.useRef();
    const col3Ref = React.useRef();

    return <ViewNavigator col1={col1Ref} col2={col2Ref} col3={col3Ref}>
        <div id='col1' ref={col1Ref} className='col1 animated'>
            <UserViewer onLogin={()=>{onLogin(false)}} onLogout={onLogout} uid={window.crawlear.user.uid}/>
            <Footer></Footer>
        </div>
        <div id='col2' ref={col2Ref} className='col2 animated'>
            <GameManagement />
            <Footer></Footer>
        </div>
        <div id='col3' ref={col3Ref} className='col3 animated'>
            <FeedViewer />
            <Footer></Footer>
        </div>
    </ViewNavigator>;
}

export default MainContainer;