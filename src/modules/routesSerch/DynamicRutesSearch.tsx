'use client'

import dynamic from 'next/dynamic'

const DynamicRutesSearch = dynamic(() => import('./RoutesSearch'), { ssr: false });
export default DynamicRutesSearch