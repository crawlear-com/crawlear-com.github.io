import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'

function UseLovedRoutes(): Array<any> {
  const { t } = useTranslation(['main'])
  const [routes, setRoutes] = React.useState<Array<Route>>([])
  const [error, setError] = React.useState<string>('')

  React.useEffect(() => {
    const fb = window.crawlear.fb

    window.crawlear?.user?.uid && fb.getLovedRoutes(window.crawlear.user.uid, (route: Route) => {
      const newRoutes: Array<Route> = [...routes]
      newRoutes.push(route)
      setRoutes(newRoutes) 
    }, () => {
      setError(t('error.errordecarga'))
    })
  }, [window.crawlear.user])


  return [routes, error]
}

export default UseLovedRoutes