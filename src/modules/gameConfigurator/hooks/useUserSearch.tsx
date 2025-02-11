import * as React from 'react'
import { isOffline } from '../../../routepages/Offline';

function useUserSearch(onUserSeachPlayerAdd: Function, onUserClick: Function, onPlusAddUserClick: Function, inputRef: React.RefObject<HTMLInputElement>):
    [Array<User>, string, React.JSX.Element, React.ChangeEventHandler, React.MouseEventHandler, React.MouseEventHandler] {
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const [username, setUsername] = React.useState<string>("");
    const [users, setUsers] = React.useState<Array<any>>([]);

    function addUserFromSearch(event: React.MouseEvent<HTMLImageElement>) {
        const element = (event.target as HTMLImageElement);
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

    function userSearch(event: React.ChangeEvent) {
        const textValue = (event.target as HTMLInputElement).value;

        setUsername(textValue);
        if(!isOffline && fbBase.isUserLogged()) {
            if (textValue.length > 0) {
                fb.userSearch(textValue, (users:Array<any>)=>{
                    setUsers(users);
                }, ()=>{});
            } else {
                setUsers([]);
            }
        }
    }

    function userClick(event: React.MouseEvent<HTMLSpanElement>) {
        const uid = (event.target as HTMLSpanElement).nextElementSibling?.getAttribute("data-uid");

        onUserClick && onUserClick(uid);
    }

    let addButton = onPlusAddUserClick ? <button className="buttonControlTextPlus" onClick={() => {
        const value = (inputRef?.current as HTMLInputElement)?.value;

        setUsers([]);
        setUsername("");
        onPlusAddUserClick({
            uid: "",
            displayName: value
        });
    }}>+</button> : <></>

    return [users, username, addButton, userSearch, userClick, addUserFromSearch]
}

export default useUserSearch