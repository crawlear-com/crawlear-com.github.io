import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'

function UseRoutesManagementMenu(): Array<any> {
  const [routes, setRoutes] = React.useState<Array<Route>>([])
  const [error, setError] = React.useState<string>('')
  const { t } = useTranslation(['main'])
  const fb = window.crawlear.fb

  React.useEffect(() => {
      window.crawlear && window.crawlear.user &&
      window.crawlear.user.uid && fb.getRoutesFromUser(window.crawlear.user.uid, (routes: Array<Route>) => {
          setRoutes(routes)
      }, () => {
        setError(t('error.errordecarga'))
      })
  }, [fb, t])

  function onDeleteRoute(i: number) {
      const newRoutes = [...routes]

      fb.removeRoute(newRoutes[i].rid, newRoutes[i].gpx?.gid, () => {
          delete newRoutes[i]
          setRoutes(newRoutes)
      }, () => {})
  }

  return [routes, onDeleteRoute, error]
}

export default UseRoutesManagementMenu