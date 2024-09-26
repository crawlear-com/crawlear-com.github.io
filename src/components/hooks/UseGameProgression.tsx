import * as React from 'react'
import { GameProgressionContext } from '../../context/GameProgressionContext';
import { Player, Zone } from '../../games/GameInterfaces';
import { Game } from '../../games/Game';

enum status {
  waiting = 'waiting',
  playing = 'playing',
  repair = 'repair',
  done = 'done',
}

function UseGameProgression(onZoneClick: Function, t: Function, game: Game) {
  const [selectedZone, setSelectedZone] = React.useState(-1);
  const [selectedPlayer, setSelectedPlayer] = React.useState(-1);
  const [ gameProgression ] = React.useContext(GameProgressionContext);
  let i=0;

    function resolveGameStatus(t: Function, state: string, data: any) {
    let result;

    switch(state) {
        case status.waiting:
            if (data) {
                result = t('description.reparacionfinalizada');
            } else {
                result = t('description.waiting');
            }
            break;
        case status.done:
            result = t('description.done');
            break;
        case status.repair:
            result = t('description.repair');
            break;
        case status.playing:
            result = t('description.playing');
            break;
        default:
            result = t('description.waiting');
            break;
    }

    return result;
    }

  function prepareOnClick(event:React.TouchEvent, player: Player) {
      const targetElement = event.target as HTMLSpanElement 
      const zone = Number( (targetElement.closest('[data-zone]'))?.getAttribute("data-zone"));
      const gameStatus = gameProgression[player.group][player.id][zone].status;

      if (selectedZone === zone && selectedPlayer === player.id) {
          deselectPlayerAndZone();
      } else {
          if(gameStatus === status.waiting || gameStatus === status.done || gameStatus === status.playing) {
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

  function renderOccupiedZones(zones: Array<Zone>) {
      const result: Array<React.JSX.Element> = [];

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

      gameProgression && Object.entries(gameProgression).forEach((group: any, gIndex: number)=> {
          Object.entries(group[1]).forEach((player: any, pIndex: number)=>{
              Object.entries(player[1]).forEach((zone: any, zIndex)=>{
                  if(zone[1].status === 'playing') {
                      !zones[zIndex] && (zones[zIndex] = true);
                  }
              });
          });
      });

      return renderOccupiedZones(zones);
  }

  return [getNotAvailableZones, prepareOnClick, resolveGameStatus, gameProgression, selectedPlayer, selectedZone]
}

export default UseGameProgression
export { status }