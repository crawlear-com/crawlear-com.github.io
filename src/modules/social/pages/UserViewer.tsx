"use client"

import * as React from 'react'
import { useTranslation } from '../../../app/i18n'
import UserProfile from '../components/UserProfile'
import LoadingLogo from '../components/LoadingLogo'
import GoogleAnalytics from '../../../analytics/GoogleAnalytics'
import UseUserViewer, { USER_TYPE_JUDGE, USER_TYPE_PILOT, USER_TYPE_ROUTE } from '../hooks/UseUserViewer'

import logo from '../../../resources/img/logo5.png'
import '../styles/UserViewer.scss'

interface UserViewerProps {
    uid: string,
    onLogout: Function
}

async function UserViewer({ uid, onLogout }: UserViewerProps) {
    const { t } = await useTranslation('es', 'landing')
    const fbBase = window.crawlear.fbBase
    const [user, userData, isVisible, onScreen, getUserType] = await UseUserViewer(uid)

    if (user.registrationDate && isVisible) {
        let userType = getUserType(userData)

        return <div className="userViewer">
            <GoogleAnalytics page={`${document.location.pathname}${document.location.search}`} />
            {!fbBase.isUserLogged() ? <a rel="noreferrer" href="https://crawlear.com" target="_blank"><img src={logo} className="notLoggedLogo" alt="web logo"></img></a> :
                <><div className='headerText bold sectionTitle'>{t('description.perfilsocial')}</div></>}
            <><UserProfile onLogout={onLogout} user={user} />
                <div className="statistics rounded rounded3">
                    <div className='headerText bold'>{t('description.estadisticas')}</div>
                    <div>{t('description.partidasdejuez')}: {userData.judgeGames || 0}</div>
                    <div>{t('description.partidascomopiloto')}: {userData.pilotGames || 0}</div>
                    <div>{t('description.rutas')}: { userData.routes || 0 }</div>
                    <p className='bold'>
                        {userType === USER_TYPE_JUDGE ? t('description.tendenciajuez') :
                        (userType === USER_TYPE_PILOT ? t('description.tendenciapiloto') :
                        userType === USER_TYPE_ROUTE ? t('description.tendenciaruta') : t('description.tendencianeutral'))}
                    </p>
                    <p>

                    </p>
                </div></>
        </div>
    } else {
        return <LoadingLogo onVisible={onScreen} />
    }
}

export default UserViewer;