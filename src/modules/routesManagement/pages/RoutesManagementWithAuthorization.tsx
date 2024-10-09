import * as React from 'react'
import withAuthorization from '../../../components/WithAuthorization'
import RoutesManagement from './RoutesManagement'


const RoutesManagementWithAuthorization = withAuthorization(RoutesManagement as React.FunctionComponent)

export default RoutesManagementWithAuthorization