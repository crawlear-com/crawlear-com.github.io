import { findAllByTestId } from '@testing-library/dom';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../Utils';

function WinnerTable({mode, goToMenu, players, winnerId}) {
    const { t } = useTranslation();
    const finalWinner = findWinner();

    function findWinner() {
        let found = false, i=0;

        while (!found) {
            if (players[i].id === winnerId) found=true;
            else i++;
        }

        return i;
    }

    return <><div className="winnerBox importantNote rounded">
        {t('description.ganador')}: <b>{players[finalWinner].name}<b /></b> <br />
        {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(players[finalWinner].time))} <br />
        {t('description.puntos')}: {players[finalWinner].points}  <br />
        {t('description.handicap')}: {players[finalWinner].handicap}  <br />
        <b>{`${t('description.total')}: ${players[finalWinner].points + players[finalWinner].handicap}`}</b>
    </div>
    <div className="pointsTable rounded rounded1">
        {players.map((player, i) => { 
            return <div className="winnerBox" key={i} value={player.name}>
                    <div className="headerPlayer rounded2 rounded bold">
                        {player.name}
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