import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { UserStatusContext } from '../context/UserStatusContext'
import { useContext } from 'react'
import { isOffline } from '../pages/Offline'

const withAuthorization = (WrappedComponent: React.FunctionComponent) => (props: { from: string; to: string }) => {
  const userStatus = useContext(UserStatusContext)
  const WithAuth = (props: any) => {
    return <WrappedComponent {...props} />
  }

  if (!userStatus.isUserLoged && !isOffline) {
    return <Navigate state={{ from: props.from }} to={{ pathname: props.to }} />
  }

  return <WithAuth {...props}/>
}
export default withAuthorization