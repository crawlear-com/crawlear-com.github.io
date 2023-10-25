import * as React from 'react'
import { Game } from '../../games/Game'

function UseGameViewer(gid: string) {
    const firebase = window.crawlear.fb
    const [game, setGame] = React.useState<any>({})
    const [gameProgression, setGameProgression] = React.useState({})

    React.useEffect(()=>{
        firebase.getGame(gid, (newGame: Game) => { 
            if (newGame.isPublic) {
                setGame(newGame) 
            }
        })
    }, [])

    React.useEffect(()=>{
        if (game.gid) {
            firebase.getGameProgression(game.gid, () => {}, () => {}, (group: number, progression: any)=>{
                const res = []
    
                res[group] = progression
                setGameProgression({ ...gameProgression, ...res })
            }, () => { })
        }
    },[game])

    return [game, gameProgression]
}

export default UseGameViewer