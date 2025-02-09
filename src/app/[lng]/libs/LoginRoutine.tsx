"use client"

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { createSession, removeSession } from '../../actions/auth-actions'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const DEFAULT_LOGGED_ROUTE = "/game"

async function OnLogout() {
  await removeSession()
}

function redirectToDestination(router: AppRouterInstance, onLoginDestiny: string ) {
  if (onLoginDestiny && onLoginDestiny.length > 0) {
      router.push(onLoginDestiny)
  } else if (typeof(onLoginDestiny) === 'undefined') {
    router.push(DEFAULT_LOGGED_ROUTE)
  }
}

export function OnLogin(router: AppRouterInstance, onLoginDestiny: string, callback: Function) {
  const fbBase = window.crawlear?.fbBase

  fbBase.getFullFirebase(async () => {
    await createSession(window.crawlear.user.uid)
    callback(LOGGED)
    redirectToDestination(router, onLoginDestiny)
  })
}

function tryToLogin(router: AppRouterInstance, onLoginDestiny: string, callback: Function) {
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
    if (window && (!window.crawlear || !window.crawlear.user)) {
      console.log("Try to login!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      if (isLogged.current === NOT_LOGGED) {
        isLogged.current = LOGGING
        console.log("LOGGIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        tryToLogin(router, onLoginDestiny, (isLoggedValue: number)=> {
          isLogged.current = isLoggedValue
        })
        //Analytics.init('G-J1NH6FT6E3')
        //Analytics.event('App','init',`${navigator.userAgent}`)
      }
    }
  }, [onLoginDestiny, router])

  return <></>
}

export default LoginInitialization