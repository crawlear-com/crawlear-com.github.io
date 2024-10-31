import * as React from 'react'
import { Game } from '../../../games/Game'

function UseGameManagementMenu(): Array<any> {
    const [games, setGames] = React.useState<Array<Game>>([])
    const [judgeGames, setJudgeGames] = React.useState<Array<Game>>([])
    const [storedGames, setStoredGames] = React.useState<Array<Game>>([])
    const [allGames, setAllGames] = React.useState<Array<Game>>([])
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const refreshGames = React.useCallback(() => {
        fb.getGamesFromUser(window.crawlear.user.uid, false, (pGames: Array<Game>)=> {
            setAllGames(previousInputs => ([...previousInputs,...pGames]))
        });

        fb.getGamesFromJudge(window.crawlear.user.uid, false, (jGames: Array<Game>)=> {
            setAllGames(previousInputs => ([...previousInputs,...jGames]))
        });
    }, [fb])

    React.useEffect(() => {
        fbBase.isUserLogged() && refreshGames()
    }, [fbBase, refreshGames])

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

    return [games, (gamePosition: number) => {
            onRemoveGames(games, gamePosition, setGames)
        },
        judgeGames, (gamePosition: number) => {
            onRemoveGames(judgeGames, gamePosition, setJudgeGames)
        }, storedGames, (gamePosition: number) => {
            onRemoveGames(storedGames, gamePosition, setStoredGames)
        }, onLoadPreviousGames]
}

async function onRemoveGames(gameArray: Array<Game>, gamePosition: number, setMethod: Function) {
    const fb = window.crawlear.fb
    let game = gameArray[gamePosition]
    const newGames = [...gameArray],
        uid = window.crawlear.user.uid

    if (game.uids.indexOf(uid)>=0) {
        game = await fb.removeIdFromGame(game, uid, "uids")
    }
    if (game.jids.indexOf(uid)>=0) {
        game = await fb.removeIdFromGame(game, uid, "jids")
    }
    if (game.owner.indexOf(uid)>=0) {
        game = await fb.removeIdFromGame(game, uid, "owner")
    }
    if (game.uids.length === 0 && game.jids.length === 0) {
        await fb.removeGame(game.gid)
    }

    newGames.splice(gamePosition, 1)
    setMethod(newGames)
}

export default UseGameManagementMenu