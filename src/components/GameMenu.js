import * as React from 'react';
import { useTranslation } from 'react-i18next';
import PlayerController from './PlayerController';
import GameTypeController from './GameTypeController';
import MainPageTextContent from './MainPageTextContent';


function GameMenu({onPlayerNumerChange, onGameTypeChange, onPointsTypeChange, beginGame,
    alertBoxRef, gameSelected, pointsTypeSelected}) {
    const { t } = useTranslation();

    return <>
        <MainPageTextContent />
        <PlayerController onPlayerNumerChange={(players)=>{
            onPlayerNumerChange(players, alertBoxRef)}
            }/>
            <GameTypeController 
                selectedGameType={gameSelected}
                selectedPointsType={pointsTypeSelected}
                onGameTypeChange={(selectedIndex) => {
                    onGameTypeChange(selectedIndex);
                    }} 
                onPointsTypeChange={(selectedIndex) => {
                    onPointsTypeChange(selectedIndex);
            }}/>
            <p>
                <button className="importantNote" onClick={() => {
                    beginGame(alertBoxRef, t)
                    }}>{t('description.empezar')}</button>
            </p>
        </>
}

export default GameMenu;