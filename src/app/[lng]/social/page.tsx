import * as React from 'react'
import PilotWall from '../../../modules/social/pages/PilotWall'
import SecuredComponent from '../libs/SecuredComponent'
import ClientBootstrap from '../libs/ClientBootstrap'

export default function Page() {
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <PilotWall onLogout={()=>{}} />
    </ClientBootstrap>
  </SecuredComponent>

}