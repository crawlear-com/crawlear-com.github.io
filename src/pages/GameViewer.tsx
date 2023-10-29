import * as React from 'react'
import UseGameViewer from './hooks/UseGameViewer'
import WinnerTable from '../components/WinnerTable'
import { useTranslation } from 'react-i18next'
import Spinner from '../components/Spinner'

interface GameViewerProps {
    gid: string
}

function GameViewer({ gid }: GameViewerProps) {
    const { t } = useTranslation()
    const [game] = UseGameViewer(gid)

    if (!game.players) {
        return <Spinner></Spinner>
    } else if (game.isPublic) {
        return <>
            <div className='headerText bold'>{ game.name }</div>
            <WinnerTable game={game} />
        </>
    } else {
       return <>{t('description.juegonopublico')}</> 
    }
}

export default GameViewer;