import * as React from 'react';
import useUserSearch from '../hooks/useUserSearch';
import { isOffline } from '../../../pages/Offline';

import '../styles/UserSearch.scss';
import iconAdd from '../styles/img/iconAdd.png';

interface UserSearchProps {
    onUserSeachPlayerAdd: Function,
    onUserClick: Function,
    onPlusAddUserClick: Function,
    mainText: string,
    secondaryText: string,
    iconSend: string,
    children: React.JSX.Element
}

function UserSearch({ onUserSeachPlayerAdd,
    onUserClick,
    onPlusAddUserClick,
    mainText,
    secondaryText,
    iconSend,
    children }: UserSearchProps) {
    const resultRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [users, username, addButton, userSearch, userClick, addUserFromSearch] = useUserSearch(onUserSeachPlayerAdd, onUserClick, onPlusAddUserClick, inputRef)
    const usersResult: Array<React.JSX.Element> = [<div key={"secondaryText"} className="userSearchResultsText smallText">{ secondaryText }</div>]
        .concat((users.map((user: User) => {
                let actionIcon = iconSend;
                if (onUserSeachPlayerAdd && user.uid === window.crawlear.user.uid) {
                    actionIcon = iconAdd;
                }

                return (<div className="bold userSearchItem" key={user.displayName}>
                    <span onClick={userClick} className="userSearchResult textOverflow">{user.displayName}</span>
                        <img src={actionIcon} alt="send icon" data-uid={user.uid}
                            data-displayname={user.displayName}
                            data-photourl={user.photoURL}
                            onClick={addUserFromSearch} />
                    </div>);
        })))

    return <div className="userSearchContainer rounded rounded3">
            {!isOffline || onPlusAddUserClick ?
                <><div className="userSearchText smallText">
                    {mainText}
                </div>
                <input ref={inputRef} className='userSearchName' onChange={userSearch} value={username} />
                </> : <></>}
            { addButton }
            {children}
            <div ref={resultRef} className="resultsContainer">
                {usersResult}
            </div>
        </div>;
}

export default UserSearch;