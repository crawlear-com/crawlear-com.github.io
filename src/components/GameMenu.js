import * as React from 'react';
import { useTranslation } from 'react-i18next';
import PlayerController from './PlayerController';
import GameTypeController from './GameTypeController';

function GameMenu({game, onPlayerNumerChange, onGameTypeChange, onPointsTypeChange, beginGame}) {
    const { t } = useTranslation();

    return <>
        <PlayerController gameName={game.name} onPlayerNumerChange={(players)=>{
            onPlayerNumerChange(players)}
            }/>
        <GameTypeController 
            selectedGameType={game.gameType}
            selectedPointsType={game.pointsType}
            onGameTypeChange={(selectedIndex) => {
                onGameTypeChange(selectedIndex);
                }} 
            onPointsTypeChange={(selectedIndex) => {
                onPointsTypeChange(selectedIndex);
        }}/>
        <p>
            <button className="importantNote" onClick={() => {
                beginGame(t)
                }}>{t('description.empezar')}</button>
        </p>
    </>
}

export default GameMenu;