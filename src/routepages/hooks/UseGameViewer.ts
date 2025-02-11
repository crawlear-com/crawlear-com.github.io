import * as React from 'react'
import { Game } from '../../games/Game'

function UseGameViewer(gid: string) {
    const fbBase = window.crawlear.fbBase
    const [game, setGame] = React.useState<any>({})

    React.useEffect(() => {
        gid && gid.length > 0 && fbBase.getGame(gid, (newGame: Game) => {
            if (newGame.isPublic) {
                setGame(newGame)
            }
        })
    }, [fbBase, gid])

    return [game]
}

export default UseGameViewer