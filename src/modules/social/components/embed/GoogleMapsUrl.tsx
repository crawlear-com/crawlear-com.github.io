import * as React from 'react';
import { useTranslation } from '../../../../app/i18n/index'

interface GoogleMapsUrlProps {
    url: string,
    lng: string
}

async function GoogleMapsUrl({ url, lng }: GoogleMapsUrlProps) {
    const { t } = await useTranslation(lng, ['main'])

    return <a href={url} rel='noreferrer' target="_blank">{t('description.vergooglemaps')}</a>
}

export default GoogleMapsUrl
