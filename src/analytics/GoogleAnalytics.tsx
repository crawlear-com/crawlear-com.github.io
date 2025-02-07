"use client"

import Analytics from './Analytics'
import * as React from 'react'

interface GoogleAnalyticsProps {
    page: string
}

function GoogleAnalytics({ page }: GoogleAnalyticsProps) {
    React.useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            Analytics.pageview(page)
        }
    }, [page])

    return null
}

export default GoogleAnalytics