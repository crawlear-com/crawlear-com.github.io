import * as React from 'react'
import dynamic from 'next/dynamic'

const DynamicAboutUs = dynamic(() => import('../../../routepages/AboutUs'), {
  loading: () => <p>Loading About us page...</p>,
  ssr: false
})

export default function Page() {
  return <DynamicAboutUs />
}