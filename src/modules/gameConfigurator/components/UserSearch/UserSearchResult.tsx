import * as React from 'react'

import iconAdd from '../../styles/img/iconAdd.png';

interface UserSearchResultProps {
    users: Array<User>,
    onUserSeachPlayerAdd: Function,
    iconSend: string,
    secondaryText: string,
    userClick: React.MouseEventHandler<HTMLSpanElement>,
    addUserFromSearch: React.MouseEventHandler<HTMLSpanElement>
}

function UserSearchResult({ users, onUserSeachPlayerAdd, userClick, iconSend, secondaryText, addUserFromSearch }: UserSearchResultProps) {
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

    return <>{ usersResult }</>
}

export default UserSearchResult