import * as React from 'react';
import { useTranslation } from 'react-i18next';
import PlayerController from '../../modules/gameConfigurator/components/PlayerController';
import GameTypeController from '../../modules/gameConfigurator/components/GameTypeController';
import Analytics from '../../Analytics';
import MaxTimeAndPointsPicker from '../../modules/gameConfigurator/components/MaxTimeAndPointsPicker';
import ZonesPicker from '../../modules/gameConfigurator/components/ZonesPicker';
import GateProgressionPicker from '../../modules/gameConfigurator/components/GateProgressionPicker';

function GameMenu({game, beginGame, onPlayerChange}) {
    const { t } = useTranslation();
    const [currentGame, setGame] = React.useState(game);

    function onMaxPointsChange(points) {
        Analytics.event('menu', 'maxPointsSet', points);
        const newGame = {...currentGame};

        newGame.points = points;
        setGame(newGame);
    }

    function onGameTypeChange(selectedIndex) {
        const newState = { ...currentGame };

        Analytics.event('menu', 'playModeChange', selectedIndex);
        newState.gameType = selectedIndex;
        setGame(newState);
    }


    function onPlayerNumerChange(players) {
        const newGame = { ...currentGame };
        let action = 'addPlayer';

        if (currentGame.players.length > players.length) {
            action = 'removePlayer';
        }
        Analytics.event('menu', action, players.length);
        newGame.players = players;
        setGame(newGame);
        onPlayerChange && onPlayerChange();
    }

    function onMaxTimeChange(time) {
        const newGame = {...currentGame}

        newGame.maxTime = time;
        Analytics.event('menu', 'maxTimeSet', time);
        setGame(newGame);
    }

    function onZonesChange(zones) {
        const newGame = {...currentGame};

        if(newGame.zones < zones) {
            newGame.gates.push(10);
        } else {
            newGame.gates.pop();
        }

        newGame.zones = zones;   
        Analytics.event('menu', 'zonesSet', zones);
        setGame(newGame);
    }
    

    function onGatesChange(gates, i) {
        const newGame = {...currentGame}

        newGame.gates[i] = gates;
        Analytics.event('menu', 'gateSet', gates);
        setGame(newGame);
    }

    return <>
        <MaxTimeAndPointsPicker
            mode={currentGame.pointsType} 
            onMaxPointsChange={onMaxPointsChange}
            onMaxTimeChange={onMaxTimeChange}
            time={currentGame.maxTime}
            points={currentGame.maxPoints}
            showTimePicker={true} />
        
        <ZonesPicker
            game={currentGame}
            value={currentGame.zones}
            onZonesChange={onZonesChange}
            onGatesChange={onGatesChange}
            onMaxPointsChange={onMaxPointsChange}
            onMaxTimeChange={onMaxTimeChange} />
        
        <GateProgressionPicker
            zones={currentGame.zones}
            value={10}
            onGatesChange={onGatesChange} />

        <PlayerController gameName={currentGame.name} 
            isForJudge={false}
            onPlayerNumerChange={(players)=>{
                onPlayerNumerChange(players)}
        }/>
        
        <GameTypeController 
            selectedGameType={currentGame.gameType}
            selectedPointsType={currentGame.pointsType}
            onGameTypeChange={(selectedIndex) => {
                onGameTypeChange(selectedIndex);
        }} />
        <p>
            <button className="importantNote" onClick={() => {
                beginGame(currentGame);
            }}>{t('description.empezar')}</button>
        </p>
    </>
}

export default GameMenu;