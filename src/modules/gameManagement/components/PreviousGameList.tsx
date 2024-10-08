import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Game } from '../../../games/Game'
import { itemTransform } from '../../list/components/GameListTransformer'
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

    if (storedGames.length > 0) {
        if (isLoading) {
            setIsLoading(false)
        }
        storedGamesUi.push(<List key='previousGames' 
            title={t('description.partidasprevias')} 
            data={storedGames}
            transformer={itemTransform}
            readOnly={true}
            onRemoveItem={(gamePosition: number) => {
                onRemoveStoredGames(gamePosition)}
            }
            onConfigureItem={(gamePosition: number) => {
                onConfigureGames(storedGames, gamePosition) }
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