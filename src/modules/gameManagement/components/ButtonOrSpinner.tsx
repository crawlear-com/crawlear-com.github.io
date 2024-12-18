import * as React from 'react'
import Spinner from "../../../components/Spinner"
import { useTranslation } from 'react-i18next'

interface ButtonOrSpinnerProps {
    isLoading: boolean,
    onLoadData: React.MouseEventHandler<HTMLButtonElement>
}

function ButtonOrSpinner({ isLoading, onLoadData }: ButtonOrSpinnerProps) {
    const { t } = useTranslation(['main'])

    return isLoading ?
        <Spinner></Spinner> :
        <button title='loadButton' onClick={onLoadData}>{t('description.cargar')}</button>
}

export default ButtonOrSpinner