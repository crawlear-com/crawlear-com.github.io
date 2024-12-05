import * as React from 'react'
import { useTranslation } from 'react-i18next'
import GameProgressionInfoRow from './GameProgressionInfoRow'
import { GameUtils } from '../games/Game'
import UseGameProgression from './hooks/UseGameProgression'
import GameProgressionPlayerZoneItem from './GameProgressionPlayerZoneItem'

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

    game.players.forEach((player)=>{
        let zones=[],
            j=-1;

        if(player.group === jidGroup || GameUtils.isCurrentUserIsOwner(game.owner)) {
            j++
            zones = <GameProgressionPlayerZoneItem
                        zoneIndex={j}
                        zones={player.zones}
                        selectedPlayer={selectedPlayer}
                        selectedZone={selectedZone}
                        player={player}
                        gameProgression={gameProgression}
                        prepareOnClick={prepareOnClick}
                        resolveGameStatus={resolveGameStatus} />

            playersDone.push(<div key={`${player.name}${i}${j}`} className='gameProgressionItem rounded rounded1'>
                    <div className="gameProgressionItemHeader">
                        <img src={player.avatar} alt="player avatar" />
                        {player.name} <br />
                        {t('description.grupo')} {player.group+1}
                    </div>
                    <div className="horizontalScrollContainer">{ zones }</div>
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