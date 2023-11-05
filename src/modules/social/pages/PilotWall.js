import * as React from 'react';
import UserViewer from './UserViewer';
import Footer from '../../../components/Footer';
import { UserStatusContext } from '../../../context/UserStatusContext';
import { t } from 'i18next';

const body = window.document.body;

function PilotWall({onLogin, onLogout}) {
    const fb = window.crawlear.fb
    const uid = window.crawlear && window.crawlear.user && window.crawlear.user.uid;
    const { isUserLoged } = React.useContext(UserStatusContext);

    React.useEffect(()=>{
        body.classList.add('profile')
        fb.checkIfLogged(()=>{onLogin(false)});
    },[]);

    if (isUserLoged){
        return <>
            <UserViewer onLogin={()=>{onLogin(false)}} onLogout={onLogout} uid={uid}/>
            <Footer></Footer>
            </>
    } else {
        return <>{t('content.userprofilenotlogged')} <a href='https://crawlear.com'>crawlear.com</a></>
    }

}

export default PilotWall;