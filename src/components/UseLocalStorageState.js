import * as React from 'react';

function updatePlayerAfterVersionChange(players) {
    if (players.length) {
      if (typeof players[0].handicap === 'undefined') {
        for (let i=0; i<players.length; i++) {
          players[i].handicap = 0;
        }
      }
    }
  
    return players;
}

function useLocalStorageState(key, defaultValue = [], {
    serialize = JSON.stringify,
    deserialize = JSON.parse
  } = {}) {
  const [state, setState] = React.useState(
    () => {
      const valueLocalStorage = window.localStorage.getItem(key);

      if (valueLocalStorage) {
        return updatePlayerAfterVersionChange(deserialize(valueLocalStorage));
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

export default useLocalStorageState;