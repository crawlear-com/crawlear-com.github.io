import * as React from 'react'
import { Game } from '../../../games/Game'
import { GAME_STATUS_CREATED, GAME_STATUS_PLAYING } from '../../gamePlayer/hooks/UseGamePlayer'
import WinnerTable from '../../../components/WinnerTable'
import GameProgressionInfoContainer from '../../../components/GameProgressionInfoContainer'
import { itemProps } from '../components/ListItem'
import { isCurrentUserIsOwner } from '../../../games/GameUtils'

function gameListTransformer(games: Array<Game>) {
    const gamesUi: Array<itemProps> = []

    games.forEach((game: Game) => {
        gamesUi.push(itemTransform(game))
    })
}

function itemKey(game: Game) {
    return game.gid
}

function itemTransform(game: Game): itemProps {
    let info: React.JSX.Element = <></>,
        director: string = ''


    if (game.gameStatus === GAME_STATUS_CREATED || game.gameStatus === GAME_STATUS_PLAYING) {
        info = <GameProgressionInfoContainer game={game} />
    } else {
        info = <WinnerTable game={game} />
    }

    if(isCurrentUserIsOwner(game.owner)) {
        director = "(D) "
    }

    return {
        title: `${director}${game.name} - ${game.date}`,
        content: info
    }
}

export { gameListTransformer, itemTransform, itemKey }