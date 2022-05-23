import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameProgressionInfoRow from './GameProgressionInfoRow';
import { GameUtils } from '../model/Game';

const STATUS_WAITING = 'waiting';
const STATUS_PLAYING = 'playing';
const STATUS_REPAIR = 'repair';
const STATUS_DONE = 'done';

function GameProgression({game, gameProgression, players, jidGroup, onZoneClick}) {
    const { t } = useTranslation();
    const [selectedZone, setSelectedZone] = React.useState(-1);
    const [selectedPlayer, setSelectedPlayer] = React.useState(-1);
    const playersDone = [];
    const gameProgressionInfoRef = React.useRef();
    let i=0;

    function prepareOnClick(event, player) {
        const zone = Number(event.target.closest('[data-zone]').getAttribute("data-zone"));
        const gameStatus = gameProgression[player.group][player.id][zone].status;
        const gameData = gameProgression[player.group][player.id][zone].data;

        if (selectedZone === zone && selectedPlayer === player.id) {
            deselectPlayerAndZone();
        } else {
            if(gameStatus === STATUS_WAITING || gameStatus === STATUS_DONE || gameStatus === STATUS_PLAYING) {
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

    function renderOccupiedZones(zones) {
        const result = [];

        zones.forEach((zone, zIndex)=>{
            const row = [];
            
            row.push(<>{t('description.zona')} {zIndex+1}: </>);
            if (zone) {
                row.push(<span className='directorGroup colorRed'>{t('description.ocupado')}</span>);
            } else {
                row.push(<><span className='directorGroup'>{t('description.libre')}</span><br /></>);
            }
            result.push(<div className='directorZone'>{row}</div>);
        });

        return <div className=''>
            {result}
            </div>;
    }

    function getNotAvailableZones() {
        const zones = new Array(game.zones).fill(false);

        Object.entries(gameProgression).forEach((group, gIndex)=> {
            Object.entries(group[1]).forEach((player, pIndex)=>{
                Object.entries(player[1]).forEach((zone, zIndex)=>{
                    if(zone[1].status === 'playing') {
                        !zones[zIndex] && (zones[zIndex] = true);
                    }
                });
            });
        });

        return renderOccupiedZones(zones);
    }

    function showGameProgression() {
        
    }

    playersDone.push(<div className=''>{t('content.estadozona')}</div>);
    playersDone.push(<div>{getNotAvailableZones()}</div>);
    playersDone.push(<p key="header">
        {t('content.seleccionapilotoyzona')}:
    </p>);

    players.forEach((player)=>{
        let zones=[], 
            j=0,
            className;

        if(player.group === jidGroup || GameUtils.isCurrentUserIsOwner(game.owner)) {
            player.zones.forEach((zone)=>{
                className = player.id===selectedPlayer && j===selectedZone ? 'colorGrey rounded' : 'rounded';
                if(gameProgression && gameProgression[player.group] && gameProgression[player.group][player.id]) {
                    if (gameProgression[player.group][player.id][j].status !== STATUS_WAITING) {
                        if (gameProgression[player.group][player.id][j].status === STATUS_PLAYING) {
                            className += " colorOrange";
                        } else if (gameProgression[player.group][player.id][j].status === STATUS_REPAIR) {
                            className += " colorRed";
                        } else if (gameProgression[player.group][player.id][j].status === STATUS_DONE) { 
                            className += " colorGreen";
                        }
                    } else if (gameProgression[player.group][player.id][j].data) {
                        className += " colorClearGrey";
                    }
                    zones.push(<span data-zone={j} onClick={(event)=>{                    
                        prepareOnClick(event, player, zone);
                    }} key={j+1} className={className}>
                        <div>{t('description.zona')} {j+1}</div>
                        <br />
                        <div>{t('description.estado')}:</div>
                        <div>{resolveGameStatus(t, gameProgression[player.group][player.id][j].status, gameProgression[player.group][player.id][j].data)}</div>
                    </span>);
                }
                j++;
            });

            playersDone.push(<div key={i+j} className='gameProgressionItem rounded rounded3'>
                    <div><img src={player.avatar} alt="player avatar" />
                    {t('description.grupo')} {player.group+1}</div>
                    <div className="horizontalScrollContainer">{zones}</div>
            </div>);

            if(selectedPlayer>=0 &&  selectedZone>=0 && player.id === selectedPlayer && gameProgression[player.group][selectedPlayer][selectedZone].data) {
                playersDone.push(<div className='gameProgressionInfoItem smallText rounded rounded2'>
                    <GameProgressionInfoRow 
                        gameType={game.gameType}
                        innerRef={gameProgressionInfoRef} 
                        key={`${i+j}Info`} 
                        gameProgression={gameProgression[player.group][selectedPlayer][selectedZone]} />
                </div>);
            }
            i++;
        }
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