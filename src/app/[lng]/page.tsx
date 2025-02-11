import * as React from 'react'
import Landing from '../../routepages/Landing'
import ClientBootstrap from './libs/ClientBootstrap'

interface PageProps {
    params: Promise<{ lng: string }>
}

export default async function Page({ params }: PageProps) {
    let searchParams = await params

    return <ClientBootstrap onLoginDestiny='/game'>
        <Landing lng={ searchParams.lng } />
    </ClientBootstrap>
}