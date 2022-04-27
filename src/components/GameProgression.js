import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameProgressionInfoRow from './GameProgressionInfoRow';
import TotalTimeGameScores from './games/TotalTimeGameScores';
import IsrccGameScores from './games/IsrccGameScores';
import Utils from '../Utils';

const STATUS_WAITING = 'waiting';
const STATUS_PLAYING = 'playing';
const STATUS_REPAIR = 'repair';
const STATUS_DONE = 'done';

function GameProgression({game, gameProgression, players, onZoneClick}) {
    const { t } = useTranslation();
    const [selectedZone, setSelectedZone] = React.useState(-1);
    const [selectedPlayer, setSelectedPlayer] = React.useState(-1);
    const playersDone = [];
    const gameProgressionInfoRef = React.useRef();
    let i=0, gameTypeTexts = Utils.tokenToTexts(TotalTimeGameScores.texts);

    if(game.gameType === 2) {
        gameTypeTexts = Utils.tokenToTexts(IsrccGameScores.texts);   
    }

    function prepareOnClick(event, player) {
        const zone = Number(event.target.closest('[data-zone]').getAttribute("data-zone"));
        const gameStatus = gameProgression[player.id][zone].status;
        const gameData = gameProgression[player.id][zone].data;

        if (selectedZone === zone && selectedPlayer === player.id) {
            deselectPlayerAndZone();
        } else {
            if(gameStatus === STATUS_WAITING || gameStatus === STATUS_DONE) {
                setSelectedPlayer(player.id);
                setSelectedZone(zone);
                onZoneClick(player, zone);
                gameData && showGameProgression();
            } else {
                deselectPlayerAndZone();
            }
        }
    }

    function deselectPlayerAndZone() {
        onZoneClick(-1, -1);
        setSelectedPlayer(-1);
        setSelectedZone(-1);
    }

    function showGameProgression() {
        
    }

    playersDone.push(<p key="header">
        {t('content.seleccionapilotoyzona')}:
    </p>);

    players.forEach((player)=>{
        let zones=[], 
            j=0,
            className;

        player.zones.forEach((zone)=>{
            className = player.id===selectedPlayer && j===selectedZone ? 'colorGrey rounded' : 'rounded';
            if(gameProgression && gameProgression[player.id]) {
                if (gameProgression[player.id][j].status !== STATUS_WAITING) {
                    if (gameProgression[player.id][j].status === STATUS_PLAYING) {
                        className += " colorOrange";
                    } else if (gameProgression[player.id][j].status === STATUS_REPAIR) {
                        className += " colorRed";
                    } else if (gameProgression[player.id][j].status === STATUS_DONE) { 
                        className += " colorGreen";
                    }
                } else if (gameProgression[player.id][j].data) {
                    className += " colorClearGrey";
                }
                zones.push(<span data-zone={j} onClick={(event)=>{                    
                    prepareOnClick(event, player, zone);
                }} key={j+1} className={className}>
                    <div>{t('description.zona')} {j+1}</div>
                    <br />
                    <div>{t('description.estado')}:</div>
                    <div>{resolveGameStatus(t, gameProgression[player.id][j].status, gameProgression[player.id][j].data)}</div>
                </span>);
            }
            j++;
        });
        playersDone.push(<div key={i+j} className='gameProgressionItem rounded rounded3'>
                <img src={player.avatar} alt="player avatar" />
                <div className="horizontalScrollContainer">{zones}</div>
        </div>);

        if(selectedPlayer>=0 &&  selectedZone>=0 && player.id === selectedPlayer && gameProgression[selectedPlayer][selectedZone].data) {
            playersDone.push(<div className='gameProgressionInfoItem smallText rounded rounded2'>
                <GameProgressionInfoRow innerRef={gameProgressionInfoRef} 
                    gameTypeTexts={gameTypeTexts}
                    key={`${i+j}Info`} 
                    gameProgression={gameProgression[selectedPlayer][selectedZone]} />
            </div>);
        }
        i++;
    });

    return playersDone;
}

function resolveGameStatus(t, status, data) {
    let result;

    switch(status) {
        case 'waiting':
            if (data) {
                result = t('description.reparacionfinalizada');
            } else {
                result = t('description.waiting');
            }
            break;
        case 'done':
            result = t('description.done');
            break;
        case 'repair':
            result = t('description.repair');
            break;
        case 'playing':
            result = t('description.playing');
            break;
        default:
            result = t('description.waiting');
            break;
    }

    return result;
}

export default GameProgression;