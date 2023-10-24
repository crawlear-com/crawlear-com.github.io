import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameProgression from './GameProgression';
import { GameProgressionContext } from '../games/GameProgressionContext';

function GameViewer({gid}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [game, setGame] = React.useState({});
    const [gameProgression, setGameProgression] = React.useState({});

    React.useEffect(()=>{
        firebase.getGame(gid, (game)=>{
            setGame({...game});
            console.log("----");
            console.log(game);
        });
    }, []);

    React.useEffect(()=>{
        console.log(game);
        console.log("gameProtressionj REQUESTG " + game.gid);
        firebase.getGameProgression(game.gid, ()=>{}, ()=>{}, (group, progression)=>{
            const res = {};

            res[group] = progression;
            setGameProgression({...gameProgression, ...res});
        }, (group, progression)=>{
            const res = {};

            res[group] = progression;
            setGameProgression({...gameProgression, ...res});
        });
    },[game]);


    if (game.gid && Object.entries(gameProgression).length) {
        console.log("entyas!");
        return <GameProgressionContext.Provider value={[gameProgression, setGameProgression]}>
            <div className="gameViewer">
                <GameProgression game={game} jidGroup={0} onZoneClick={()=>{

                }} />
            </div>;
        </GameProgressionContext.Provider>
    } else {
        console.log("FUCK!" + game.gid);
        return <>meeeh!</>;
    }
}

export default GameViewer;