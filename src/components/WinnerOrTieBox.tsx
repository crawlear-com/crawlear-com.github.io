import * as React from 'react'
import { Game } from '../games/Game'
import { useTranslation } from 'react-i18next'

interface WinnerOrTieBoxProps {
    game: Game
}

function WinnerOrTieBox({ game}: WinnerOrTieBoxProps) {
    const { t } = useTranslation()

    if (isDraw(game)) {
            return <div className="">{t('description.empate')}</div>
    } else {
        return <>{t('description.ganador')}: <b>{game.players[0].name}</b></>
    }
}

export function isDraw(game: Game) {
    return (game.players.length>1 && 
        game.players[0].totalPoints === game.players[1].totalPoints &&
        game.players[0].totalTime === game.players[1].totalTime && 
        (!game.players[0].totalGateProgression || game.players[0].totalGateProgression === game.players[1].totalGateProgression))
}
export default WinnerOrTieBox