import * as React from 'react';
import { GameUtils } from '../../model/Game.ts';
import { useTranslation } from 'react-i18next';
import Utils from '../../Utils';
import TimerControl from '../TimerControl';

import '../../resources/css/games/TrainingController.scss';

function TrainingController({game, onTrainingEnd}) {
    const { t } = useTranslation();
    let numGroups = GameUtils.getMaxGroupNumber(game) + 1;
    const zones = [];
    let groups = [];

    /*
    const jidGroup = Utils.getGroupFromJid(game, window.crawlear.user.uid);

    for(let i=0; i<numGroups; i++) {
        if(i === jidGroup || GameUtils.isCurrentUserIsOwner(game.owner)) {
            groups.push(<div key={i}>
                <div>{t('description.grupo')} {i+1}:</div>
                    <TimerControl 
                    courtesyTime={0}
                    maxTime={900000} />
            </div>);
        }
    }

    for (let i=0; i<game.zones; i++) {
        zones.push(<div key={i+game.zones} className='controlTextContainer rounded rounded3'>
            <div>{t('description.zona')} {i+1}:</div>
            {groups}
        </div>);
    } */

    const zoneNum = 8; //game.zones;
    numGroups = 4;

    let group=0;
    let done = new Array(numGroups).fill(new Array(zoneNum).fill(false));



    groups.push(<td>hora</td>);
    for(let j=0; j<zoneNum; j++) {
        groups.push(<td>zona {j}</td>);
    }

    zones.push(<tr>
        {groups}
    </tr>)
    
    groups = [];
    for (let i=0; i<numGroups; i++) {
        groups.push(<td>10:00</td>);
        for(let j=0; j<Math.min(zoneNum, numGroups); j++) {
            if (!done[i][j]) {
                groups.push(<td>grupo {group}</td>);
                group=(group+1) % numGroups;
                done[i][j] = true;
            } else {
                
            }
        }

        zones.push(<tr>
            {groups}
        </tr>)
        groups = [];
    }

  
    return (<div className='TainingContainer'>
        {t('description.grupos')}: {numGroups}
        {t('description.zonas')}: {game.zones}
        <table>
            {zones}
        </table>
        
        <button onClick={()=>{
            onTrainingEnd && onTrainingEnd();
        }} className=''>{t('description.atras')}</button>
    </div>);
}

export default TrainingController;