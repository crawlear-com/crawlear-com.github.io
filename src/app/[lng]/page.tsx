import Landing from '../../pages/Landing'
import * as React from 'react'
import { redirect } from 'next/navigation'
import FirebaseBaseController from '../../FirebaseBaseController'

//import '../../Error.js'

const TRUE = 1
const FALSE = 0

export default function Page({ params: { lng } }) {
  function onLogin() {
      redirect('/game')
  }
  
  return <Landing lng={lng} onLogin={onLogin} />
}