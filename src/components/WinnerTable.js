import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameResultTable from './GameResultTable';
import ControlTextArrayVisualization from './ControlTextArrayVisulization';
import Utils from '../Utils';
import icoWinner from '../resources/img/iconWinner.png';
import icoFiasco from '../resources/img/iconFiasco.png';

function WinnerTable({ game }) {
    const { t } = useTranslation(),
        finalWinner = 0;
    let draw = false, 
        winnerOrTieBox = <></>;

    if (game.players.length>1 && 
        game.players[0].points + game.players[0].handicap === game.players[1].points + game.players[1].handicap &&
        game.players[0].time === game.players[1].time) {
            draw = true;
            winnerOrTieBox = <div className="rounded rounded2 importantNote">{t('description.empate')}</div>;
    } else {
        winnerOrTieBox = <><p>{t('description.ganador')}: <b>{game.players[finalWinner].name}<b /></b> </p></>;
    }

    return <div className='gameContainer'>
        <div className="winnerBox importantNote rounded">
            {winnerOrTieBox}
        </div>

        <GameResultTable game={game} isDraw={draw} />
        
        <div className="pointsTable rounded rounded1">
            {game.players.map((player, i) => { 
                let fiasco = <></>;

                if ((game.maxPoints <= (player.points+player.handicap) && game.maxPoints > 0) || 
                    (game.maxTime <= player.time && game.maxTime > 0)) {
                        fiasco = <div className="importantNote rounded">
                            <img src={icoFiasco} alt="fiasco icon" />FiASCO!</div>
                }

                return <div className="winnerBox" key={i} value={player.name}>
                        <div className="headerPlayer rounded2 rounded bold">
                            {!draw && i===0 ? <><img src={icoWinner} alt="winner icon" /> {i+1}.</>: (!draw ? i+1 + "." : <></>)} {player.name}
                        </div>
                        {fiasco}
                        {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(player.time))}<br />
                        {t('description.puntos')}: {player.points} <br />
                        {t('description.handicap')}: {player.handicap}  <br />
                        <b>{`${t('description.total')}: ${player.points + player.handicap}`}</b>
                        <div> 
                            <ControlTextArrayVisualization controlTextValues={player.controlTextValues} pointsMode={game.pointsType} />
                        </div>
                    </div>
            })}
        </div>
    </div>;
}

export default WinnerTable;