import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import UseGameViewer from './hooks/UseGameViewer'
import WinnerTable from '../components/WinnerTable'
import { useTranslation } from 'react-i18next'
import Spinner from '../components/Spinner'
import NotLoggedLogo from '../components/NotLoggedLogo'
import { Game } from '../games/Game'

interface GameViewerProps {
    gid?: string
    inGame?: Game
    onLogin: Function
}

function GameViewer({ gid, inGame }: GameViewerProps) {
    const { t } = useTranslation(['main'])
    let game,
        result = <></>

    if (!inGame) {
        if (gid) {
            [ game ] = UseGameViewer(gid)
        }
    } else {
        game = inGame
    }

    if (!game.players) {
        result = <Spinner></Spinner>
    } else if (game.isPublic) {
        result = <>
            <div className='headerText bold'>{ game.name }</div>
            <WinnerTable game={game} />
        </>
    } else {
       result = <>{t('description.juegonopublico')}</>
    }

    return <>
            <Helmet>
                <meta property="og:title" content={`Crawlear.com Game ${game.name}`} />
                <meta property="og:description" content={`Crawlear.com Game Viewer`} />
                <meta property="description" content={`Crawlear.com Game Viewer`} />
            </Helmet>
            <NotLoggedLogo /><br />
            {result}
        </>
}

export default GameViewer;