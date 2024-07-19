import * as React from 'react';
import { isOffline } from '../../../routepages/Offline';

import '../styles/UserSearch.scss';
import iconAdd from '../styles/img/iconAdd.png';

function UserSearch({onUserSeachPlayerAdd, 
    onUserClick,
    onPlusAddUserClick,
    mainText,
    secondaryText,
    iconSend,
    children}) {
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const [username, setUsername] = React.useState("");
    const [users, setUsers] = React.useState([]);
    const resultRef = React.useRef();
    const inputRef = React.useRef();
    
    function addUserFromSearch(event) {
        const element = event.target;
        const uid = element.getAttribute("data-uid");
        const displayName = element.getAttribute("data-displayname");
        const photoURL = element.getAttribute("data-photourl");

        setUsers([]);
        setUsername("");

        onUserSeachPlayerAdd && onUserSeachPlayerAdd({
            uid: uid,
            displayName: displayName,
            photoURL: photoURL
        });
    }

    function userSearch(event) {
        const textValue = event.target.value;

        setUsername(textValue);
        if(!isOffline && fbBase.isUserLogged()) {
            if (textValue.length > 0) {
                fb.userSearch(textValue, (users)=>{
                    setUsers(users);
                }, ()=>{});
            } else {
                setUsers([]);
            }    
        }
    }

    function userClick(event) {
        const uid = event.target.nextElementSibling.getAttribute("data-uid");

        onUserClick && onUserClick(uid);
    }

    const usersResult = [];
    let i=0, addButton;
    
    if (users.length>0) {
        usersResult.push(<div key={i} className="userSearchResultsText smallText">{secondaryText}</div>);
        i++;
    }

    users.forEach((user)=>{
        let actionIcon = iconSend;
        if (onUserSeachPlayerAdd && user.uid === window.crawlear.user.uid) {
            actionIcon = iconAdd;
        }

        usersResult.push(<div className="bold userSearchItem" key={i}>
                <span onClick={userClick} className="userSearchResult textOverflow">{user.displayName}</span>
                    <img src={actionIcon} alt="send icon" data-uid={user.uid} 
                    data-displayname={user.displayName} 
                    data-photourl={user.photoURL} 
                    onClick={addUserFromSearch} />
        </div>);
        i++;
    });

    if (onPlusAddUserClick) {
        addButton = <button className="buttonControlTextPlus" onClick={()=>{
            const value = inputRef.current.value;

            setUsers([]);
            setUsername("");
            onPlusAddUserClick({
                uid: "",
                displayName: value
            });
        }}>+</button>;
    }


    return <div className="userSearchContainer rounded rounded3">
            {!isOffline || onPlusAddUserClick ? 
                <><div className="userSearchText smallText">
                    {mainText}
                </div> 
                <input id={Date.now()} ref={inputRef} className='userSearchName' onChange={userSearch} value={username} />
                </> : <></>}
            {addButton}
            {children}
            <div ref={resultRef} className="resultsContainer">
                {usersResult}
            </div>
        </div>;
}

export default UserSearch;