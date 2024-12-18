import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { itemTransform, itemKey } from '../../list/transformers/GameListTransformer'
import List, { Transformer } from '../../list/List'

import GameRequests from './GameRequests'
import UseGameManagementMenu from '../hooks/UseGameManagementMenu'
import PreviousGameList from './PreviousGameList'

import '../styles/GameManagement.scss'

interface GameManagementMenuProps {
    onConfigureGames: Function,
    onGamePlay: Function
}

function GameManagementMenu({ onConfigureGames, onGamePlay }: GameManagementMenuProps) {
    const { t } = useTranslation(['main'])
    const navigate = useNavigate()
    const transformer: Transformer = {
        transform: itemTransform,
        key: itemKey
    }

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
            transformer={transformer}
            onRemoveItem={(gid: string) => { onRemoveGames(gid) }}
            onConfigureItem={(gid: string)=>{ onConfigureGames(games, gid) }}
            title={ t('description.partidascomopiloto') }></List>
        <List data={ judgeGames }
            title={ t('description.partidasdejuez') }
            readOnly={ false }
            transformer={ transformer }
            onItemAction={(gid: string) => {
                window.document.body.classList.add('playing')
                onGamePlay(judgeGames, gid);
            }}
            onConfigureItem={(gid: string) => { onConfigureGames(judgeGames, gid)} }
            onRemoveItem={(gid: string) => { onRemoveJudgeGames(gid) }}></List>
        <button className="newGameButton importantNote" onClick={newGameNavigation}>
                {t('description.crearjuego')}
        </button>
        <PreviousGameList storedGames={ storedGames }
            onRemoveStoredGames={ onRemoveStoredGames }
            onConfigureGames={ onConfigureGames }
            onLoadPreviousGames={ onLoadPreviousGames }></PreviousGameList>
    </>
}

export default GameManagementMenu