import * as React from 'react'
import PilotWall from '../../../modules/social/pages/PilotWall' 
import ClientBootstrap from 'src/app/libs/ClientBootstrap'
import SecuredComponent from 'src/app/libs/SecuredComponent'

export default function Page() {  
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <PilotWall />
    </ClientBootstrap>
  </SecuredComponent>
  
}