import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getGroupFromJid, getGameExtras, getGameContent } from './GamePlayerUtils';
import GamePlayerMenu from './components/GamePlayerMenu';
import GameTypePlayer from './components/GameTypePlayer';
import { GameProgressionContext } from '../../context/GameProgressionContext';
import WinnerTable from '../../components/WinnerTable';

import { GAME_TYPE_KING } from '../../games/Game'
import UseGamePlayer, { GAME_STATUS_CREATED, GAME_STATUS_FINISHED, GAME_STATUS_PLAYING } from './hooks/UseGamePlayer';

import './styles/GamePlayer.scss'

function GamePlayer({inGame, onBackButtonClick}) {
    let view = <></>
    const { t } = useTranslation(['main'])
    const gameExtras = getGameExtras(inGame.gameType)
    const [state, game, gameProgression, setGameProgression, player, zone,
        onBeginGame, onClosePlayButtonClick, onGameEnd, onRepair] = UseGamePlayer(inGame, gameExtras)
    const childrenContent = getGameContent(game.gameType, player.id, zone)

    const [jidGroup] = React.useState(()=>{
        return getGroupFromJid(game, window.crawlear.user.uid)
    })

    if (state === GAME_STATUS_CREATED) {
        if (game.gameType === GAME_TYPE_KING) {
            view = <GameTypePlayer
            game={game}
            onGameEnd={onGameEnd}
            gameExtras={gameExtras} />;
        } else {
            view = <GameProgressionContext.Provider value={[gameProgression, setGameProgression]}>
                    <GamePlayerMenu game={game} gameProgression={gameProgression}
                        jidGroup={jidGroup} onBeginGame={onBeginGame} onBackButtonClick={onBackButtonClick}
                        onCloseButonClick={onClosePlayButtonClick}></GamePlayerMenu>
                </GameProgressionContext.Provider>
        }

    } else if (state === GAME_STATUS_PLAYING) {
        view = <GameTypePlayer
            player={player.id}
            zone={zone}
            game={game}
            gameExtras={gameExtras}
            onGameEnd={onGameEnd}
            onRepair={onRepair}>
                {childrenContent}
            </GameTypePlayer>;
    } else if (state === GAME_STATUS_FINISHED) {
        view = <div className="gameList"><WinnerTable game={game} />
        <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
    }

    return view;
}

export default GamePlayer;