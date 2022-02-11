import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameResultTable from './GameResultTable';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';

import '../resources/css/WinnerTable.scss';

import icoWinner from '../resources/img/iconWinner.png';
import icoFiasco from '../resources/img/iconFiasco.png';
import icoBattery from '../resources/img/iconBattery.png';

function WinnerTable({ game }) {
    const { t } = useTranslation(),
        finalWinner = 0;
    let draw = false, 
        winnerOrTieBox = <></>;

    if (game.players.length>1 && 
        game.players[0].totalPoints === game.players[1].totalPoints &&
        game.players[0].totalTime === game.players[1].totalTime) {
            draw = true;
            winnerOrTieBox = <div className="rounded rounded2 importantNote">{t('description.empate')}</div>;
    } else {
        winnerOrTieBox = <><p>{t('description.ganador')}: <b>{game.players[finalWinner].name}<b /></b> </p></>;
    }
    //<ControlTextArrayVisualization controlTextValues={player.controlTextValues} />
    return <div className='gameContainer'>
        <div className="winnerBox importantNote rounded">
            {winnerOrTieBox}
        </div>

        <GameResultTable game={game} isDraw={draw} />
    </div>        
}

export default WinnerTable;