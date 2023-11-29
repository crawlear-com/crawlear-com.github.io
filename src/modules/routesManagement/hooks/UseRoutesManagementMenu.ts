import * as React from 'react'
import Route from '../Route'

function UseRoutesManagementMenu(): Array<any> {
  const [routes, setRoutes] = React.useState<Array<Route>>([])
  const fb = window.crawlear.fb

  React.useEffect(() => {
      window.crawlear && window.crawlear.user && 
      window.crawlear.user.uid && fb.getRoutesFromUser(window.crawlear.user.uid, (routes: Array<Route>) => {
          setRoutes(routes)
      }, () => {})
  }, [])

  function onDeleteRoute(i: number) {
      const newRoutes = [...routes]

      fb.removeRoute(newRoutes[i].rid, newRoutes[i].gpx?.gid, () => {
          delete newRoutes[i]
          setRoutes(newRoutes)
      }, () => {})
  }

  return [routes, onDeleteRoute]
}

export default UseRoutesManagementMenu