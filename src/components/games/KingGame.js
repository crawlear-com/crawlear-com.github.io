import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from '../ControlTextArray';
import Analytics from '../../Analytics';
import Utils from '../../Utils';
import KingGameScores from './KingGameScores';

import '../../resources/css/games/KingGame.scss';

function KingGame({game, onGameEnd}) {
    const { t } = useTranslation();
    const [state, setState] = React.useState(()=>{ 
        KingGameScores.texts = KingGameScores.texts.map(function(text) {
            return t(text);
        });        

        return initControlTestValues(game) 
    });

    React.useEffect(() => {
        Analytics.pageview('/kinggame/');
    },[]);

    function onBatteryDirectFiasco(player, value) {
        const newState = {...state},
            players = newState.game.players;

        players[player].zones[0].battery = value;
        setState(newState);
    }

    function onChangeScore(value, player, control) {
        const newState = {...state};

        const players = newState.game.players,
            zone = players[player].zones[0];

        zone.controlTextValues = [...zone.controlTextValues];
        zone.controlTextValues[control] += value;
        zone.points += value;    
        newState.order = getPlayersOrder(newState.order.findIndex(item => item.id===players[player].id), newState.order);
        setState(newState);
    }

    function gameEnd() {
        onGameEnd && onGameEnd(Utils.calulateFinalGameResult(game));
    }

    let result = [];

    result.push(<div key={0}>{t('description.ordenruta')}:</div>);
    for(let i=0;i<state.game.players.length;i++) {
        result.push(<div key={i+1}>
                <div className="controlTextContainerQueue rounded bold">
                    {state.order[i].name}: {state.order[i].points} ptos
                </div>
            </div>);
    }

    result.push(<p key={state.game.players.length+1}>{t('description.puntos').toUpperCase()}:</p>);
    for(let i=0;i<state.game.players.length;i++) {
        let fiasco,
            player = state.game.players[i],
            zone = player.zones[0];

        result.push(<div key={state.game.players.length+i+2} className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{player.name}</div>
                    {t('description.total')}: { zone.points }
                    {fiasco}
                </div>
                <div className="controlTextContainer rounded rounded1">
                    {ControlTextArray({
                        controlTextValues: zone.controlTextValues, 
                        player: i,
                        steps: KingGameScores.steps,
                        maxValues: KingGameScores.maxValues,
                        texts: KingGameScores.texts,
                        onDirectFiasco: onBatteryDirectFiasco,
                        booleanValue: zone.battery,
                        onValueChange: onChangeScore
                    })}
                </div>
            </div>);
    }

    result.push(<button key={state.game.players.length*2+2} className="importantNote" onClick={gameEnd}>{t('description.fin')}</button>);

    return <div key={state.game.players.length*2+3} className="gameContainer">
        {result}
    </div>;
}

function initControlTestValues(game) {
    const newState = {
        game: game,
        order: [...game.players]
    }

    for(let i=0; i<newState.game.players.length;i++) {
        newState.game.players[i].zones = [{
            battery: false,
            points: 0,
            time: 0,
            controlTextValues: new Array(7)
        }];
        for(let j=0; j<newState.game.players[i].zones[0].controlTextValues.length; j++) {
            newState.game.players[i].zones[0].controlTextValues[j] = 0;
        }
    }

    return newState;
}

function getPlayersOrder(index, array) {
    const newArray = [...array];

    newArray.push(newArray.splice(index, 1)[0]);

    return newArray;
}

export default KingGame;