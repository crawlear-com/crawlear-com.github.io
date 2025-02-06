import * as React from 'react'
import ClientBootstrap from '../libs/ClientBootstrap';
import UserViewer from '../../../modules/social/pages/UserViewer'

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
      <UserViewer onLogout={()=>{}} uid={uid} />
    </ClientBootstrap>

  } else {
    return <>Profile not available</>
  }
}