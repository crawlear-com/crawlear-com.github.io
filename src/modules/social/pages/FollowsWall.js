import * as React from 'react';
import FeedViewer from '../components/FeedViewer';
import Footer from '../../../components/Footer';
import { UserStatusContext } from '../../../context/UserStatusContext';
import { t } from 'i18next';

const body = window.document.body;

function FollowsWall({onLogin}) {
    const fb = window.crawlear.fb
    const uid = window.crawlear && window.crawlear.user && window.crawlear.user.uid;
    const { isUserLoged } = React.useContext(UserStatusContext);

    React.useEffect(()=>{
        body.classList.add('feed');
        fb.checkIfLogged(()=>{onLogin(false)});
    },[]);

    if (isUserLoged){
        return <>
            <FeedViewer uid={uid} />
            <Footer></Footer>
            </>
    } else {
        return <>{t('content.userprofilenotlogged')} <a href='https://crawlear.com'>crawlear.com</a></>
    }

}

export default FollowsWall;