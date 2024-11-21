import * as React from 'react'
import { Game } from '../../../games/Game'
import Utils from '../../../Utils'

function UseGameManagementMenu(): Array<any> {
    const [games, setGames] = React.useState<Array<Game>>([])
    const [judgeGames, setJudgeGames] = React.useState<Array<Game>>([])
    const [storedGames, setStoredGames] = React.useState<Array<Game>>([])
    const [allGames, setAllGames] = React.useState<Array<Game>>([])
    const fb = window.crawlear.fb
    const refreshGames = React.useCallback(() => {
        const fb = window.crawlear.fb

        fb.getGamesFromUser(window.crawlear.user.uid, false, (pGames: Array<Game>)=> {
            setAllGames(previousInputs => ([...previousInputs,...pGames]))
        });

        fb.getGamesFromJudge(window.crawlear.user.uid, false, (jGames: Array<Game>)=> {
            setAllGames(previousInputs => ([...previousInputs,...jGames]))
        });
    }, [])

    React.useEffect(() => {
        window.document.body.classList.remove('playing')
    },[])

    React.useEffect(() => {
        window.crawlear.fbBase.isUserLogged() && refreshGames()
    }, [refreshGames])

    React.useEffect(()=>{
        processCurrentGames(allGames)
    }, [allGames])

    function processCurrentGames(games: Array<Game>): void {
        const jGames: Game[] = [],
              uGames: Array<Game> = []

        games.forEach(game => {
            if (game.jids.indexOf(window.crawlear.user.uid)>=0 || game.owner.indexOf(window.crawlear.user.uid)>=0) {
                jGames.push(game)
            } else if (game.uids.indexOf(window.crawlear.user.uid)>=0) {
                uGames.push(game)
            }
        });

        setGames(uGames)
        setJudgeGames(jGames)
    }

    function onLoadPreviousGames(): void {
        fb.getFinishedGamesFromUid(window.crawlear.user.uid, (sGames: Array<Game>)=> {
            setStoredGames(previousInputs => ([...previousInputs,...sGames]))
        });
    }

    return [games, (gid: string) => {
            onRemoveGames(games, gid, setGames)
        },
        judgeGames, (gid: string) => {
            onRemoveGames(judgeGames, gid, setJudgeGames)
        }, storedGames, (gid: string) => {
            onRemoveGames(storedGames, gid, setStoredGames)
        }, onLoadPreviousGames]
}

async function onRemoveGames(gameArray: Array<Game>, gid: string, setMethod: Function) {
    const fb = window.crawlear.fb
    let [game, position] = Utils.findElementInArray(gameArray, gid, (item: Game, i: number) => item.gid === gid)

    if (game) {
        const newGames = [...gameArray],
        uid = window.crawlear.user.uid

        if (game && game.uids.indexOf(uid)>=0) {
            game = await fb.removeIdFromGame(game, uid, "uids")
        }
        if (game && game.jids.indexOf(uid)>=0) {
            game = await fb.removeIdFromGame(game, uid, "jids")
        }
        if (game && game.owner.indexOf(uid)>=0) {
            game = await fb.removeIdFromGame(game, uid, "owner")
        }
        if (game && game.uids.length === 0 && game && game.jids.length === 0) {
            await fb.removeGame(game.gid)
        }

        newGames.splice(position, 1)
        setMethod(newGames)
    }
}

export default UseGameManagementMenu