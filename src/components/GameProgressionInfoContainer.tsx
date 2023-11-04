import * as React from 'react'
import { Game } from '../games/Game'
import GameProgressionInfo from './GameProgressionInfo'

interface GameProgressionInfoContainerProps {
    game: Game,
    inGameProgression?: any
}

function GameProgressionInfoContainer({ game, inGameProgression }: GameProgressionInfoContainerProps) {
    const [gameProgression, setGameProgression] = React.useState(inGameProgression)
    const fb = window.crawlear.fb
    let info

    React.useEffect(() => {
        if(!gameProgression) {
            fb.getGameProgressionOnce(game.gid, (uid: string, progression: any)=>{
                setGameProgression({...progression})
            }, ()=>{ })
        }
    }, [])

    if (gameProgression) {
        info = <GameProgressionInfo game={game} gameProgression={gameProgression} />
    } else {
        info = <>No game Progression</>
    }

    return info
}

export default GameProgressionInfoContainer