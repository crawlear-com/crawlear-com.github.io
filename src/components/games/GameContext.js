import * as React from 'react';
import { Game } from '../../model/Game';

export const GameContext = React.createContext({
    game: new Game("",
      new Date().toLocaleDateString(),
      { latitude: 0, longitude: 0 },
      false, 2,
      [], [], 600000, 40, new Array(4).fill(10), 4, 0, [], [], []),
    setGame: () => {}
});