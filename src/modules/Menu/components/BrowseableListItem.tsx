import * as React from 'react'
import Analytics from '../../../Analytics'
import { useNavigate } from 'react-router-dom'

interface BrowseableProps {
  children: React.JSX.Element,
  path: string
}

function BrowseableListItem({ children, path }: BrowseableProps) {
  const navigate = useNavigate()

  function browseTo(path: string) {
      Analytics.event('navigation','menu', path);
      navigate(path)
  }
  return <li onClick={()=>{browseTo(path)}}>
    { children }
  </li>
}

export default BrowseableListItem