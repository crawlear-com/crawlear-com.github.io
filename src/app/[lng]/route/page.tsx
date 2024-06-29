import * as React from 'react'
import RoutesManagement from 'src/modules/routesManagement/pages/RoutesManagement'
import SecuredComponent from 'src/app/libs/SecuredComponent'
import ClientBootstrap from 'src/app/libs/ClientBootstrap'

export default function Page() {  
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <RoutesManagement />
    </ClientBootstrap>
  </SecuredComponent>
  
}