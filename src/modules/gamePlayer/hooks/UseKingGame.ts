import * as React from 'react'
import Analytics from '../../../Analytics'
import { KingGameScores } from '../../../games/KingGameScores'
import { useTranslation } from 'react-i18next'
import { Game, GameUtils } from '../../../games/Game'
import { GameContext } from '../../../context/GameContext'

interface UseGameProps {
    onGameEnd: Function
}

function UseKingGame({ onGameEnd }: UseGameProps) {
    const { t } = useTranslation()
    const { game } = React.useContext(GameContext)
    const [state, setState] = React.useState(()=>{
        KingGameScores.texts = KingGameScores.texts.map(function(text) {
            return t(text);
        });        

        return initControlTestValues(game) 
    });

    React.useEffect(() => {
        Analytics.pageview('/kinggame/');
    },[]);

    function onChangeScore(value: number, control: number, player: number) {
        const newState = {...state};

        const players = newState.game.players,
            zone = players[player].zones[0],
            playerCurrentGate = zone.gateProgressionData[0];

        playerCurrentGate.controlTextValues = [...playerCurrentGate.controlTextValues];
        playerCurrentGate.controlTextValues[control] += value;
        zone.totalPoints += value;
        zone.points += value;
        newState.order = getPlayersOrder(newState.order.findIndex(item => item.id===players[player].id), newState.order);
        setState(newState);
    }

    function gameEnd() {
        onGameEnd && onGameEnd(game);
    }

    return [state, onChangeScore, gameEnd]
}

function initControlTestValues(game: Game) {
    const newState = {
        game: game,
        order: [...game.players]
    }

    GameUtils.init(newState.game, 
        GameUtils.getGameTypeControlTextValuesInit(newState.game.gameType),
        GameUtils.getGameTypeFiascoControlTextValuesInit(newState.game.gameType),
        false);
    for(let i=0; i<newState.game.players.length;i++) {
        
        newState.game.players[i].zones[0].gateProgressionData[0].controlTextValues = new Array(KingGameScores.steps.length).fill(0);
    }

    return newState;
}

function getPlayersOrder(index: number, array: Array<any>) {
    const newArray = [...array];

    newArray.push(newArray.splice(index, 1)[0]);

    return newArray;
}


export default UseKingGame