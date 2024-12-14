import * as React from 'react'
import type { Game } from '../../../games/Game'

interface GameResultTableProps {
    game: Game,
    isDraw: boolean
}

const GameResultTable = ({ game, isDraw }: GameResultTableProps) => {
    return <div>GameResultTable</div>
}

export default GameResultTable