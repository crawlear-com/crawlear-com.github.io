"use client"

import * as React from 'react'
import Analytics from 'src/Analytics'
import { useRouter } from 'next/navigation'
import { createSession, removeSession } from '../actions/auth-actions'

const DEFAULT_LOGGED_ROUTE = "/game"

async function OnLogout() {
  await removeSession()
}

function redirectToDestination(router, onLoginDestiny) {
  if (onLoginDestiny && onLoginDestiny.length > 0) {
      router.push(onLoginDestiny)
  } else if (typeof(onLoginDestiny) === 'undefined') {
    router.push(DEFAULT_LOGGED_ROUTE)
  }
}

export function OnLogin(router, onLoginDestiny, callback) {
  const fbBase = window.crawlear?.fbBase

  fbBase.getFullFirebase(async () => {
    await createSession(window.crawlear.user.uid)
    callback(LOGGED)
    redirectToDestination(router, onLoginDestiny)
  })
}

function tryToLogin(router, onLoginDestiny, callback) {
  const fbBase = window.crawlear?.fbBase
    
  fbBase.checkIfLogged(() => {
    OnLogin(router, onLoginDestiny, callback)
  }, () => {
    OnLogout()
    callback(NOT_LOGGED)
  })
}

interface LoginInitializationProps {
  onLoginDestiny: string
}

const NOT_LOGGED = 0
const LOGGED = 1
const LOGGING = 2

function LoginInitialization({ onLoginDestiny }: LoginInitializationProps): React.JSX.Element {
  const isLogged = React.useRef<number>(NOT_LOGGED)
  const router = useRouter()

  React.useEffect(() => {
    console.log('Login routine init')
    if (!window.crawlear || !window.crawlear.user) {
      if (isLogged.current === NOT_LOGGED) {
        isLogged.current = LOGGING
        tryToLogin(router, onLoginDestiny, (isLoggedValue)=> {
          isLogged.current = isLoggedValue
        })
        Analytics.init('G-J1NH6FT6E3')
        Analytics.event('App','init',`${navigator.userAgent}`)
      }
    }
  }, [])

  return <></>
}

export default LoginInitialization

