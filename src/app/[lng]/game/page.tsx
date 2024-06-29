import * as React from 'react'
import SecuredComponent from 'src/app/libs/SecuredComponent'
import GameManagement from '../../../modules/gameManagement/pages/GameManagement'
import ClientBootstrap from 'src/app/libs/ClientBootstrap'

export default function Page({ params: { lng } }) {
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <GameManagement />
    </ClientBootstrap>
  </SecuredComponent>
}