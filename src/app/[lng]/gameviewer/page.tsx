"use client"

import * as React from 'react'
import SSFirebaseBaseController from '../../../SSFirebaseController';
import GameViewer from '../../../routepages/GameViewer';
import ClientBootstrap from '../libs/ClientBootstrap';

interface PageProps {
    params: Promise <{ lng: string }>
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: PageProps) {
    const fbBase = new SSFirebaseBaseController()
    let sParams = await searchParams
    const gid = sParams && sParams['gid']
    let game

    if(typeof(gid) === 'string') {
        game = await fbBase.getGame(gid)

        return <ClientBootstrap onLoginDestiny=''>
            { game ? <GameViewer gid={gid} onLogin={()=>{}} /> : <GameViewer gid={gid} onLogin={()=>{}} />}
        </ClientBootstrap>
    } else {
        return <>Not a public game</>
    }
}