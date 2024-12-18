import * as React from 'react'
import { useTranslation } from 'react-i18next'
import type { Game } from '../../../games/Game'
import LocationResolver from './LocationResolver'

interface GameConfiguratorGameInfoProps {
    game: Game,
    onNameChange: React.ChangeEventHandler<HTMLInputElement>,
    onIsPublicChange: React.ChangeEventHandler<HTMLInputElement>,
    onLocationResolved: Function
}

function GameConfiguratorGameInfo({ game, onNameChange, onIsPublicChange, onLocationResolved }: GameConfiguratorGameInfoProps) {
    const { t } = useTranslation(['main'])

    return <div className="newGameContainer rounded rounded1">
        <div className="newGame">
            <div className="headerText bold">{t('description.nuevaPartida')}</div>
            <div className="newGameRow">
                <label htmlFor='gameName' className="formRequiredValue">{t('description.nombre')}</label>
                { !game.name && <div className='formError'>{ t('error.nonombre')} </div>}
                <input id="gameName" value={game.name} className="newGameNameInput" type="text" onChange={onNameChange}></input>
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
}

export default GameConfiguratorGameInfo