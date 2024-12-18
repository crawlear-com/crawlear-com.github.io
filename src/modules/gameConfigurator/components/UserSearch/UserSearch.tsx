import * as React from 'react';
import useUserSearch from '../../hooks/useUserSearch';
import { isOffline } from '../../../../pages/Offline';
import UserSearchResult from './UserSearchResult';

import '../../styles/UserSearch.scss';

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
    const [users, username, addButton, userSearch,
        userClick, addUserFromSearch] = useUserSearch(onUserSeachPlayerAdd, onUserClick, onPlusAddUserClick, inputRef)

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
                <UserSearchResult users={users} onUserSeachPlayerAdd={onUserSeachPlayerAdd}
                    userClick={userClick} iconSend={iconSend} secondaryText={secondaryText} addUserFromSearch={addUserFromSearch} />
            </div>
        </div>;
}

export default UserSearch;