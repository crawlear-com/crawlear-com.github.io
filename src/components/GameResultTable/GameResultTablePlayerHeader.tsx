import * as React from 'react'
import Utils from '../../Utils';

import winnerIcon from '../../resources/img/iconWinner.png';

const INITIAL_TIME = "00:00:000"

interface GameResultTablePlayerHeaderProps {
    playerName: string,
    gameType: number,
    isDraw: boolean,
    playerTotalPoint: number,
    playerTotalTime: number,
    position: number
}

function GameResultTablePlayerHeader({ playerName, gameType, isDraw, playerTotalPoint, playerTotalTime, position }: GameResultTablePlayerHeaderProps) {
    return (<tr>
        { isDraw ? <td></td> : <td className="bold gameListPosition">{
                position===0?<img src={winnerIcon} alt="winner" />:position+1
            }</td> }
        { gameType === 1 ?
            <td className="bold gameListPlayerName gameListPoints bold textOverflow">{playerName}</td> :
            <td className="bold gameListPlayerName gameListPoints bold withTime textOverflow">{playerName}</td> }
        <td className="bold gameListPoints">{playerTotalPoint}</td>
        <td className="gameListPoints">.</td>
        <td className="gameListPoints">.</td>
        <td className="gameListPoints">.</td>
        { gameType !== 1 ? <td className="bold gameListPoints gameListTime">
            { playerTotalTime ? Utils.printTime(Utils.millisToTime(playerTotalTime)) : <>{ INITIAL_TIME }</> }
        </td> : <></> }
    </tr>)
}

export default GameResultTablePlayerHeader