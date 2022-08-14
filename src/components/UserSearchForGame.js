import * as React from 'react';
import { useTranslation } from 'react-i18next';
import UserSearch from './UserSearch';

import '../resources/css/UserSearch.scss';
import iconSend from '../resources/img/iconSend.png';

function UserSearchForGame({onUserSeachPlayerAdd, gameName, isForJudge}) {
    const firebase = window.crawlear.fb;
    const { t } = useTranslation();
    const gameRequestsRef = React.useRef(0);
    const [gameRequests, setGameRequests] = React.useState(0);
    const inputRef = React.useRef();
    
    function addUserFromSeach({uid, displayName, photoURL}) {
        if (!uid) return;
        if (uid !== window.crawlear.user.uid) {
            if (!window.confirm(t('content.peticionjuegoconfirmacion'))) {
                return;
            }
        }
        if (uid === window.crawlear.user.uid) {
            const user = window.crawlear.user;

            onUserSeachPlayerAdd({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                group: 0
            });
        } else {
            firebase.setUserGameRequest(window.crawlear.user.uid, 
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
                        });
                        gameRequestsRef.current -= 1;
                        setGameRequests(gameRequests-1);
                    } else {
                        gameRequestsRef.current -= 1;
                        setGameRequests(gameRequests-1);
                    }
                });
        }
    }

    const gameRequestsList = [];
    let addButton, i=0;

    if (gameRequestsRef.current > 0) {
        gameRequestsList.push(<div key={i}>{gameRequestsRef.current} {t('description.peticionespendientes')}</div>);
    }

    if (!isForJudge) {
        addButton = <button ref={inputRef} className="buttonControlTextPlus" onClick={()=>{
            inputRef.current && 
            inputRef.current.previousElementSibling && 
            inputRef.current.previousElementSibling.value && 
            onUserSeachPlayerAdd({
                uid: "",
                displayName: inputRef.current.previousElementSibling.value
            });
        }}>+</button>;
    }

    return <UserSearch onUserSeachPlayerAdd={addUserFromSeach}
                mainText={firebase.isUserLogged() ? t('content.usuariodesistema') : t('content.usuarionosistema')}
                secondaryText={`${t('content.enviorequest')}. ${t('content.enviorequest2')}`}
                iconSend={iconSend}>
                    {addButton} 
                    {gameRequestsList}
            </UserSearch>
}

export default UserSearchForGame;