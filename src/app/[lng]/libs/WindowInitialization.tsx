"use client"

import * as React from 'react'
import initPwa from '../../../pwa/initPwa'
import FirebaseBaseController from '../../../FirebaseBaseController'

function WindowInitialization() {
  React.useEffect(() => {
    if (window) {
      if (!window.crawlear || !window.crawlear.fbBase) {
        const fbBase = (window.crawlear && window.crawlear.fbBase) || new FirebaseBaseController()

        window.crawlear = window.crawlear || {}
        window.crawlear.fbBase = window.crawlear.fbBase || fbBase
      }
      initPwa();
    }
  }, [])

  return <></>
}

export default WindowInitialization
