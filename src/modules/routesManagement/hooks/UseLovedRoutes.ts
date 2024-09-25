import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'

function UseLovedRoutes(): Array<any> {
  const fb = window.crawlear.fb
  const { t } = useTranslation(['main'])
  const [routes, setRoutes] = React.useState<Array<Route>>([])
  const [error, setError] = React.useState<string>('')

  React.useEffect(() => {
    window.crawlear.user.uid && fb.getLovedRoutes(window.crawlear.user.uid, (route: Route) => {
      setRoutes(previousInputs => ([...previousInputs,route]))
    }, () => {
      setError(t('error.errordecarga'))
    })
  }, [])


  return [routes, error]
}

export default UseLovedRoutes