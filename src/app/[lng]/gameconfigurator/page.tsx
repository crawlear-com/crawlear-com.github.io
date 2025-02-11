import * as React from 'react'
import SecuredComponent from '../libs/SecuredComponent'
import ClientBootstrap from '../libs/ClientBootstrap'

export default function Page() {
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <h1>GameConfigurator</h1>
    </ClientBootstrap>
  </SecuredComponent>

}