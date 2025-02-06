import * as React from 'react'
import RouteViewer from '../../../routepages/RouteViewer';
import ClientBootstrap from '../libs/ClientBootstrap';

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: PageProps) {
  let rid = searchParams && searchParams['rid']

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