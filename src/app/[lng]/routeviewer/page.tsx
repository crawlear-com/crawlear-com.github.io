"use client"

import * as React from 'react'
import RouteViewer from '../../../routepages/RouteViewer';
import ClientBootstrap from '../libs/ClientBootstrap';

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  let sParams = await searchParams
    let rid = sParams && sParams['rid']

  if (typeof(rid) === "object") {
    rid = rid[0]
  }

  if(rid) {
    return <ClientBootstrap onLoginDestiny=''>
      <RouteViewer rid={rid} />
    </ClientBootstrap>

  } else {
    return <>Not public route</>
  }


}