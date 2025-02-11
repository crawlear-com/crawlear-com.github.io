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
        if (window) {
            const fb = window.crawlear.fb
            gameRequests.size === 0 && fb.getUserGameRequests(uid,
                onRequestAdded,
                onRequestRemoved)
        }
    },[uid, onRequestAdded, onRequestRemoved, gameRequests])

    return [gameRequests]
}

export default useGameRequests
