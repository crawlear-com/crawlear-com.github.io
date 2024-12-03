import * as React from 'react'
import { GameProgressionData } from "../../../games/GameInterfaces";
import { useTranslation } from 'react-i18next';

interface CompletedZonesByGroupProps {
    numZones: number,
    gameProgression: GameProgressionData
}

function CompletedZonesByGroup({ numZones, gameProgression }: CompletedZonesByGroupProps) {
    const { t } = useTranslation(['main']);
    const res = []

    for(let i=0; i<numZones; i++) {
        let groupDone: Array<React.JSX.Element> = [];

        Object.entries(gameProgression).forEach((group, gIndex)=>{
            let playersIngroupDone = 0;

            Object.entries(group[1]).forEach((player:Array<any>, pIndex)=>{
                if (player[1] && player[1][i] && player[1][i].status === 'done' && player[1][i].data) {
                    playersIngroupDone++;
                }
            });

            if (playersIngroupDone === Object.entries(group[1]).length) {
                groupDone.push(<span key={`dG${i}`} className='directorGroup'>{t('description.grupo')} {gIndex +1}</span>);
            }
        });

        res.push(<div key={`dZ${i}`} className='directorZone horizontalScrolling'>
            {t('description.zona')} {i+1}: {groupDone}

        </div>);
    }

    return <>{ [res] }</>
}

export default CompletedZonesByGroup