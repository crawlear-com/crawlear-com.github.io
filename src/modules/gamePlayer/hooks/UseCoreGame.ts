import * as React from 'react'
import EventManager from '../../../EventManager'
import { Game, GameUtils } from '../../../games/Game'
import { MSG_GATES, MSG_POINTS } from '../Bluetooth'
import Analytics from '../../../Analytics'
import { GameContext } from '../../../context/GameContext'

function UseCoreGame(onGameEnd: Function,
        onRepair: Function,
        playerIndex: number,
        zoneIndex: number) {
    const eventManager = new EventManager();
    const { game, gameExtras } = React.useContext(GameContext);
    const [state, setState] = React.useState(()=>{
        window.scrollTo(0,0);
        return initControlTestValues(game, false);
    });
    const currentGame = state.game,
        player = currentGame.players[playerIndex],
        playerZone = player.zones[zoneIndex];

/*
    React.useEffect(() => {
        const playerZone = state.game.players[playerIndex].zones[zoneIndex];
        setState({
            ...state,
            tickTime: playerZone.time,
            forceAction: 'play'
        });

        document.body.classList.add(GameUtils.getGameTypeBodyClassName(game.gameType));
    }, [game.gameType, playerIndex, state, zoneIndex]);
*/
    function onTimerChange(millis: number) {
        const newState = {...state};

        if (!millis) {
            const currentGame = newState.game,
                players = currentGame.players,
                playerZone = players[playerIndex].zones[zoneIndex];

            playerZone.simpathyPoints = 0;
            gameExtras.onTimerChange(playerZone);
        }
        playerZone.time = millis;

        setState({
            ...newState,
            tickTime: millis,
            forceAction: 'play'
        });
    }

    function onChangeScore(value: number, control: number) {
        const newState = {...state},
            currentGame = newState.game,
            players = currentGame.players,
            playerZone = players[playerIndex].zones[zoneIndex],
            playerCurrentGate = playerZone.gateProgressionData[playerZone.gateProgression];

        const pointsFiasco = ()=>{return currentGame.maxPoints <= playerZone.points && currentGame.maxPoints > 0};
        const timeFiasco = ()=>{return currentGame.maxTime <= state.tickTime && currentGame.maxTime > 0};

        if ((!pointsFiasco() && !timeFiasco()) ||
           (playerZone.points + value <= currentGame.maxPoints &&
            playerZone.fiascoControlTextValues.filter(x => x > 0).length === 0)) {
                playerCurrentGate.controlTextValues = [...playerCurrentGate.controlTextValues];
                playerCurrentGate.controlTextValues[control] += value;
                playerZone.points += value;

                if (playerZone.gateProgression<currentGame.gates[zoneIndex]) {
                    playerCurrentGate.gatePoints += value;
                }
                eventManager.sendMessage(MSG_POINTS, playerZone.points);
                gameExtras.onChangeScore(playerZone);
                setState(newState);

                if (GameUtils.isFiasco(newState.game, playerIndex, zoneIndex)) {
                    setState({
                        ...state,
                        forceAction: 'pause'
                    });
                }
        }
    }

    function onReset() {
        let newState = {...state };

        window.scrollTo(0,0);
        Analytics.event('play', 'reset', newState.game.players[playerIndex].name);
        newState = initControlTestValues(newState.game, true);

        newState.forceAction = 'stop';
        setState(previousInputs => ({ ...previousInputs,...newState}));
    }

    function onEndPlayer() {
        const newState = {...state},
            currentGame = newState.game,
            players = currentGame.players;

        window.scrollTo(0,0);
        gameExtras.onEndPlayer(currentGame, state.tickTime, playerIndex, zoneIndex);
        newState.forceAction = 'stop';
        setState(newState);

        Analytics.event('play', 'endPlayer', players[playerIndex].name);
        document.body.classList.remove(GameUtils.getGameTypeBodyClassName(game.gameType))
        onGameEnd(newState.game);
    }

    function onGateProgressionChange(value: number) {
        const newState = {...state},
            zones = newState.game.players[playerIndex].zones,
            currentZone = zones[zoneIndex];

        currentZone.gateProgression = value;
        eventManager.sendMessage(MSG_GATES, currentZone.gateProgression);
        if (value === newState.game.gates[zoneIndex]) {
            newState.forceAction = 'pause';
        }
        gameExtras.onGateProgressionChange(currentZone);
        setState(newState);
    }

    function onFiascoChangeScore(value: number, control: number) {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.fiascoControlTextValues = [...playerZone.fiascoControlTextValues];
        playerZone.fiascoControlTextValues[control] += value;
        playerZone.fiascoControlTextValues[control] > 0 && (newState.forceAction = 'pause');
        gameExtras.onFiascoChangeScore();
        setState(newState);
    }

    function onPointBecauseLastMinute() {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.simpathyPoints++;
        gameExtras.onPointBecauseLastMinute(playerZone);
        setState(newState)
    }

    function onTimeFiasco() {
        const newState = {...state}

        setState({
            ...newState,
            tickTime: game.maxTime + game.courtesyTime,
            forceAction: 'pause'
        })
    }

    function setRepairStatus() {
        const newState = {...state},
            players = newState.game.players,
            playerZone = players[playerIndex].zones[zoneIndex];

        playerZone.time = state.tickTime;
        newState.forceAction = 'stop';
        setState(newState);

        onRepair && onRepair(playerIndex, zoneIndex);
    }

    return [state, onTimerChange, onChangeScore, onReset, onEndPlayer, onGateProgressionChange, 
        onFiascoChangeScore, onPointBecauseLastMinute, onTimeFiasco, setRepairStatus]
}

function initControlTestValues(game: Game, reset: boolean) {
    const newState = {
        tickTime: 0,
        forceAction: '',
        game: game
    }

    GameUtils.init(newState.game,
        GameUtils.getGameTypeControlTextValuesInit(newState.game.gameType),
        GameUtils.getGameTypeFiascoControlTextValuesInit(newState.game.gameType),
        reset);

    return newState;
}

export default UseCoreGame