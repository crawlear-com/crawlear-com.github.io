import * as React from 'react'
import { Suspense } from 'react'

interface SuspenseComponentProps {
    lazyComponent: React.ReactNode

}

function SuspenseComponent({ lazyComponent }: SuspenseComponentProps) {
    return <Suspense fallback={<div>Loading...</div>}>
        { lazyComponent }
        </Suspense>
}

export default SuspenseComponent