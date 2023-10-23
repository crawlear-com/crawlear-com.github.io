import * as React from 'react';
import { Game } from '../../../model/Game';

function UseGameManagementMenu(): Array<any> {
    const [games, setGames] = React.useState<Array<Game>>([]);
    const [judgeGames, setJudgeGames] = React.useState<Array<Game>>([]);
    const [storedGames, setStoredGames] = React.useState<Array<Game>>([]);
    const [allGames, setAllGames] = React.useState<Array<Game>>([])
    const firebase = window.crawlear.fb

    React.useEffect(() => {
        firebase.isUserLogged() && refreshGames()
    }, [])

    React.useEffect(()=>{
        processCurrentGames(allGames)
    }, [allGames])

    function processCurrentGames(games: Array<Game>): void {
        const jGames: Game[] = [],
              uGames: Array<Game> = [],
              sGames: Array<Game> = [];

        games.forEach(game => {
            if (game.gameStatus < 2) {
                if (game.jids.indexOf(window.crawlear.user.uid)>=0 || game.owner.indexOf(window.crawlear.user.uid)>=0) {
                    jGames.push(game)
                } else if (game.uids.indexOf(window.crawlear.user.uid)>=0) {
                    uGames.push(game);
                }
            } else {
                sGames.push(game);
            }
        });

        setGames(uGames);
        setJudgeGames(jGames);
        setStoredGames(sGames);
    }

    function refreshGames(): void {
        firebase.getGamesFromUser(window.crawlear.user.uid, false, (pGames: Array<Game>)=> {
            setAllGames(previousInputs => ([...previousInputs,...pGames]));
        });

        firebase.getGamesFromJudge(window.crawlear.user.uid, false, (jGames: Array<Game>)=> {
            setAllGames(previousInputs => ([...previousInputs,...jGames]));
        });

        firebase.getGamesFromDirector(window.crawlear.user.uid, false, (dGames: Array<Game>)=> {
            setAllGames(previousInputs => ([...previousInputs,...dGames]));
        });
    }

    return [games, (gamePosition: number) => {
        onRemoveGames(games, gamePosition, setGames)
    }, 
    judgeGames, (gamePosition: number) => {
        onRemoveGames(judgeGames, gamePosition, setJudgeGames)
    }, storedGames, (gamePosition: number) => {
        onRemoveGames(storedGames, gamePosition, setStoredGames)
    }]
}

async function onRemoveGames(gameArray: Array<Game>, gamePosition: number, setMethod: Function) {
    const firebase = window.crawlear.fb
    let game = gameArray[gamePosition];
    const newGames = [...gameArray],
        uid = window.crawlear.user.uid;

    if (game.uids.indexOf(uid)>=0) {
        game = await firebase.removeIdFromGame(game, uid, "uids");
    }
    if (game.jids.indexOf(uid)>=0) {
        game = await firebase.removeIdFromGame(game, uid, "jids");
    }
    if (game.owner.indexOf(uid)>=0) {
        game = await firebase.removeIdFromGame(game, uid, "owner");
    }
    if (game.uids.length === 0 && game.jids.length === 0) {
        await firebase.removeGame(game.gid);
    }

    newGames.splice(gamePosition, 1);
    setMethod(newGames);
}

export default UseGameManagementMenu