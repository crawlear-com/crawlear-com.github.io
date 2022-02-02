import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../Utils';

import '../resources/css/UserSearch.scss';
import iconSend from '../resources/img/iconSend.png';
import iconAdd from '../resources/img/iconAdd.png';

function UserSearch({onUserSeachPlayerAdd, gameName}) {
    const firebase = window.crawlear.fb;
    const { t } = useTranslation();
    const [username, setUsername] = React.useState("");
    const [users, setUsers] = React.useState([]);
    const gameRequestsRef = React.useRef(0);
    const [gameRequests, setGameRequests] = React.useState(0);
    const resultRef = React.useRef();
    const inputRef = React.useRef();
    
    function addUserFromSeach(event) {
        const element = event.target;
        const uid = element.getAttribute("data-uid");
        const displayName = element.getAttribute("data-displayname");
        const photoURL = element.getAttribute("data-photourl");

        if (!uid) return;
        if (uid !== window.crawlear.user.uid) {
            if (!window.confirm(t('content.peticionjuegoconfirmacion'))) {
                return;
            }
        }
        setUsername("");
        setUsers([]);
        if (uid === window.crawlear.user.uid) {
            const user = window.crawlear.user;

            onUserSeachPlayerAdd({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL
            });
        } else {
            firebase.setUserGameRequest(window.crawlear.user.uid, window.crawlear.user.displayName, uid, gameName, (requestData, requestStatus)=>{
                if (requestStatus === 'pending') {
                    gameRequestsRef.current += 1;
                    setGameRequests(gameRequests+1);
                } else if (requestStatus === 'accepted') {
                    onUserSeachPlayerAdd({
                        uid: uid,
                        displayName: displayName,
                        photoURL: photoURL
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

    function userSearch(event) {
        const textValue = event.target.value;

        setUsername(textValue);
        if(firebase.isUserLogged()) {
            if (textValue.length > 0) {
                firebase.userSearch(textValue, (users)=>{
                    setUsers(users);
                }, ()=>{});
            } else {
                setUsers([]);
            }    
        }
    }

    const usersResult = [];
    const gameRequestsList = [];
    let i=0;
    
    if(users.length>0) {
        usersResult.push(<>
            <div key={i} className="userSearchResultsText smallText">{t('content.enviorequest')}. {t('content.enviorequest2')}</div>
        </>);
        i++;
    }

    i=0;
    users.forEach((user)=>{
        let actionIcon = iconSend;
        if (user.uid === window.crawlear.user.uid) {
            actionIcon = iconAdd;
        }

        usersResult.push(<div className="bold userSearchItem" key={i}>
                <span className="userSearchResult textOverflow">{user.displayName}</span>
                    <img src={actionIcon} alt="send icon" data-uid={user.uid} 
                    data-displayname={user.displayName} 
                    data-photourl={user.photoURL} 
                    onClick={addUserFromSeach}></img>
        </div>);
        i++;
    });

    if (gameRequestsRef.current > 0) {
        gameRequestsList.push(<div className="">{gameRequestsRef.current} {t('description.peticionespendientes')}</div>);
    }

    return <div className="userSearchContainer rounded rounded3">
            <div className="userSearchText smallText">{
                firebase.isUserLogged() ? t('content.usuariodesistema') : t('content.usuarionosistema')
            }</div>
            <input id={Date.now()} ref={inputRef} className='userSearchName' onChange={userSearch} value={username} />
            <button className="buttonControlTextPlus" onClick={()=>{
                setUsers([]);
                setUsername("");

                inputRef.current.value && onUserSeachPlayerAdd({
                    uid: "",
                    displayName: inputRef.current.value
                });
            }}>+</button>

            {gameRequestsList}

            <div ref={resultRef} className="resultsContainer">
                {usersResult}
            </div>
        </div>;
}

export default UserSearch;