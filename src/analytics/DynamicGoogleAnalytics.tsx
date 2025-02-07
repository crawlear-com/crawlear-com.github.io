'use client'

import dynamic from 'next/dynamic'

const DynamicGoogleAnalytics = dynamic(() => import('./GoogleAnalytics'), { ssr: false });
export default DynamicGoogleAnalytics