import * as React from 'react'
import { useTranslation } from 'react-i18next'

function GameResultTableHeader() {
    const { t } = useTranslation(['main'])

    return (<tr>
        <td></td>
        <td className=""></td>
        <td>{t("description.puntos")}</td>
        <td>{t("description.puertas")}</td>
        <td>{t("description.bonificacion")}</td>
        <td>{t("description.puntos")} {t("description.portiempo")}</td>
        <td></td>
    </tr>)
}

export default GameResultTableHeader