import * as React from 'react'

interface GameDirectorRequest {
    fromName: String,
    zone: number,
    playerName: String,
    status: String
}

function useGameProgressionDirector(gid: string, t: Function) {
    const firebase = window.crawlear.fb;
    const requestsRef = React.useRef<Map<string, GameDirectorRequest>>(new Map());
    // eslint-disable-next-line no-unused-vars

    React.useEffect(()=>{
        firebase.getDirectorPresenceRequest(gid, onPresenceRequestAdded, onPresenceRequestAdded);
    }, [firebase, gid]);

    function onPresenceRequestAdded(key: string, value: GameDirectorRequest) {
        if (value.status === 'pending') {
            requestsRef.current.set(key, value)
        }
    }

    function presenceRequestAccept(requestKey: string) {
        if (window.confirm(t('content.aceptarpresencia'))) {
            requestsRef.current.delete(requestKey);
            firebase.acceptDirectorPresenceRequest(gid, requestKey);
        }
    }

    return [requestsRef.current, presenceRequestAccept]
}

export default useGameProgressionDirector