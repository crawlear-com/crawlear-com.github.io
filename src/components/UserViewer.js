import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserProfile from './UserProfile';

function UserViewer({uid}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [user, setUser] = React.useState({});

    React.useEffect(()=>{
        firebase.getUser(uid, (user)=>{
            setUser({...user});
            console.log(user);
        });
    }, []);

    if (user.registrationDate) {

        return <div className="gameViewer">
            <UserProfile user={user} />
        </div>;
    } else {
        return <>meeeh!</>;
    }
}

export default UserViewer;