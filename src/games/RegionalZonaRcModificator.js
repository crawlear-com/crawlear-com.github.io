import * as React from 'react';
import PlayerHandicap from '../components/PlayerHandicap';
import { gameExtras } from './RegionalZonaRcGameScores';
import { GameContext } from '../context/GameContext';

function RegionalZonaRcModificator({player, zone}) {
    const { game, setGame } = React.useContext(GameContext);
    const [handicap, setHandicap] = React.useState(0);

    if(!game || !game.players.length) return <></>;

    function onHandicapChange(value) {
        const newGame = {...game};
        const playerZone = newGame.players[player].zones[zone];

        setHandicap(value);
        playerZone.handicap = value;
        gameExtras.onHandicapChange && gameExtras.onHandicapChange(playerZone);
        setGame(newGame);
    }

    return <PlayerHandicap handicap={handicap}
                onHandicapChange={onHandicapChange} />;
}

export default RegionalZonaRcModificator;