import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameMenu from './GameMenu';
import WinnerTable from '../WinnerTable';
import GameTypePlayer from '../../modules/gamePlayer/components/GameTypePlayer';
import Menu from '../Menu';
import Utils from '../../Utils';
import Analytics from '../../Analytics';

import '../resources/css/GameController.scss';

const GAME_STATUS_MENU = 0;
const GAME_STATUS_PLAY = 1;
const GAME_STATUS_FINISH = 2;

function GameController({ game, onGameEnd }) {
    const alertBoxRef = React.useRef()
    const elementsToRender = []
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fb
    const [state, setState] = React.useState(game)
    const [player, setPlayer] = React.useState(0)
    const [zone, setZone] = React.useState(0)
    const { t } = useTranslation(['main'])

    function onPlayerChange() {
        cleanAlertBox(alertBoxRef)
    }

    function onGameEndFromGamePlayer(game) {
        let finishedGame = false
        const newState = { ...state }

        if(zone === game.zones-1) {
            setZone(0)
            if (player+1<game.players.length) {
                setPlayer(player+1)
            } else {
                finishedGame = true
            }
        } else {
            setZone(zone+1)
        }

        if(finishedGame) {
            const newGame = { ...game }

            window.scrollTo(0, 0)
            Analytics.event('menu', 'winner', newGame.players[0].name)
            newGame.gameStatus = GAME_STATUS_FINISH
            setState(newGame)
            onGameEnd && onGameEnd(newGame)
        } else {

        }
    }

    function onBeginGame(configuredGame) {
        window.scrollTo(0, 0)
        if (configuredGame.players.length > 0) {
            const newGame = { ...configuredGame }
            cleanAlertBox(alertBoxRef)
            Analytics.event('menu', 'beginGame', newGame.players.length)
            newGame.uids = Utils.getUidsFromUsers(newGame.players)
            newGame.gameStatus = GAME_STATUS_PLAY
            setState(newGame)
        } else {
            Analytics.event('menu', 'beginGame', 0)
            showAlertBox(t('error.nojugadores'), alertBoxRef)
        }
    }

    React.useEffect(() => {
        if (state.gameStatus === GAME_STATUS_MENU) {
            Analytics.pageview('/menu/')
        } else if (state.gameStatus === GAME_STATUS_FINISH) {
            fb.setGame(state, () => { }, () => { })
        }
    }, [state.gameStatus])

    if (!fbBase.isUserLogged()) {
        elementsToRender.push(<Menu key={1} />)
    }
    elementsToRender.push(<div key={2} ref={alertBoxRef} className="hideAlert alertBox"></div>)

    switch (state.gameStatus) {
        case GAME_STATUS_MENU:
            elementsToRender.push(<GameMenu key={3}
                onPlayerChange={onPlayerChange}
                beginGame={onBeginGame}
                game={state}
            />);
            break;
        case GAME_STATUS_PLAY:
            elementsToRender.push(<GameTypePlayer key={3}
                zone={zone}
                player={player}
                onGameEnd={onGameEndFromGamePlayer}
                game={state} />)
            break;
        default:
            elementsToRender.push(<WinnerTable key={3}
                game={state} />)
    }

    return elementsToRender
}

function cleanAlertBox(alertBoxRef) {
    alertBoxRef.current.classList.add('hideAlert')
    alertBoxRef.current.innerHTML = ''
}

function showAlertBox(message, alertBoxRef) {
    alertBoxRef.current.classList.remove('hideAlert')
    alertBoxRef.current.innerHTML = message
}

export default GameController