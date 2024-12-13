import * as React from 'react';
import { GameResultTableHeader } from './GameResultTableHeader';
import { GameResultTablePlayerHeader } from './GameResultTablePlayerHeader';
import { GameResultTablePointsRow } from './GameResultTablePointsRow';
import { GameResultTableZonePointsRow } from './GameResultTableZonePointsRow'
import { getGamePlayerResultIcon } from '../../modules/gamePlayer/GamePlayerUtils';

function GameResultTable({game, isDraw}) {
    const players = [];
    let j=0, i=0;

    players.push(<GameResultTableHeader></GameResultTableHeader>);
    game.players.forEach((player)=>{
        players.push(<GameResultTablePlayerHeader
            playerName={player.name}
            gameType={game.gameType}
            isDraw={isDraw}
            playerTotalPoint={player.totalPoints}
            playerTotalTime={player.totalTime}
            position={j} />);

        player.zones.forEach((zone)=>{
            let icon = getGamePlayerResultIcon();

            players.push(<GameResultTablePointsRow
                            icon={icon}
                            zone={zone}
                            numZone={i % player.zones.length +1}
                            gameType={game.gameType}
                            zonesLength={player.zones.length} />);
            players.push(<GameResultTableZonePointsRow
                            zone={zone}
                            gameType={game.gameType} />);
            i++;
        });
        j++;
    })

    return <div className="gameParticipants">
        <table>
            <tbody>
                { players }
            </tbody>
        </table>
    </div>;
}

export default GameResultTable;