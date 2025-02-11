import * as React from 'react'
import { Link } from 'react-router-dom'

interface BrowseableProps {
  children: React.JSX.Element,
  path: string
}

function BrowseableListItem({ children, path }: BrowseableProps) {
  return <li>
    <Link to={path} onClick={() =>{ /*Analytics.event('navigation','menu', path); */ }}>
      { children }
    </Link>
  </li>
}

export default BrowseableListItem