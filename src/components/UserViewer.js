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
//        if(window.crawlear && window.crawlear.user && window.crawlear.user.uid) {
            firebase.getUser(uid, (user)=>{
                setUser({...user});
                firebase.getUserExtraData(uid, (data)=>{
                    setUserData(data);
                });
            });
//        }
    }, []);

    if (user.registrationDate ) {
        return <div className="userViewer">
            <UserProfile user={user} />
            <div>
                Partidas creadas: {userData.ownerGames || 0}
            </div>
            <div>
                Partidas como juez: {userData.judgeGames || 0}
            </div>
            <div>
                Partidas como piloto: {userData.pilotGames || 0}
            </div>
        </div>;
    } else {
        return <div className=''>
                <img src={logo} className="userViewerLogo" alt="web logo"></img>
                <p>{t('content.userprofilenotlogged')}</p>
            </div>;
    }
}

export default UserViewer;