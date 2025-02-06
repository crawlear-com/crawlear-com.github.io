import * as React from 'react'
import GameConfigurator from '../../../modules/gameConfigurator/pages/GameConfigurator'
import SecuredComponent from '../libs/SecuredComponent'
import ClientBootstrap from '../libs/ClientBootstrap'

export default function Page() {
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <GameConfigurator />
    </ClientBootstrap>
  </SecuredComponent>

}