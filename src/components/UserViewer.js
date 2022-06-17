import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserProfile from './UserProfile';
import logo from '../resources/img/logo5.png'
import '../resources/css/UserViewer.scss';

function UserViewer({uid}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [user, setUser] = React.useState({});
    const [userData, setUserData] = React.useState({});

    React.useEffect(()=>{
        firebase.getUser(uid, (user)=>{
            setUser({...user});
            firebase.getUserExtraData(uid, (data)=>{
                setUserData(data);
            });
        });
    }, []);

    if (user.registrationDate ) {
        return <div className="userViewer">
            <UserProfile user={user} />
            <div>
                {t('description.partidascreadas')}: {userData.ownerGames || 0}
            </div>
            <div>
                {t('description.partidasdejuez')}: {userData.judgeGames || 0}
            </div>
            <div>
                {t('description.partidasprevias')}: {userData.pilotGames || 0}
            </div>
        </div>;
    } else {
        return <div className=''>
                <a href="https://crawlear.com" target="_blank"><img src={logo} className="userViewerLogo" alt="web logo"></img></a>
                <p>{t('content.userprofilenotlogged')}</p>
            </div>;
    }
}

export default UserViewer;