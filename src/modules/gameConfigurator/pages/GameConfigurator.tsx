'use client'

import * as React from 'react'
import { GAME_TYPE_KING } from '../../../games/Game'
import GameTypeController from '../components/GameTypeController'
import PlayerController from '../components/PlayerController'
import MaxTimeAndPointsPicker from '../components/MaxTimeAndPointsPicker'
import ZonesPicker from '../components/ZonesPicker'
import GroupsPicker from '../components/GroupsPicker'
import GateProgressionPicker from '../components/GateProgressionPicker'
import ErrorBox from '../../../components/ErrorBox'
import { isOffline } from '../../../routepages/Offline'
import LocationResolver from '../components/LocationResolver'
import { useTranslation } from 'react-i18next'
import UseGameConfigurator from '../hooks/UseGameConfigurator'
import Analytics from '../../../Analytics'
import { Game } from '../../../games/Game'

import '../styles/GameConfigurator.scss'

interface GameConfiguratorProps {
    preconfiguredGame?: Game,
    onGameCreated?: Function
}

function GameConfigurator({ preconfiguredGame, onGameCreated }: GameConfiguratorProps) {
    const { t } = useTranslation(['main'])
    const extraConfigurationComponents: Array<React.JSX.Element> = []

    React.useEffect(() => {
        const uid = window.crawlear && window?.crawlear.user && window?.crawlear.user.uid
        const isUserLoged = !!uid

        if (!isUserLoged && !isOffline) {
            //router.push("/")
        }    
        Analytics.pageview(`/gameconfigurator`)
    }, [])
    

    const [game, errorMessage, groups, onGameTypeChange, onLocationResolved, 
        onJudgeNumerChange, onPlayerNumerChange, onMaxPointsChange, 
        onMaxTimeChange, onZonesChange, onGatesChange, onNameChange,
        onGroupsChange, onIsPublicChange, onGameDirectorChange, 
        onRandomizePlayersOrder, createGame] = UseGameConfigurator({ preconfiguredGame, onGameCreated })

    extraConfigurationComponents.push(<MaxTimeAndPointsPicker key={0}
        onMaxPointsChange={onMaxPointsChange}
        onMaxTimeChange={onMaxTimeChange}
        time={game.maxTime}
        points={game.maxPoints}
        showTimePicker={true} />);

    if (game.gameType !== GAME_TYPE_KING) {
        extraConfigurationComponents.push(<ZonesPicker key={1}
            value={game.zones}
            onZonesChange={onZonesChange} />);
        extraConfigurationComponents.push(<GateProgressionPicker key={2}
            zones={game.zones}
            value={10}
            onGatesChange={onGatesChange} />);
        extraConfigurationComponents.push(<GroupsPicker key={3} 
            onGroupsChange={onGroupsChange} 
            value={1}
            minValue={1}
            maxValue={10}
            />)
        if (!isOffline) {
            extraConfigurationComponents.push(<PlayerController key={4}
                isForJudge={true}
                maxGroups={groups}
                inPlayers={game.judges}
                gameName={game.name}
                onGameDirectorChange={onGameDirectorChange}
                onPlayerNumerChange={onJudgeNumerChange} />);
        }
    }

    return (<>
        <ErrorBox message={errorMessage} />
        <div className="newGameContainer rounded rounded1">
            <div className="newGame">
                <div className="headerText bold">{t('description.nuevaPartida')}</div>
                <div className="newGameRow">
                    <span className="">{t('description.nombre')}</span>: <input value={game.name} className="newGameNameInput" type="text" onChange={onNameChange}></input>
                </div>
                <div className="newGameRow">
                    <span className="">{t('description.fecha')}</span>: {game.date.toLocaleString()}
                </div>
                <div className="newGameRow">
                    <span className="">{t('description.esPublica')}</span>: <input type="checkbox" checked={game.isPublic} onChange={onIsPublicChange}></input>
                </div>
                <div className="newGameRow">
                    <span className="">{t('description.localizacion')}</span>: 
                    <LocationResolver onLocationResolved={onLocationResolved}></LocationResolver>
                </div>
            </div>
        </div>

        <GameTypeController 
            selectedGameType={game.gameType}
            selectedPointsType={game.pointsType}
            onGameTypeChange={(selectedIndex) => {
                onGameTypeChange(selectedIndex);
            }
        } />

        {extraConfigurationComponents}

        <PlayerController gameName={game.name} 
            isForJudge={false}
            inPlayers={game.players}
            maxGroups={groups}
            onGameDirectorChange={()=>{}}
            onPlayerNumerChange={(players)=>{
                onPlayerNumerChange && onPlayerNumerChange(players);
            }
        }/>
        <input type="checkbox" onChange={onRandomizePlayersOrder}></input>{t('description.ordenRamdomJugadores')}
        <p>
            <button className="importantNote" 
                onClick={() => {
                    createGame(groups, game);
                }
            }>{t('description.crearjuego')}</button>
            <button
                onClick={() => {
                    window.location.reload();
                }
            }>{t('description.atras')}</button>
        </p>
    </>)
}


export default GameConfigurator;