import * as React from 'react';
import Utils from '../Utils';
import PlayerItem from './PlayerItem';
import UserSearch from './UserSearch';
import { useTranslation } from 'react-i18next';
import Analytics from '../Analytics';

import '../resources/css/PlayerController.scss';

const AVATAR_API = "https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=";

function PlayerController({onPlayerNumerChange, gameName, isForJudge}) {
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
        players.find(x=>x.uid===uid && uid.length>0) || (
          isForJudge && !uid 
        )) return;

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

  function onUserSeachPlayerAdd({uid, displayName, photoURL}) {
    addPlayer(displayName, uid, photoURL);
  }

  let playersTxt = !playersRef.current.length? t('description.nojugadores') : t('description.jugadores');

  if(isForJudge) {
    playersTxt = !playersRef.current.length? t('description.nojueces') : t('description.jueces');
  }

  return <>
    <div className="players rounded rounded1">
      <div className="headerText bold">{isForJudge ? t('description.jueces') : t('description.jugadores') }</div>

      <UserSearch 
        isForJudge={isForJudge}
        onUserSeachPlayerAdd={onUserSeachPlayerAdd} 
        gameName={gameName} />
      <div className="headerText">{isForJudge ? t('description.juecesenpartida') : t('description.usuariosenpartida')}</div>
      <ul className="playersList">
          {playersRef.current.length === 0 ? playersTxt : playersRef.current.map((player, i) => { 
              return <PlayerItem 
                key={i}
                player={player} 
                i={i} 
                onRemovePlayer={removePlayer} />
          })}
      </ul>
    </div></>;
}

export default PlayerController;