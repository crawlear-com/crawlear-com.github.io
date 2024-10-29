import * as React from 'react'
import SSFirebaseBaseController from 'src/SSFirebaseController'
import GameViewer from 'src/routepages/GameViewer'

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {
  const fbBase = new SSFirebaseBaseController()
  let gid = searchParams && searchParams['gid']



    return <>Not a public game</>
}