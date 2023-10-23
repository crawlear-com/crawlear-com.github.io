import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Utils from '../../../../Utils'

function GoogleMapsUrl({latitude, longitude}) {
    const { t } = useTranslation()

    return <a href={Utils.getMapsURL(latitude, longitude)} rel='noreferrer' target="_blank">{t('description.vergooglemaps')}</a>
}

export default GoogleMapsUrl