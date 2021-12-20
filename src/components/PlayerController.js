import * as React from 'react';
import Utils from '../Utils';
import PlayerItem from './PlayerItem';
import useLocalStorageState from './UseLocalStorageState';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';

import '../resources/css/PlayerController.scss';

const AVATAR_API = "https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=";

function PlayerController({onPlayerNumerChange}) {
    const [players, setPlayers] = useLocalStorageState('players');
    const inputRef = React.useRef(null);
    const inputId = Date.now();
    const { t } = useTranslation();

  React.useEffect(() => {
    onPlayerNumerChange && onPlayerNumerChange(players);
  }, [players]);

  function addPlayer() {
    const value = inputRef.current.value;
    if (!value || value.trim().length===0) return;

      const newPlayers = [...players];

      newPlayers.push({
          id: players.length,
          name: inputRef.current.value,
          avatar: `${AVATAR_API}${inputRef.current.value}`,
          handicap: 0,
          time: 0,
          points: 0
      });
      Analytics.event('menu', 'addPlayer', inputRef.current.value);
      inputRef.current.value = '';
      setPlayers(newPlayers);
      onPlayerNumerChange && onPlayerNumerChange(newPlayers);
  }

  function removePlayer(event) {
    let newPlayers = [...players];

    Analytics.event('menu', 'removePlayer', newPlayers[event.target.id].name);

    delete newPlayers[event.target.id];
    newPlayers = newPlayers.filter((a) => a)
    setPlayers(newPlayers);
    onPlayerNumerChange && onPlayerNumerChange(newPlayers);
  }

  function onHandicapChange(value, item) {
    const newPlayers = [...players];

    newPlayers[item].handicap = value;
    setPlayers(newPlayers);
    onPlayerNumerChange && onPlayerNumerChange(newPlayers);
  }

  function randomizePlayers() {
    const newPlayers = Utils.randomizeArray(players);
    
    Analytics.event('menu', 'randomPlayerOrder', newPlayers.length);

    setPlayers(newPlayers);
    onPlayerNumerChange && onPlayerNumerChange(newPlayers);
  }

  const playersTxt = !players.length? t('description.nojugadores') : t('description.jugadores');

  return <>
    <div className="players rounded rounded1">
      <div className="headerText bold">{playersTxt}</div>
      <ul className="playersList">
          {players.map((player, i) => { 
              return <PlayerItem 
                key={i}
                player={player} 
                i={i} 
                onHandicapChange={onHandicapChange}
                onRemovePlayer={removePlayer} />
          })}
      </ul>
      {players.length>1 ? <button className="buttonRandomOrder" onClick={randomizePlayers}>{t('description.ordenaleatorio')}</button> : <></>}
      <div className="headerText">{t('description.nuevojugador')}</div>
      <input id={inputId} ref={inputRef}></input>
      <button className="buttonControlTextPlus" onClick={addPlayer}>+</button>
    </div></>;
}

export default PlayerController;