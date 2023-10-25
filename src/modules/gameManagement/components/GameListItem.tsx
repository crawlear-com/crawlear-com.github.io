import * as React from 'react'
import GameProgressionInfo from '../../../components/GameProgressionInfo'
import { Game, GameUtils } from '../../../games/Game'
import WinnerTable from '../../../components/WinnerTable'
import { useTranslation } from 'react-i18next'
import Sharers from '../../social/components/embed/Sharers'
import { GAME_STATUS_CREATED, GAME_STATUS_PLAYING } from '../../gamePlayer/hooks/UseGamePlayer'

import '../styles/GameListItem.scss'

interface GameListItemProps {
    game: Game,
    gamePosition: any,
    onGamePlay: React.MouseEventHandler<HTMLButtonElement>,
    readOnly: boolean
}

function GameListItem({ game, gamePosition, onGamePlay, readOnly }: GameListItemProps) {
    const [gameProgression, setGameProgression] = React.useState(null)
    const firebase = window.crawlear.fb
    const { t } = useTranslation()
    let info: React.JSX.Element, 
        director: string = ''

    if((game.gameStatus === GAME_STATUS_CREATED || game.gameStatus === GAME_STATUS_PLAYING) && gameProgression) {
        info = <GameProgressionInfo
            game={game}
            gameProgression={gameProgression} />
        if ((game.jids.find(element=>window.crawlear.user.uid===element) || GameUtils.isCurrentUserIsOwner(game.owner)) && !readOnly) {
            info = <><button className="importantNote playGameButton" data-gameposition={gamePosition} onClick={onGamePlay}></button>{info}</>
        }
    } else {
        info =<>
                <WinnerTable game={game} />
                <Sharers url={`gameviewer?gid=${game.gid}`} text={` - ${t('description.resolverjuego')} ${game.name}`} headerText={t('description.compartir')}  />
            </>
    }

    if(GameUtils.isCurrentUserIsOwner(game.owner)) {
        director = "(D) "
    }

    function openCloseGame(event: React.MouseEvent<HTMLSpanElement>) {
        const targetParent = (event.target as HTMLSpanElement).parentElement
  
        if(targetParent) {
            targetParent.classList.toggle('closed')
            if(!targetParent.classList.contains('closed') && !gameProgression) {
                firebase.getGameProgressionOnce(game.gid, (uid: string, progression: any)=>{
                    setGameProgression({...progression})
                }, ()=>{ })
            }
        }
    }

    return <div key={gamePosition} className="gameContainer rounded rounded1 closed">
                <span onClick={openCloseGame} className="textOverflow gameName bold">{director}{game.name} - {game.date}</span>
                {info}
            </div>
}

export default GameListItem