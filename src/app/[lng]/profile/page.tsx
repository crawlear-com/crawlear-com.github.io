import * as React from 'react'
import ClientBootstrap from '../libs/ClientBootstrap';
import UserViewer from '../../../modules/social/pages/UserViewer'

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams}: PageProps) {
  const params = await searchParams

  let uid = params && params['uid']

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