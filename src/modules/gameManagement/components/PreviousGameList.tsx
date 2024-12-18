import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Game } from '../../../games/Game'
import { itemTransform, itemKey } from '../../list/transformers/GameListTransformer'
import { Transformer } from '../../list/List'
import List from '../../list/List'
import ButtonOrSpinner from './ButtonOrSpinner'

export interface PreviousGameListProps {
    storedGames: Array<Game>,
    onRemoveStoredGames: Function,
    onConfigureGames: Function,
    onLoadPreviousGames: Function
}

function PreviousGameList({ storedGames, onRemoveStoredGames, onConfigureGames, onLoadPreviousGames }: PreviousGameListProps) {
    let storedGamesUi: React.JSX.Element
    const { t } = useTranslation(['main'])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const transformer: Transformer = {
        transform: itemTransform,
        key: itemKey
    }

    if (storedGames.length > 0) {
        isLoading && setIsLoading(false)
        storedGamesUi = <List title={t('description.partidasprevias')}
            data={ storedGames }
            transformer={ transformer }
            readOnly={ true }
            onRemoveItem={ (gid: string) => { onRemoveStoredGames(gid)} }
            onConfigureItem={ (gid: string) => { onConfigureGames(storedGames, gid) }} />
    } else {
        storedGamesUi =<div className="gameList rounded rounded3 centerText">
            <div className="headerText bold">{t('description.partidasprevias')}</div>
            <ButtonOrSpinner isLoading={isLoading} onLoadData={onLoadPreviousGames} setIsLoading={setIsLoading} />
        </div>
    }

    return <> {storedGamesUi} </>
}

export default PreviousGameList