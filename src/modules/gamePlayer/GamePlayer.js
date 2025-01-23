import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getGroupFromJid, getGameExtras, getGameContent } from './GamePlayerUtils';
import GameTypePlayer from './components/GameTypePlayer';
import WinnerTable from '../../components/WinnerTable';
import GamePlayerBeginGame from './GamePlayerBeginGame';

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
        view = <GamePlayerBeginGame game={game} onBeginGame={onBeginGame} onGameEnd={onGameEnd}
            onBackButtonClick={onBackButtonClick} onClosePlayButtonClick={onClosePlayButtonClick}
            jidGroup={jidGroup} gameProgression={gameProgression} setGameProgression={setGameProgression} />
    } else if (state === GAME_STATUS_PLAYING) {
        view = <GameTypePlayer player={player.id} zone={zone} game={game} gameExtras={gameExtras}
            onGameEnd={onGameEnd} onRepair={onRepair}>
                {childrenContent}
            </GameTypePlayer>;
    } else if (state === GAME_STATUS_FINISHED) {
        view = <div className="gameList"><WinnerTable game={game} />
        <button className="backButton" onClick={onBackButtonClick}>{t('description.atras')}</button></div>
    }

    return view;
}

export default GamePlayer;