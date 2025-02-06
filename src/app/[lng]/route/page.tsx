import * as React from 'react'
import RoutesManagement from '../../../modules/routesManagement/pages/RoutesManagement'
import SecuredComponent from '../libs/SecuredComponent'
import ClientBootstrap from '../libs/ClientBootstrap'

export default function Page() {
  return <SecuredComponent>
    <ClientBootstrap onLoginDestiny=''>
      <RoutesManagement />
    </ClientBootstrap>
  </SecuredComponent>

}