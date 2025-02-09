import * as React from 'react'
import Spinner from "../../../components/Spinner"
import { useTranslation } from '../../../app/i18n'

interface ButtonOrSpinnerProps {
    isLoading: boolean,
    onLoadData: React.MouseEventHandler<HTMLButtonElement>
}

async function ButtonOrSpinner({ isLoading, onLoadData }: ButtonOrSpinnerProps) {
    const { t } = await useTranslation('es', 'main')

    return isLoading ?
        <Spinner></Spinner> :
        <button title='loadButton' onClick={onLoadData}>{t('description.cargar')}</button>
}

export default ButtonOrSpinner