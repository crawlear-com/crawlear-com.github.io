import * as React from 'react'
import withAuthorization from '../../../components/WithAuthorization'
import UserViewer from './UserViewer'


const UserViewerWithAuthorization = withAuthorization(UserViewer as React.FunctionComponent)

export default UserViewerWithAuthorization


