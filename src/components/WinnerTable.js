import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameResultTable from './GameResultTable';
import GameHeaderInfo from './GameHeaderInfo';

import '../resources/css/WinnerTable.scss';

function WinnerTable({ game }) {
    const { t } = useTranslation(),
        finalWinner = 0;
    let draw = false, 
        winnerOrTieBox = <></>;

    if (game.players) {
        if (game.players.length>1 && 
            game.players[0].totalPoints === game.players[1].totalPoints &&
            game.players[0].totalTime === game.players[1].totalTime && 
            (!game.players[0].totalGateProgression || game.players[0].totalGateProgression === game.players[1].totalGateProgression)) {
                draw = true;
                winnerOrTieBox = <div className="">{t('description.empate')}</div>;
        } else {
            winnerOrTieBox = <>{t('description.ganador')}: <b>{game.players[finalWinner].name}</b></>;
        }
    
        return <div className='gameContainer'>
            <div className="winnerBox importantNote rounded">
                {winnerOrTieBox}
            </div>
    
            <div className="gameList rounded rounded2">
                <GameHeaderInfo game={game} />
                <GameResultTable game={game} isDraw={draw} />
                </div>
        </div>            
    } else {
        return <>{t('description.juegonopublico')}</>
    }
}

export default WinnerTable;