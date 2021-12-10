import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../Utils';

function WinnerTable({mode, goToMenu, orderedPlayers}) {
    const { t } = useTranslation(),
        finalWinner = 0;
    let winnerOrTieBox = <></>;

    if (orderedPlayers.length>1 && 
        orderedPlayers[0].points + orderedPlayers[0].handicap === orderedPlayers[1].points + orderedPlayers[1].handicap &&
        orderedPlayers[0].time === orderedPlayers[1].time) {
            winnerOrTieBox = <div className="rounded rounded2 importantNote">{t('description.empate')}</div>;
    } else {
        winnerOrTieBox = <><p>{t('description.ganador')}: <b>{orderedPlayers[finalWinner].name}<b /></b> </p>
            {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(orderedPlayers[finalWinner].time))} <br />
            {t('description.puntos')}: {orderedPlayers[finalWinner].points}  <br />
            {t('description.handicap')}: {orderedPlayers[finalWinner].handicap}  <br />
            <b>{t('description.total')}: {orderedPlayers[finalWinner].points + orderedPlayers[finalWinner].handicap}</b></>;
    }

    return <><div className="winnerBox importantNote rounded">
        {winnerOrTieBox}
    </div>
    <div className="pointsTable rounded rounded1">
        {orderedPlayers.map((player, i) => { 
            return <div className="winnerBox" key={i} value={player.name}>
                    <div className="headerPlayer rounded2 rounded bold">
                        {i+1}. {player.name}
                    </div>
                    {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(player.time))}<br />
                    {t('description.puntos')}: {player.points} <br />
                    {t('description.handicap')}: {player.handicap}  <br />
                    <b>{`${t('description.total')}: ${player.points + player.handicap}`}</b>
                </div>
        })}
    </div>
    <button onClick={() => {
        goToMenu()
    }}>{t('description.atras')}</button>
    </>;
}

export default WinnerTable;