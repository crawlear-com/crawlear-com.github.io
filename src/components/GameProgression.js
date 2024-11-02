import * as React from 'react'
import { useTranslation } from 'react-i18next'
import GameProgressionInfoRow from './GameProgressionInfoRow'
import { GameUtils } from '../games/Game'
import UseGameProgression, { status } from './hooks/UseGameProgression'

function GameProgression({game, jidGroup, onZoneClick}) {
    const { t } = useTranslation(['main']);
    const [getNotAvailableZones, prepareOnClick, resolveGameStatus,
        gameProgression, selectedPlayer, selectedZone] = UseGameProgression(onZoneClick, t, game)
    const gameProgressionInfoRef = React.useRef();
    const playersDone = [];
    let i=0;

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
                    const currentStatus = gameProgression[player.group][player.id][j].status
                    const currentData = gameProgression[player.group][player.id][j].data

                    if (currentStatus !== status.waiting) {
                        if (currentStatus === status.playing) {
                            className += " colorOrange";
                        } else if (currentStatus === status.repair) {
                            className += " colorRed";
                        } else if (currentStatus === status.done) {
                            className += " colorGreen";
                        }
                    } else if (currentData) {
                        className += " colorClearGrey";
                    }
                    zones.push(<span data-zone={j} onClick={(event)=>{
                        prepareOnClick(event, player, zone);
                    }} key={j+1} className={className}>
                        <div>{t('description.zona')} {j+1}</div>
                        <br />
                        <div>{t('description.estado')}:</div>
                        <div>{resolveGameStatus(t, currentStatus, currentData)}</div>
                    </span>);
                }
                j++;
            });

            playersDone.push(<div key={i+j} className='gameProgressionItem rounded rounded1'>
                    <div className="gameProgressionItemHeader">
                        <img src={player.avatar} alt="player avatar" />
                        {player.name} <br />
                        {t('description.grupo')} {player.group+1}
                    </div>
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

export default GameProgression;