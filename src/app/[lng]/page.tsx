import * as React from 'react'
import Landing from '../../routepages/Landing'
import ClientBootstrap from './libs/ClientBootstrap'

interface PageProps {
    params: {
        lng: string
    }
}

export default function Page({ params: { lng } }: PageProps) {
  return <ClientBootstrap onLoginDestiny='/game'>
    {/* @ts-expect-error Server Component */}
    <Landing lng={lng} />
  </ClientBootstrap>
}