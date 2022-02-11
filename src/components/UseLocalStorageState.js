import * as React from 'react';

function useLocalStorageState(key, defaultValue = [], {
    serialize = JSON.stringify,
    deserialize = JSON.parse
  } = {}) {
  const [state, setState] = React.useState(
    () => {return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
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