import * as React from 'react'
import FirebaseBaseController from '../FirebaseBaseController'

window.crawlear = window.crawlear || {}
window.crawlear.fbBase = window.crawlear.fbBase || new FirebaseBaseController()

function useLoginProcess(onLoginCallback: Function) {
  const fbBase = window.crawlear.fbBase
  const [stateLogged, setStateLogged] = React.useState(false)
  const onLogout = React.useCallback(()=> {
    setStateLogged(false)
  },[])

  const onLogin = React.useCallback(()=>{
    fbBase.getFullFirebase(() => {
      setStateLogged(true)
      onLoginCallback()
    })
  }, [fbBase, onLoginCallback])

  React.useEffect(() => {
    fbBase.checkIfLogged(() => {
      onLogin()
    }, () => {
      onLogout()
    })
  }, [fbBase, onLogin, onLogout])

  return [stateLogged, onLogin, onLogout]
}

export default useLoginProcess