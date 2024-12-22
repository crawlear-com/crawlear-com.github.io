import * as React from 'react'
import { useTranslation } from 'react-i18next'
import GameProgressionInfoRow from './GameProgressionInfoRow'
import { isCurrentUserIsOwner } from '../games/GameUtils'
import UseGameProgression from './hooks/UseGameProgression'
import GameProgressionPlayerZoneItem from './GameProgressionPlayerZoneItem'

function GameProgression({game, jidGroup, onZoneClick}) {
    const { t } = useTranslation(['main']);
    const [getNotAvailableZones, prepareOnClick, resolveGameStatus,
        gameProgression, selectedPlayer, selectedZone] = UseGameProgression(onZoneClick, t, game)
    const playersDone = [];
    let i=0;

    playersDone.push(<div key="eZ" className=''>{t('content.estadozona')}</div>);
    playersDone.push(<div key="nAz">{getNotAvailableZones()}</div>);
    playersDone.push(<p key="header">
        {t('content.seleccionapilotoyzona')}:
    </p>);

    game.players.forEach((player)=>{
        let zones=[],
            j=0;

        if(player.group === jidGroup || isCurrentUserIsOwner(game.owner)) {
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

            if(selectedPlayer>=0 &&  selectedZone>=0) {
                const gameProgressionForPlayerAndZone = gameProgression[player.group][selectedPlayer][selectedZone]

                if (player.id === selectedPlayer && gameProgressionForPlayerAndZone.data) {
                    playersDone.push(<div key={`${i+j}Info`} className='gameProgressionInfoItem smallText rounded rounded2'>
                        <GameProgressionInfoRow
                            gameType={game.gameType}
                            gameProgression={ gameProgressionForPlayerAndZone } />
                    </div>);
                }
            }
            j++
            i++
        }
    });

    return <>{ playersDone }</>
}

export default GameProgression;