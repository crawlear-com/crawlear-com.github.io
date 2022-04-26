import * as React from 'react';
import { useTranslation } from 'react-i18next';

const STATUS_WAITING = 'waiting';
const STATUS_PLAYING = 'playing';
const STATUS_REPAIR = 'repair';
const STATUS_DONE = 'done';

function GameProgression({gameProgression, players, onZoneClick}) {
    const { t } = useTranslation();
    const [selectedZone, setSelectedZone] = React.useState(-1);
    const [selectedPlayer, setSelectedPlayer] = React.useState(-1);
    const playersDone = [];
    let i=0;

    function prepareOnClick(event, player) {
        const zone = Number(event.target.getAttribute("data-zone"));
        const gameStatus = gameProgression[player.id][zone].status;

        if(gameStatus === STATUS_WAITING || gameStatus === STATUS_DONE) {
            setSelectedPlayer(player.id);
            setSelectedZone(zone);
            onZoneClick(player, zone);
        } else {
            onZoneClick(-1, -1);
        }
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
                        className += " colorGreen";
                    } else if (gameProgression[player.id][j].status === STATUS_REPAIR) {
                        className += " colorRed";
                    } else if (gameProgression[player.id][j].status === STATUS_DONE) { 
                        className += " colorClearGrey";
                    }
                } else if (gameProgression[player.id][j].data) {
                    className += " colorOrange";
                }
                zones.push(<span data-zone={j} onClick={(event)=>{                    
                    prepareOnClick(event, player, zone);
                }} key={j+1} className={className}>{j+1}</span>);
            }
            j++;
        });
        playersDone.push(<div key={i+j} className='gameProgressionItem'>
                <img src={player.avatar} alt="player avatar" />
                <div className="horizontalScrollContainer">{zones}</div>
        </div>);
        i++;
    });

    return playersDone;
}

export default GameProgression;