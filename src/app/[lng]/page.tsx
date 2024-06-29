import * as React from 'react'
import Landing from '../../routepages/Landing'
import ClientBootstrap from '../libs/ClientBootstrap'

export default function Page({ params: { lng } }) {  
  return <ClientBootstrap onLoginDestiny='/game'>
    {/* @ts-expect-error Server Component */}
    <Landing lng={lng} />
  </ClientBootstrap>
}