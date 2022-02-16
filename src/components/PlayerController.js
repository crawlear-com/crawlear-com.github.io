import * as React from 'react';
import Utils from '../Utils';
import PlayerItem from './PlayerItem';
import UserSearch from './UserSearch';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';

import '../resources/css/PlayerController.scss';

const AVATAR_API = "https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=";

function PlayerController({onPlayerNumerChange, gameName}) {
    const playersRef = React.useRef([]);
    const { t } = useTranslation();

  React.useEffect(() => {
    onPlayerNumerChange && onPlayerNumerChange(playersRef.current);
  }, [playersRef.current]);

  function addPlayer(displayName, uid, photoURL) {
    const value = displayName,
      players = playersRef.current;

    if (!value || 
        value.trim().length===0 || 
        players.find(x=>x.uid===uid && uid.length>0)) return;

    players.push({
          id: players.length,
          uid: uid || "",
          name: value,
          avatar: photoURL || `${AVATAR_API}${value}`,
          time: 0,
          points: 0,
          battery: false
      });
      Analytics.event('menu', 'addPlayer', value);
      onPlayerNumerChange && onPlayerNumerChange(players);
  }

  function removePlayer(event) {

    Analytics.event('menu', 'removePlayer', playersRef.current[event.target.id].name);

    delete playersRef.current[event.target.id];
    playersRef.current = playersRef.current.filter((a) => a)
    onPlayerNumerChange && onPlayerNumerChange(playersRef.current);
  }

  function randomizePlayers() {
    playersRef.current = Utils.randomizeArray(playersRef.current);
    
    Analytics.event('menu', 'randomPlayerOrder', playersRef.current.length);
    onPlayerNumerChange && onPlayerNumerChange(playersRef.current);
  }

  function onUserSeachPlayerAdd({uid, displayName, photoURL}) {
    addPlayer(displayName, uid, photoURL);
  }

  const playersTxt = !playersRef.current.length? t('description.nojugadores') : t('description.jugadores');

  return <>
    <div className="players rounded rounded1">
      <div className="headerText bold">{t('description.jugadores')}</div>
      
      <UserSearch onUserSeachPlayerAdd={onUserSeachPlayerAdd} gameName={gameName} />
      <div className="headerText">{t('description.usuariosenpartida')}</div>
      <ul className="playersList">
          {playersRef.current.length === 0 ? playersTxt : playersRef.current.map((player, i) => { 
              return <PlayerItem 
                key={i}
                player={player} 
                i={i} 
                onRemovePlayer={removePlayer} />
          })}
      </ul>
      {playersRef.current.length>1 ? <button className="buttonRandomOrder" onClick={randomizePlayers}>{t('description.ordenaleatorio')}</button> : <></>}
    </div></>;
}

export default PlayerController;