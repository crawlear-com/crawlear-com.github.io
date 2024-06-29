import * as React from 'react'
import GameViewer from 'src/routepages/GameViewer'
import ClientBootstrap from 'src/app/libs/ClientBootstrap'

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: PageProps) {
  let gid = searchParams && searchParams['gid']

  if (typeof(gid) === "object") {
    gid = gid[0]
  }

  if(gid) {
    return <ClientBootstrap onLoginDestiny=''>
      <GameViewer gid={gid} />
    </ClientBootstrap>
      
  } else {
    return <>Not a public game</>
  }

  
}