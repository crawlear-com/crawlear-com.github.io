import * as React from 'react'
import { useTranslation } from 'react-i18next'
import GameProgressionInfoRow from './GameProgressionInfoRow'
import { GameUtils } from '../games/Game'
import { GameProgressionContext } from '../context/GameProgressionContext'

const STATUS_WAITING = 'waiting'
const STATUS_PLAYING = 'playing'
const STATUS_REPAIR = 'repair'
const STATUS_DONE = 'done'

function GameProgression({game, jidGroup, onZoneClick}) {
    const { t } = useTranslation(['main']);
    const [selectedZone, setSelectedZone] = React.useState(-1);
    const [selectedPlayer, setSelectedPlayer] = React.useState(-1);
    const gameProgressionInfoRef = React.useRef();
    const [ gameProgression ] = React.useContext(GameProgressionContext);
    const playersDone = [];
    let i=0;

    function prepareOnClick(event, player) {
        const zone = Number(event.target.closest('[data-zone]').getAttribute("data-zone"));
        const gameStatus = gameProgression[player.group][player.id][zone].status;

        if (selectedZone === zone && selectedPlayer === player.id) {
            deselectPlayerAndZone();
        } else {
            if(gameStatus === STATUS_WAITING || gameStatus === STATUS_DONE || gameStatus === STATUS_PLAYING) {
                setSelectedPlayer(player.id);
                setSelectedZone(zone);
                onZoneClick(player, zone);
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
            
            row.push(<span key={zIndex}>{t('description.zona')} {zIndex+1}: </span>);
            if (zone) {
                row.push(<span key={`dG${zIndex}`} className='directorGroup colorRed'>{t('description.ocupado')}</span>);
            } else {
                row.push(<span key={`div${zIndex}`}><span className='directorGroup'>{t('description.libre')}</span><br /></span>);
            }
            result.push(<div key={`dZ${zIndex}`} className='directorZone'>{row}</div>);
        });

        return <div className=''>
            {result}
            </div>;
    }

    function getNotAvailableZones() {
        const zones = new Array(game.zones).fill(false);

        gameProgression && Object.entries(gameProgression).forEach((group, gIndex)=> {
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

    playersDone.push(<div key="eZ" className=''>{t('content.estadozona')}</div>);
    playersDone.push(<div key="nAz">{getNotAvailableZones()}</div>);
    playersDone.push(<p key="header">
        {t('content.seleccionapilotoyzona')}:
    </p>);

    game.players.forEach((player, index)=>{
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

            playersDone.push(<div key={i+j} className='gameProgressionItem rounded rounded1'>
                    <div><img src={player.avatar} alt="player avatar" />

                    {player.name} <br />
                    {t('description.grupo')} {player.group+1}</div>
                    <div className="horizontalScrollContainer">{zones}</div>
            </div>);

            if(selectedPlayer>=0 &&  selectedZone>=0 && player.id === selectedPlayer && gameProgression[player.group][selectedPlayer][selectedZone].data) {
                playersDone.push(<div key={`${i+j}Info`} className='gameProgressionInfoItem smallText rounded rounded2'>
                    <GameProgressionInfoRow 
                        gameType={game.gameType}
                        innerRef={gameProgressionInfoRef} 
                        gameProgression={gameProgression[player.group][selectedPlayer][selectedZone]} />
                </div>);
            }
            i++;
        }
    });

    return <>{ playersDone }</>
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