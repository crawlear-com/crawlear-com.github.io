import * as React from 'react';
import { useTranslation } from 'react-i18next';

const STATUS_WAITING = 'waiting';
const STATUS_PLAYING = 'playing';

function GameProgression({gameProgression, players, onZoneClick}) {
    const { t } = useTranslation();
    const [selectedZone, setSelectedZone] = React.useState(-1);
    const [selectedPlayer, setSelectedPlayer] = React.useState(-1);
    const playersDone = [];
    let i=0;

    function prepareOnClick(event, player) {
        const zone = Number(event.target.getAttribute("data-zone"));

        if(gameProgression[player.id][zone] === STATUS_WAITING) {
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
                if (gameProgression[player.id][j] !== STATUS_WAITING) {
                    if (gameProgression[player.id][j] === STATUS_PLAYING) {
                        className += " colorGreen";
                    } else {
                        className += " colorClearGrey";
                    }
                }
                zones.push(<span data-zone={j} onClick={(event)=>{                    
                    prepareOnClick(event, player, zone);
                }} key={j+1} className={className}>{j+1}</span>);
            }
            j++;
        });
        playersDone.push(<div key={i+j} className='gameProgressionItem rounded rounded2'>
                <img src={player.avatar} alt="player avatar" />
                <div className="horizontalScrollContainer">{zones}</div>
        </div>);
        i++;
    });

    return playersDone;
}

export default GameProgression;