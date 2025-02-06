"use client"

import * as React from 'react'
import initPwa from '../../../pwa/initPwa'
import FirebaseController from '../../../FirebaseController'

function WindowInitialization() {
  React.useEffect(() => {
    if (!window.crawlear || !window.crawlear.fbBase) {
      const fbBase = (window.crawlear && window.crawlear.fbBase) || new FirebaseController()

      window.crawlear = window.crawlear || {}
      window.crawlear.fbBase = window.crawlear.fbBase || fbBase
    }
    initPwa();
  }, [])

  return <></>
}

export default WindowInitialization
