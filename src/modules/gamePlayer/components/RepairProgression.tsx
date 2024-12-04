import * as React from 'react';
import { useTranslation } from 'react-i18next';
import RepairProgressionItem from './RepairProgressionItem';

import '../styles/RepairProgression.scss';
import { GameProgressionData, Player } from '../../../games/GameInterfaces';

const STATUS_REPAIR = 'repair';

interface RepairProgressionProps {
    gameProgression: GameProgressionData,
    gid: string,
    players: Array<Player>,
    onRepairEnd: Function
}

function RepairProgression({gameProgression, gid, players, onRepairEnd}: RepairProgressionProps) {
    const { t } = useTranslation(['main']);
    const repairs:Array<React.JSX.Element> = [];

    gameProgression && Object.entries(gameProgression).forEach((group) => {
        Object.entries(group[1]).forEach((player: Array<any>) => {
            Object.entries(player[1]).forEach((zone: Array<any>, index) => {
                if (zone[1].status === STATUS_REPAIR) {
                    const playerData = players[player[0]]

                    repairs.push(<RepairProgressionItem key={playerData.name} setTime={zone[1].repairData.setTime}
                        gid={gid} playerId={playerData.id}
                        group={Number(group[0])} zoneIndex={index} zone={zone[1]} onRepairEnd={onRepairEnd}
                        playerAvatar={playerData.avatar} />)
                }
            });
        });
    });
    return <div className="repairProgressionContainer">
            {repairs.length ? repairs : t('description.nohayreparaciones')}
        </div>;
}

export default RepairProgression;