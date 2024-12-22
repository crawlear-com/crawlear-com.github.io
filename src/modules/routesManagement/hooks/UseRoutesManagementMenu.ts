import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'
import { findElementInArray } from '../../../Utils'

function UseRoutesManagementMenu(): Array<any> {
  const [routes, setRoutes] = React.useState<Array<Route>>([])
  const [error, setError] = React.useState<string>('')
  const { t } = useTranslation(['main'])
  const fb = window.crawlear.fb
  const [isCalled, setIsCalled] = React.useState(false)

  React.useEffect(() => {
      if (window.crawlear && window.crawlear.user && window.crawlear.user.uid && !isCalled) {
        setIsCalled(true)
        fb.getRoutesFromUser(window.crawlear.user.uid, (routes: Array<Route>) => {
            setRoutes(routes)
        }, () => {
          setError(t('error.errordecarga'))
        })
      }
  }, [fb, t, isCalled])

  function onDeleteRoute(rid: string) {
      const newRoutes = [...routes]
      let [route, position] = findElementInArray(newRoutes, rid, (item: Route, i: number) => item.rid === rid)

      if (route) {
        fb.removeRoute(route.rid, newRoutes[position].gpx?.gid, () => {
          newRoutes.splice(position, 1)
          setRoutes(newRoutes)
        }, () => {})
      }
  }

  return [routes, onDeleteRoute, error]
}

export default UseRoutesManagementMenu