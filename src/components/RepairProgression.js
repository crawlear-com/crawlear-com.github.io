import * as React from 'react';
import { useTranslation } from 'react-i18next';
import RepairTimer from './RepairTimer';

import '../resources/css/RepairProgression.scss';

const STATUS_REPAIR = 'repair';

function RepairProgression({gameProgression, game, onRepairEnd}) {
    const { t } = useTranslation();
    const repairs = [];

    function prepareOnRepairEnd(playerId, group, zoneIndex, zone) {
        if (window.confirm(t('content.finalizarreparacion'))) {
            onRepairEnd && onRepairEnd(playerId, group, zoneIndex, zone);
        }
    }

    gameProgression && Object.entries(gameProgression).forEach((group, gIndex) => {
        Object.entries(group[1]).forEach((player, pIndex) => {
            Object.entries(player[1]).forEach((zone, index) => {
                if (zone[1].status === STATUS_REPAIR) {
                    const date = new Date(zone[1].repairData.setTime).toLocaleTimeString(navigator.language, {
                            hour: '2-digit', 
                            minute:'2-digit'
                        });
    
                    repairs.push(<div key={index+gIndex} className='repairProgressionItem rounded rounded2'>
                        <div className='repairProgressionItemHead'>
                            <img src={game.players[player[0]].avatar} alt="player avatar" />
                            <span className='repairProgressionItemZone'>{t('description.zona')}: {index+1}</span>
                            <span className="gameProgressionItemHour">
                                {t('description.enreparaciondesde')} {date}
                            </span>
                        </div>
                        <RepairTimer  />
                        <button onClick={()=>{
                            prepareOnRepairEnd(game.players[[player[0]]].id, group[0], index, zone[1]);
                        }} className="importantNote">{t('description.fin')}</button>
                    </div>);
                }
            });    
        });
    });
    return <div className="repairProgressionContainer">
            {repairs.length ? repairs : t('description.nohayreparaciones')}
        </div>;
}

export default RepairProgression;