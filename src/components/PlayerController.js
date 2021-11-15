import * as React from 'react';
import Utils from '../Utils';
import { useTranslation } from 'react-i18next';

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
            time: 0,
            points: 0
        });

        const input = document.getElementById(inputId);
        input.value = '';

        setPlayers(newPlayers);
        onPlayerNumerChange && onPlayerNumerChange(newPlayers);
    }

    function removePlayer(event) {
      let newPlayers = [...players];

      delete newPlayers[event.target.id];
      newPlayers = newPlayers.filter((a) => a)
      setPlayers(newPlayers);
      onPlayerNumerChange && onPlayerNumerChange(newPlayers);
    }

    function randomizePlayers() {
      const newPlayers = Utils.randomizeArray(players);
      
      setPlayers(newPlayers);
      onPlayerNumerChange && onPlayerNumerChange(newPlayers);
    }

    const playersTxt = !players.length? t('description.nojugadores') : t('description.jugadores');

    return <>
      <div className="players rounded rounded1">
        <div className="headerText bold">{playersTxt}</div>
        <ul className="playersList">
            {players.map((player, i) => { 
                return <li className="importantNote rounded playerListItem" key={i} value={player.name}>
                  <div><img src={player.avatar} alt="avatar"/>
                    {player.name}
                    <button className="buttonControlTextMinus" id={i} onClick={removePlayer}>-</button>
                  </div>
                  </li>
            })}
        </ul>
        {players.length>1 ? <button onClick={randomizePlayers}>{t('description.ordenaleatorio')}</button> : <></>}
        <div className="headerText">{t('description.nuevojugador')}</div>
        <input id={inputId} ref={inputRef}></input>
        <button className="buttonControlTextPlus" onClick={addPlayer}>+</button>
      </div></>;
}

function useLocalStorageState(key, defaultValue = [], {
  serialize = JSON.stringify,
  deserialize = JSON.parse
} = {}) {
const [state, setState] = React.useState(
  () => {
    const valueLocalStorage = window.localStorage.getItem(key);

    if (valueLocalStorage) {
      return deserialize(valueLocalStorage);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    if (prevKeyRef !== key) {
      window.localStorage.removeItem(prevKeyRef);
    }
    window.localStorage.setItem(key, serialize(state));

}, [key, serialize, state]);

return [state, setState];
}

export default PlayerController;