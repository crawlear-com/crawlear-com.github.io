import * as React from 'react'
import Landing from '../../routepages/Landing'
import ClientBootstrap from './libs/ClientBootstrap'

interface PageProps {
    params: Promise<{ lng: string }>
}

export default async function Page({ params }: PageProps) {
    let seatchParams = await params

    return <ClientBootstrap onLoginDestiny='/game'>
        {/* @ts-expect-error Server Component */}
        <Landing lng={seatchParams.lng} />
    </ClientBootstrap>
}