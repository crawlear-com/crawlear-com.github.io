import * as React from 'react'
import { useTranslation } from '../app/i18n'
import GameResultTable from './GameResultTable/GameResultTable'
import GameHeaderInfo from './GameHeaderInfo'
import Sharers from '../modules/social/components/sharers/Sharers'
import Spinner from './Spinner'
import WinnerOrTieBox, { isDraw } from './WinnerOrTieBox'

import '../resources/css/WinnerTable.scss'

async function WinnerTable({ game }) {
    const { t } = await useTranslation('es', 'main')

    if (game.players) {
        return <div className='gameContainer'>
            <div className="winnerBox importantNote rounded">
                <WinnerOrTieBox game={game} />
            </div>
            <div className="gameList rounded rounded2">
                <GameHeaderInfo game={game} />
                <GameResultTable game={game} isDraw={isDraw(game)} />
                { game.isPublic &&
                    <Sharers url={`gameviewer?gid=${game.gid}`} text={`${t('description.resolverjuego')} ${game.name}`} headerText={t('description.compartir')}  /> }
                </div>
        </div>
    } else {
        return <Spinner className="centerText" />
    }
}

export default WinnerTable;