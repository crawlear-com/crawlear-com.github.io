import * as React from 'react'
import GoogleMapsLocation from '../modules/social/components/embed/GoogleMapsLocation'
import Utils from '../Utils'
import { GameUtils } from '../games/Game'
import { useTranslation } from 'src/app/i18n'

import '../resources/css/GameHeaderInfo.scss'

async function GameHeaderInfo({game}) {
    const { t } = await useTranslation('es', 'main')

    return <div className="gameHeaderInfo rounded"><div className="gameGameType">{t('gametype.modojuego')}: <span className="bold">{t(GameUtils.resolveGameTypeName(game.gameType))}</span></div>
        <div className="gamePointsType">{t('description.zonas')}: <span className="bold">{game.zones}</span></div> 
        <div className="gameIsPublic"><span className="bold">{game.isPublic ? t('description.esPublica') : ""}</span></div>
        {game.location && game.location.longitude && game.location.longitude ? 
                <><div className='gameName'>{t('description.localizacion')} :
                    </div><GoogleMapsLocation location={game.location} />
                </> : <></>}
        <div className="gamePointsType">{game.maxPoints>0 ? `${t('description.puntosmaximo')}: ${game.maxPoints}` : ''}</div>
        <div className="gamePointsType">{game.maxTime>0 ? `${t('description.tiempomaximo')}: ${Utils.printTime(Utils.millisToTime(game.maxTime))}` : ''}</div>
    </div>;
}

export default GameHeaderInfo;