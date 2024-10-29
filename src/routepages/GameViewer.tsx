import * as React from 'react'
import { Game } from 'src/games/Game'
import Spinner from 'src/components/Spinner'
import WinnerTable from 'src/components/WinnerTable'
import { useTranslation } from 'src/app/i18n'

interface GameViewerProps {
    game: Game
}

async function GameViewer({ game }: GameViewerProps) {
    const { t } = await useTranslation('es', 'main')
    let result = <></>

    if (game.players) {
        result = <Spinner></Spinner>
    } else if (game.isPublic) {
        result = <>
            <div className='headerText bold'>{ game.name }</div>
            {/* @ts-expect-error Server Component */}
            <WinnerTable game={game} />
        </>
    } else {
       result = <>{t('description.juegonopublico')}</> 
    }

    return <>{ result }</>
}

export default GameViewer