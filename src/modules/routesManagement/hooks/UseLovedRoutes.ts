import * as React from 'react'
import Route from '../Route'

function UseLovedRoutes(): Array<Route> {
  const fb = window.crawlear.fb
  const [routes, setRoutes] = React.useState<Array<Route>>([])

  React.useEffect(() => {
    window.crawlear.user.uid && fb.getLovedRoutes(window.crawlear.user.uid, (route: Route) => {
      const newRoutes: Array<Route> = [...routes]
      newRoutes.push(route)
      setRoutes(newRoutes)
    }, () => {})
  }, [])


  return routes
}

export default UseLovedRoutes