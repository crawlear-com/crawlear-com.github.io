import { GameRequest } from "../useGameRequests"

const useGameRequests = (uid: string, t: Function): [Map<string, GameRequest>] => {
    return [new Map([['key1', {
        date: '12/12/2024',
        fromName: 'from name',
        fromUid: 'from uid',
        gameName: 'game name',
        status: 'pending',
        toUid: 'to uid'
    }], ['key2', {
        date: '12/12/2024',
        fromName: 'from name2',
        fromUid: 'from uid2',
        gameName: 'game name2',
        status: 'pending',
        toUid: 'to uid2'
    }]])]
}

export default useGameRequests
