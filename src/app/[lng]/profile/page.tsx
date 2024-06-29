import * as React from 'react'
import ClientBootstrap from 'src/app/libs/ClientBootstrap'
import UserViewer from 'src/modules/social/pages/UserViewer'

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams}: PageProps) {  
  let uid = searchParams && searchParams['uid']

  if (typeof(uid) === "object") {
    uid = uid[0]
  }
  
  if(uid) {
    return <ClientBootstrap onLoginDestiny=''>
      <UserViewer uid={uid} />
    </ClientBootstrap>
      
  } else {
    return <>Profile not available</>
  }  
}
