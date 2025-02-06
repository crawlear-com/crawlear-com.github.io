import * as React from 'react'
import SecuredComponent from '../libs/SecuredComponent'
import GameManagement from '../../../modules/gameManagement/pages/GameManagement'
import ClientBootstrap from '../libs/ClientBootstrap'

export default function Page() {
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <GameManagement />
    </ClientBootstrap>
  </SecuredComponent>
}