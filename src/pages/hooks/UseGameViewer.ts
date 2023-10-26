import * as React from 'react'
import { Game } from '../../games/Game'
import Analytics from '../../Analytics'

function UseGameViewer(gid: string) {
    const firebase = window.crawlear.fb
    const [game, setGame] = React.useState<any>({})

    React.useEffect(()=>{
        Analytics.pageview(`/gameviewer?gid=${gid}`);
        firebase.getGame(gid, (newGame: Game) => { 
            if (newGame.isPublic) {
                setGame(newGame) 
            }
        })
    }, [])

    return [game]
}

export default UseGameViewer