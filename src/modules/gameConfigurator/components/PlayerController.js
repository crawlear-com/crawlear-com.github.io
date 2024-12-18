import * as React from 'react';
import PlayerItem from './PlayerItem';
import UserSearch from './UserSearch/UserSearchForGame';
import { useTranslation } from 'react-i18next';
import Analytics from '../../../Analytics';

import '../styles/PlayerController.scss';

const AVATAR_API = "https://eu.ui-avatars.com/api/?background=345B63&color=FFFFFF&name=";

function PlayerController({
  inPlayers,
  onPlayerNumerChange,
  onGameDirectorChange,
  gameName,
  isForJudge,
  maxGroups}) {

  const [players, setPlayers] = React.useState(inPlayers || []);
  const { t } = useTranslation(['main']);

  function removePlayer(event) {
    Analytics.event('menu', 'removePlayer', players[event.target.id].name);

    delete players[event.target.id];
    const statusPlayers = players.filter((a) => a);
    setPlayers(statusPlayers);
    onPlayerNumerChange && onPlayerNumerChange(statusPlayers);
  }

  function onUserSeachPlayerAdd(player) {
    const value = player.displayName;

    if (!value ||
        value.trim().length===0 ||
        players.find(x=>x.uid===player.uid && player.uid.length>0) || (
          isForJudge && !player.uid
        )) return;

    players.push({
          id: players.length,
          uid: player.uid || "",
          name: value,
          avatar: player.photoURL || `${AVATAR_API}${value}`,
          group: 0,
          time: 0,
          points: 0,
          battery: false
      });
    Analytics.event('menu', 'addPlayer', value);
    onPlayerNumerChange && onPlayerNumerChange(players);
  }

  function onGroupChange(playerId, group) {
    const newPlayers = [...players];

    newPlayers[playerId].group = group;
    setPlayers(newPlayers);
  }

  function onGameDirectorChangeEvent(playerId, value) {
    onGameDirectorChange && onGameDirectorChange(playerId, value);
  }

  let playersTxt = !players.length? <div className='formError'>{ t('error.nojugadores')} </div> : t('description.jugadores');

  if(isForJudge) {
    playersTxt = !players.length? <div className='formError'>{t('description.nojueces')} </div> : t('description.jueces');
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
          {players.length === 0 ? playersTxt : players.map((player, i) => {
              return <PlayerItem
                key={player.name}
                player={player}
                i={i}
                onGameDirectorChange={onGameDirectorChangeEvent}
                maxGroups={maxGroups}
                onGroupChange={onGroupChange}
                editMode={true}
                isForJudge={isForJudge}
                onRemovePlayer={removePlayer} />
          })}
      </ul>
    </div></>;
}

export default PlayerController;