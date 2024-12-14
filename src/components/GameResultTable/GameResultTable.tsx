import * as React from 'react';
import GameResultTableHeader from './GameResultTableHeader';
import GameResultTablePlayerHeader from './GameResultTablePlayerHeader';
import GameResultTablePointsRow from './GameResultTablePointsRow';
import GameResultTableZonePointsRow from './GameResultTableZonePointsRow'
import { getGamePlayerResultIcon } from '../../modules/gamePlayer/GamePlayerUtils';
import type { Game } from '../../games/Game';

interface GameResultTableProps {
    game: Game,
    isDraw: boolean
}

function GameResultTable({ game, isDraw }: GameResultTableProps) {
    const players = [];
    let j=0, i=0;

    players.push(<GameResultTableHeader key={game.name}></GameResultTableHeader>);
    game.players.forEach((player)=>{
        players.push(<GameResultTablePlayerHeader
            key={player.name}
            playerName={player.name}
            gameType={game.gameType}
            isDraw={isDraw}
            playerTotalPoint={ player.totalPoints || 0 }
            playerTotalTime={ player.totalTime || 0}
            position={j} />);

        player.zones.forEach((zone, zoneIndex)=>{
            let icon = getGamePlayerResultIcon(game, zone);

            players.push(<GameResultTablePointsRow
                            key={`${player.name}${zoneIndex}P`}
                            icon={icon}
                            zone={zone}
                            numZone={i % player.zones.length +1}
                            gameType={game.gameType}
                            zonesLength={player.zones.length} />);
            players.push(<GameResultTableZonePointsRow
                            key={`${player.name}${zoneIndex}Z`}
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