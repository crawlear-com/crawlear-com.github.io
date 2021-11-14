import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../Utils';

function WinnerTable({goToMenu, players, winner}) {

    const { t, i18n } = useTranslation();

    return <><div className="winnerBox importantNote rounded">
        {t('description.ganador')}: {players[winner].name} <br />
        {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(players[winner].time))} <br />
        {t('description.puntos')}: {players[winner].points} 
    </div>
    <div className="pointsTable rounded rounded1">
        {players.map((player, i) => { 
            return <div className="winnerBox" key={i} value={player.name}>
                    <div className="headerPlayer rounded2 rounded bold">
                        {player.name}
                    </div>
                    {t('description.tiempo')}: {Utils.printTime(Utils.millisToTime(player.time))}<br />
                    {t('description.puntos')}: {player.points}
                </div>
        })}
    </div>
    <button onClick={() => {
        goToMenu()
    }}>{t('description.atras')}</button>
    </>;
}

export default WinnerTable;