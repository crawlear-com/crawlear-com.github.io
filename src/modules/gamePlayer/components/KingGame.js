import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ControlTextArray from '../../../components/ControlTextArray';
import TimerControl from './TimerControl'
import { GameUtils } from '../../../games/Game'
import UseKingGame from '../hooks/UseKingGame';
import { KingGameScores } from '../../../games/KingGameScores';

import '../styles/KingGame.scss';

function KingGame({ onGameEnd }) {
    const { t } = useTranslation();
    let result = [];
    const [state, onChangeScore, gameEnd] = UseKingGame({ onGameEnd })
    const game = state.game

    result.push(<TimerControl  
        key="tmC"               
        courtesyTime={0}
        startTime={0}
        label={t('description.tiempo')}
        maxTime={game.maxTime} />);

    result.push(<div key={0}>{t('description.ordenruta')}:</div>);
    for(let i=0;i<game.players.length;i++) {
        let classFiasco= '';

        if (GameUtils.isPointsFiasco(game, state.order[i].zones[0])) {
            classFiasco = 'blink foreColorRed'
        }
        result.push(<div key={i+1}>
                <div className={`controlTextContainerQueue rounded bold ${classFiasco}`}>
                    {state.order[i].name}: {state.order[i].zones[0].totalPoints} ptos
                </div>
            </div>);
    }

    result.push(<p key={game.players.length+1}>{t('description.puntos').toUpperCase()}:</p>);
    for(let i=0;i<game.players.length;i++) {
        let fiasco,
            player = game.players[i],
            zone = player.zones[0];

        result.push(<div key={game.players.length+i+2} className="playerInfo">
                <div className="headerPlayer importantNote rounded2 rounded">
                    <div className="bold">{player.name}</div>
                    {t('description.total')}: { zone.totalPoints }
                    {fiasco}
                </div>
                <div className="controlTextContainer rounded rounded1">
                    {ControlTextArray({
                        controlTextValuesString: 'controlTextValues',
                        steps: KingGameScores.steps,
                        maxValues: KingGameScores.maxValues,
                        texts: KingGameScores.texts,
                        zone: 0,
                        player: i,
                        onValueChange: onChangeScore,
                    })}
                </div>
            </div>);
    }

    result.push(<button key={game.players.length*2+2} className="importantNote" onClick={gameEnd}>{t('description.fin')}</button>);

    return <div key={game.players.length*2+3} className="gameContainer">
        {result}
    </div>;
}

export default KingGame;