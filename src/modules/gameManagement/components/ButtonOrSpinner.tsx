import * as React from 'react'
import Spinner from "../../../components/Spinner"
import { useTranslation } from 'react-i18next'

interface ButtonOrSpinnerProps {
    isLoading: boolean,
    setIsLoading: Function,
    onLoadData: Function
}

function ButtonOrSpinner({ isLoading, setIsLoading, onLoadData }: ButtonOrSpinnerProps) {
    const { t } = useTranslation(['main'])

    return isLoading ?
        <Spinner></Spinner> :
        <button title='loadButton' onClick={() => {
            setIsLoading(true)
            onLoadData()}
        }>{t('description.cargar')}</button>
}

export default ButtonOrSpinner