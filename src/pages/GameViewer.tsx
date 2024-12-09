import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import UseGameViewer from './hooks/UseGameViewer'
import WinnerTable from '../components/WinnerTable'
import { useTranslation } from 'react-i18next'
import Spinner from '../components/Spinner'
import NotLoggedLogo from '../components/NotLoggedLogo'

interface GameViewerProps {
    gid: string
    onLogin: Function
}

function GameViewer({ gid }: GameViewerProps) {
    const { t } = useTranslation(['main'])
    const [ game ] = UseGameViewer(gid)
    let result = <></>

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