import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import GameList from './GameList'
import GameRequests from './GameRequests'
import UseGameManagementMenu from '../hooks/UseGameManagementMenu'

import '../styles/GameManagement.scss'

function GameManagementMenu({onConfigureGames, onGamePlay}) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    let storedGamesUi

    function newGameNavigation() {
        navigate("/gameconfigurator")
    }

    const [games, onRemoveGames,
           judgeGames, onRemoveJudgeGames,
           storedGames, onRemoveStoredGames, onLoadStoredGames] = UseGameManagementMenu()


    if (storedGames.length > 0) {
        storedGamesUi = <GameList title={t('description.partidasprevias')} 
            games={storedGames}
            readOnly={false}
            onRemoveGame={(gamePosition)=>{
                onRemoveStoredGames(gamePosition)}
            }
            onConfigureGame={(gamePosition)=>{
                onConfigureGames(storedGames, gamePosition)}
            } />
    } else {
        storedGamesUi = <div className="gameList rounded rounded3 centerText">
            <div className="headerText bold">{t('description.partidasprevias')}</div>
            <button onClick={() => {
                onLoadStoredGames(window.crawlear.user.uid, )}
            }>{t('description.cargar')}</button>
        </div>
    }

    return <>
        <div className='headerText bold sectionTitle'>{t('description.secciondejuego')}</div>

        <GameRequests user={window.crawlear.user} />
        <GameList title={t('description.partidascomopiloto')} 
            games={games}
            readOnly={true}
            onRemoveGame={(gamePosition)=>{
                onRemoveGames(gamePosition)}
            }
            onConfigureGame={(gamePosition)=>{
                onConfigureGames(games, gamePosition)}
            } />
        <GameList title={t('description.partidasdejuez')} 
            games={judgeGames}
            readOnly={false}
            onGamePlay={(event) => {
                onGamePlay(judgeGames, event.target.getAttribute("data-gameposition"));
            }}
            onConfigureGame={(gamePosition) => {
                onConfigureGames(judgeGames, gamePosition)}
            }
            onRemoveGame={(gamePosition) => {
                onRemoveJudgeGames(gamePosition)
            }} />
        <button className="newGameButton importantNote" onClick={newGameNavigation}>{t('description.crear')}</button>                        
        { storedGamesUi }
    </>
}

export default GameManagementMenu