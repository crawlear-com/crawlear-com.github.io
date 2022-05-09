import * as React from 'react';
import { useTranslation } from 'react-i18next';
import RepairTimer from './RepairTimer';

import '../resources/css/RepairProgression.scss';

const STATUS_REPAIR = 'repair';

function RepairProgression({gameProgression, game, jidGroup, onRepairTimeFiasco, onRepairEnd}) {
    const { t } = useTranslation();
    const repairs = [];

    function prepareOnRepairEnd(uid, zoneIndex, zone) {
        if (window.confirm(t('content.finalizarreparacion'))) {
            onRepairEnd && onRepairEnd(uid, zoneIndex, zone);
        }
    }

    gameProgression && Object.entries(gameProgression).forEach((group, gIndex) => {
        if (jidGroup === Number(gIndex)) {
            group[1].forEach((player, pIndex) => {
                player.forEach((zone, index) => {
                    if (zone.status === STATUS_REPAIR) {
                        const date = new Date(zone.repairData.setTime).toLocaleTimeString(navigator.language, {
                                hour: '2-digit', 
                                minute:'2-digit'
                            });
        
                        repairs.push(<div key={index+gIndex} className='repairProgressionItem rounded rounded2'>
                            <div className='repairProgressionItemHead'>
                                <img src={game.players[pIndex].avatar} alt="player avatar" />
                                <span className='repairProgressionItemZone'>{t('description.zona')}: {index+1}</span>
                                <span className="gameProgressionItemHour">
                                    {t('description.enreparaciondesde')} {date}
                                </span>
                            </div>
                            <RepairTimer  />
                            <button onClick={()=>{
                                prepareOnRepairEnd(game.players[pIndex].id, index, zone);
                            }} className="importantNote">Finalizar</button>
                        </div>);
                    }
                });    
            });
        }
    });
    return <div className="repairProgressionContainer">
            {repairs.length ? repairs : t('description.nohayreparaciones')}
        </div>;
}

export default RepairProgression;