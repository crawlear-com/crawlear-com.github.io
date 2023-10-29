import * as React from 'react'
import { Game } from "../../games/Game"

interface WinnerOrTieBoxProps {
    game: Game
}

const WinnerOrTieBox = ({ game }: WinnerOrTieBoxProps) => {
    return <div>winnerOrTieBox</div>
}

export default WinnerOrTieBox
export const isDraw = jest.fn()