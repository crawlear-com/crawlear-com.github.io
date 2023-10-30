import * as React from 'react'
import GameList from './GameList'
import { useTranslation } from 'react-i18next'
import { Game } from '../../../games/Game'

export interface PreviousGameListProps {
    storedGames: Array<Game>,
    onRemoveStoredGames: Function,
    onConfigureGames: Function,
    onLoadPreviousGames: Function
}

function PreviousGameList({ storedGames, onRemoveStoredGames, onConfigureGames, onLoadPreviousGames }: PreviousGameListProps) {
    let storedGamesUi
    const { t } = useTranslation()

    if (storedGames.length > 0) {
        storedGamesUi = <GameList title={t('description.partidasprevias')} 
            games={storedGames}
            readOnly={false}
            onGamePlay={() => {}}
            onRemoveGame={(gamePosition: number) => {
                onRemoveStoredGames(gamePosition)}
            }
            onConfigureGame={(gamePosition: number) => {
                onConfigureGames(storedGames, gamePosition) }
            } />
    } else {
        storedGamesUi = <div className="gameList rounded rounded3 centerText">
            <div className="headerText bold">{t('description.partidasprevias')}</div>
            <button onClick={() => {
                onLoadPreviousGames(window.crawlear.user.uid, )}
            }>{t('description.cargar')}</button>
        </div>
    }

    return storedGamesUi
}

export default PreviousGameList