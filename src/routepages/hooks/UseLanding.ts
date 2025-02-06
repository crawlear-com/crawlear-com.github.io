import * as React from 'react'
import Analytics from '../../Analytics'

function UseLanding(onLogin: Function) {
  const [routeClicked, setRouteClicked] = React.useState<Boolean>(false)
  const fbBase = window.crawlear.fbBase
  
function onRouteMapClick() {
  setRouteClicked(true)
}

  function signInCallback() {
      onLogin && onLogin(true)
  }

  function clickOnGoogleSignIn() {
    fbBase.signInWithGoogle(signInCallback);
  }

  React.useEffect(() => {
      Analytics.pageview('/landing/')
  },[]);


  return [clickOnGoogleSignIn, onRouteMapClick, routeClicked]
}

export default UseLanding