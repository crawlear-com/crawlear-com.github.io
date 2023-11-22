import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { itemTransform } from '../../list/components/GameListTransformer'
import List from '../../list/List'

import GameRequests from './GameRequests'
import UseGameManagementMenu from '../hooks/UseGameManagementMenu'
import PreviousGameList from './PreviousGameList'

import '../styles/GameManagement.scss'

function GameManagementMenu({onConfigureGames, onGamePlay}) {
    const { t } = useTranslation()
    const navigate = useNavigate()

    function newGameNavigation() {
        navigate("/gameconfigurator")
    }

    const [games, onRemoveGames,
           judgeGames, onRemoveJudgeGames,
           storedGames, onRemoveStoredGames, onLoadPreviousGames] = UseGameManagementMenu()

    return <>
        <div className='headerText bold sectionTitle'>{t('description.secciondejuego')}</div>

        <GameRequests user={window.crawlear.user} />
        <List data={games}
            readOnly={true}
            transformer={itemTransform}
            onRemoveItem={(gamePosition) => {
                onRemoveGames(gamePosition)}} 
            onConfigureItem={(gamePosition)=>{
                    onConfigureGames(games, gamePosition)}} 
            title={t('description.partidascomopiloto')}></List>
        <List data={judgeGames}
            title={t('description.partidasdejuez')} 
            readOnly={false}
            transformer={itemTransform}
            onItemAction={(gamePosition) => {
                onGamePlay(judgeGames, gamePosition);
            }}
            onConfigureItem={(gamePosition) => {
                onConfigureGames(judgeGames, gamePosition)}
            }
            onRemoveItem={(gamePosition) => {
                onRemoveJudgeGames(gamePosition)
            }}></List>
        <button className="newGameButton importantNote" onClick={newGameNavigation}>{t('description.crearjuego')}</button>                        
        <PreviousGameList storedGames={storedGames} 
            onRemoveStoredGames={onRemoveStoredGames}
            onConfigureGames={onConfigureGames}
            onLoadPreviousGames={onLoadPreviousGames}></PreviousGameList>
    </>
}

export default GameManagementMenu