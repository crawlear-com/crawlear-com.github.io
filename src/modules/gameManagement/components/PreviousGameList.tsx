import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Game } from '../../../games/Game'
import { itemTransform, itemKey } from '../../list/transformers/GameListTransformer'
import { Transformer } from '../../list/List'
import List from '../../list/List'
import Spinner from '../../../components/Spinner'

export interface PreviousGameListProps {
    storedGames: Array<Game>,
    onRemoveStoredGames: Function,
    onConfigureGames: Function,
    onLoadPreviousGames: Function
}

function PreviousGameList({ storedGames, onRemoveStoredGames, onConfigureGames, onLoadPreviousGames }: PreviousGameListProps) {
    const storedGamesUi: Array<React.JSX.Element> = []
    const { t } = useTranslation(['main'])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const buttonOrLoading = isLoading ? 
        <Spinner></Spinner> : 
        <button title='loadButton' onClick={() => {
            setIsLoading(true)
            onLoadPreviousGames(window.crawlear.user.uid, )}
        }>{t('description.cargar')}</button>
    const transformer: Transformer = {
        transform: itemTransform,
        key: itemKey
    }

    if (storedGames.length > 0) {
        if (isLoading) {
            setIsLoading(false)
        }
        storedGamesUi.push(<List key='previousGames' 
            title={t('description.partidasprevias')} 
            data={storedGames}
            transformer={transformer}
            readOnly={true}
            onRemoveItem={(gid: string) => {
                onRemoveStoredGames(gid)}
            }
            onConfigureItem={(gid: string) => {
                onConfigureGames(storedGames, gid) }
            } />)
    } else {
        storedGamesUi.push(<div key='noPreviousGames' className="gameList rounded rounded3 centerText">
            <div className="headerText bold">{t('description.partidasprevias')}</div>
            {buttonOrLoading}
        </div>)
    }

    return <> {storedGamesUi} </>
}

export default PreviousGameList