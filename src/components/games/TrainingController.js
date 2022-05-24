import * as React from 'react';
import { GameUtils } from '../../model/Game';
import { useTranslation } from 'react-i18next';
import '../../resources/css/games/TrainingController.scss';

function TrainingController({game, onTrainingEnd}) {
    const { t } = useTranslation();
    const numGroups = GameUtils.getMaxGroupNumber(game) + 1;
    const groups = [];
    const zones = [];

    for (let i=0; i<game.zones; i++) {
        zones.push(<span classList='rounded rounded2'>{t('description.zona')} {i+1}</span>);
    }


    for(let i=0; i<numGroups; i++) {
        groups.push(<div className='gameProgressionItem rounded rounded3'>
            <div>{t('description.grupo')} {i+1}
                {zones}
            </div>
        </div>);
    }

    return (<div className='TainingContainer'>
        {t('description.grupos')}: {numGroups}

        {groups}
        
        <button onClick={()=>{
            onTrainingEnd && onTrainingEnd();
        }} className=''>{t('description.atras')}</button>
    </div>);
}



export default TrainingController;