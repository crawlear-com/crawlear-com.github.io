import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import FirebaseBaseController from './FirebaseBaseController'

const getFbBase =  () => (window.crawlear && window.crawlear.fbBase) || new FirebaseBaseController()

window.crawlear = window.crawlear || {}
window.crawlear.fbBase = window.crawlear.fbBase || getFbBase()

function useLoginProcess() {
  const fbBase = getFbBase()
  const navigate = useNavigate()
  const location = useLocation()
  const [stateLogged, setStateLogged] = React.useState(false)
  const route = location.pathname

  const onLogout = React.useCallback(()=> {
    setStateLogged(false)
  },[])

  const onLogin = React.useCallback(()=>{
    fbBase.getFullFirebase(() => {
      setStateLogged(true)

      if (route.length === 1) {
        navigate('/game')
      }
    })
  }, [fbBase, navigate, route.length])

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