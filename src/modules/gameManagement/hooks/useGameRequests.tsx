import * as React from 'react'

export interface GameRequest {
    date: string,
    fromName: string,
    fromUid: string,
    gameName: string,
    status: string,
    toUid: string
}

function useGameRequests(uid: string, t: Function) {
    const fb = window.crawlear.fb;
    const [gameRequests, setGameRequests] = React.useState<Map<string, GameRequest>>(new Map());

    const onRequestAdded = React.useCallback((key: string, value: GameRequest) => {
        setGameRequests((oldRequests) => {
            const newRequests = new Map(oldRequests)
            newRequests.set(key, value)
            return newRequests
        });
    }, [])

    const onRequestRemoved = React.useCallback((key: string) => {
        setGameRequests((oldRequests) => {
            const newRequests = new Map(oldRequests)
            newRequests.delete(key)
            return newRequests
        });
    }, [])

    React.useEffect(()=>{
        gameRequests.size === 0 && fb.getUserGameRequests(uid,
            onRequestAdded,
            onRequestRemoved)
    },[fb, uid, onRequestAdded, onRequestRemoved, gameRequests])

    return [gameRequests]
}

export default useGameRequests
