import * as React from 'react'
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
    const [game] = UseGameViewer(gid)
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
        <NotLoggedLogo /><br />
        {result}
    </>
}

export default GameViewer;