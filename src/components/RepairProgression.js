import * as React from 'react';
import { useTranslation } from 'react-i18next';
import RepairTimer from './RepairTimer';

import '../resources/css/RepairProgression.scss';

const STATUS_REPAIR = 'repair';
const STATUS_WAITING = 'waiting';
const STATUS_DONE = 'done';

function RepairProgression({gameProgression, game, onTimeFiasco}) {
    const { t } = useTranslation();
    const fb = window.crawlear.fb;
    const repairs = [];

    function onRepairTimeFiasco(uid, zoneIndex, zone) {
        const progressionData = zone.data;

        progressionData.fiascoControlTextValues[1] = 1;
        zone.status = STATUS_DONE;
        delete zone.repairData;
        fb.setGameProgression(game.gid, uid, zoneIndex, zone);
        
        onTimeFiasco && onTimeFiasco();
    }

    function onRepairEnd(uid, zoneIndex, zone) {
        zone.status = STATUS_WAITING;
        delete zone.repairData;
        fb.setGameProgression(game.gid, uid, zoneIndex, zone);
    }

    gameProgression && Object.entries(gameProgression).forEach(entry => {
        const [key, player] = entry;

        player.forEach((zone, index) => {
            if (zone.status === STATUS_REPAIR) {
                const date = new Date(zone.repairData.setTime).toLocaleTimeString(navigator.language, {
                        hour: '2-digit', 
                        minute:'2-digit'
                    });

                repairs.push(<div key={index+key} className='repairProgressionItem rounded rounded2'>
                    <div className='repairProgressionItemHead'>
                        <img src={game.players[key].avatar} alt="player avatar" />
                        <span className='repairProgressionItemZone'>{t('description.zona')}: {index+1}</span>
                        <span className="gameProgressionItemHour">
                            {t('description.enreparaciondesde')} {date}
                        </span>
                    </div>
                    <RepairTimer  />
                    <button onClick={()=>{
                        onRepairEnd(game.players[key].id, index, zone);
                    }} className="importantNote">Finalizar</button>
                    <button onClick={()=>{
                        onRepairTimeFiasco(game.players[key].id, index, zone);
                    }} className="importantNote">Fiasco</button>
                </div>);
            }
        });
    });
    return <div className="repairProgressionContainer">
            {repairs.length ? repairs : t('description.nohayreparaciones')}
        </div>;
}

export default RepairProgression; 