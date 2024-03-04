import * as React from 'react';
import { useTranslation } from 'react-i18next'

interface GoogleMapsUrlProps {
    url: string
}

function GoogleMapsUrl({ url }: GoogleMapsUrlProps) {
    const { t } = useTranslation(['main'])

    return <a href={url} rel='noreferrer' target="_blank">{t('description.vergooglemaps')}</a>
}

export default GoogleMapsUrl
