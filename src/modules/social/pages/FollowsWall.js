import * as React from 'react';
import FeedViewer from '../components/FeedViewer';
import Footer from '../../../components/Footer';
import { UserStatusContext } from '../../../context/UserStatusContext';
import { useTranslation } from 'react-i18next'

const body = window.document.body;

function FollowsWall() {
    const { t } = useTranslation(['main']);
    const uid = window.crawlear && window.crawlear.user && window.crawlear.user.uid;
    const { isUserLoged } = React.useContext(UserStatusContext);

    React.useEffect(()=>{
        body.classList.add('feed');
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