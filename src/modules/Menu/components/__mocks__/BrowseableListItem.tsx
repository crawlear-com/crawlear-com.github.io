import * as React from 'react'

interface BrowseableListItemProps {
    children: React.JSX.Element
}

const BrowseableListItem = ({ children }: BrowseableListItemProps) => {
    return <div>BrowseableListItem { children }</div>
}

export default BrowseableListItem