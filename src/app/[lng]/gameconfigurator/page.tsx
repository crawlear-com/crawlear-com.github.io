import * as React from 'react'
import GameConfigurator from 'src/modules/gameConfigurator/pages/GameConfigurator'
import SecuredComponent from 'src/app/libs/SecuredComponent'
import ClientBootstrap from 'src/app/libs/ClientBootstrap'

export default function Page() {  
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <GameConfigurator />
    </ClientBootstrap>
  </SecuredComponent>
  
}