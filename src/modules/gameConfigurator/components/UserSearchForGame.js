import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserSearch from './UserSearch';

import '../styles/UserSearch.scss';
import iconSend from '../styles/img/iconSend.png';

function UserSearchForGame({onUserSeachPlayerAdd, gameName, isForJudge}) {
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const { t } = useTranslation(['main']);
    const gameRequestsRef = React.useRef(0);
    const [gameRequests, setGameRequests] = React.useState(0);
    
    function addUserFromSeach({uid, displayName, photoURL}) {
        if (!uid) return
        if (uid !== window.crawlear.user.uid) {
            if (!window.confirm(t('content.peticionjuegoconfirmacion'))) {
                return
            }
        }
        if (uid === window.crawlear.user.uid) {
            const user = window.crawlear.user

            onUserSeachPlayerAdd({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                group: 0
            })
        } else {
            fb.setUserGameRequest(window.crawlear.user.uid, 
                window.crawlear.user.displayName, 
                uid, 
                gameName, 
                (requestData, requestStatus)=>{
                    if (requestStatus === 'pending') {
                        gameRequestsRef.current += 1;
                        setGameRequests(gameRequests+1);
                    } else if (requestStatus === 'accepted') {
                        onUserSeachPlayerAdd({
                            uid: uid,
                            displayName: displayName,
                            photoURL: photoURL,
                            group: 0
                        })
                        gameRequestsRef.current -= 1
                        setGameRequests(gameRequests-1)
                    } else {
                        gameRequestsRef.current -= 1
                        setGameRequests(gameRequests-1)
                    }
                })
        }
    }

    const gameRequestsList = []
    let i=0

    if (gameRequestsRef.current > 0) {
        gameRequestsList.push(<div key={i}>{gameRequestsRef.current} {t('description.peticionespendientes')}</div>)
    }

    return <UserSearch onUserSeachPlayerAdd={addUserFromSeach}
                onPlusAddUserClick={!isForJudge ? onUserSeachPlayerAdd : undefined }
                mainText={fbBase.isUserLogged() ? t('content.usuariodesistema') : t('content.usuarionosistema')}
                secondaryText={`${t('content.enviorequest')}. ${t('content.enviorequest2')}`}
                iconSend={iconSend}>
                    {gameRequestsList}
            </UserSearch>
}

export default UserSearchForGame