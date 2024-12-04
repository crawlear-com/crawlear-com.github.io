import * as React from 'react'

interface GameDirectorRequest {
    fromName: String,
    zone: number,
    playerName: String,
    status: String
}

function useGameProgressionDirector(gid: string, t: Function) {
    const firebase = window.crawlear.fb;
    const [requests, setRequests] = React.useState<Map<string, GameDirectorRequest>>(new Map());
    
    React.useEffect(() => {
        function onPresenceRequestAdded(key: string, value: GameDirectorRequest) {
            if (value.status === 'pending') {
                const newRequest: Map<string, GameDirectorRequest> = new Map(requests)
                
                newRequest.set(key, value)
                setRequests(newRequest)
            }
        }

        requests.size === 0 && firebase.getDirectorPresenceRequest(gid, onPresenceRequestAdded, onPresenceRequestAdded);
    }, [firebase, gid, requests])

    function presenceRequestAccept(requestKey: string) {
        if (window.confirm(t('content.aceptarpresencia'))) {
            const newRequest: Map<string, GameDirectorRequest> = new Map(requests)

            newRequest.delete(requestKey)
            setRequests(newRequest)
            firebase.acceptDirectorPresenceRequest(gid, requestKey)
        }
    }

    return [requests, presenceRequestAccept]
}

export default useGameProgressionDirector