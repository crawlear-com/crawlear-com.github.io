import * as React from 'react'
import { useTranslation } from 'react-i18next';
import BrowseableListItem from './BrowseableListItem';

function LinkList() {
    const { t } = useTranslation(['main'])

    return <ul>
        <BrowseableListItem path='/social'>{t("description.perfilsocial")}</BrowseableListItem>
        <BrowseableListItem path='/game'>{t("description.herramientajuego")}</BrowseableListItem>
        <BrowseableListItem path='/route'>{t("description.herramientaruta")}</BrowseableListItem>
        <li>-</li>
        <BrowseableListItem path='/privacypolicy'>{t("description.politicaprivacidad")}</BrowseableListItem>
        <BrowseableListItem path='/aboutus'>{t("description.aboutus")}</BrowseableListItem>
    </ul>

}

export default LinkList