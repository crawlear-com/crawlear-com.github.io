import * as React from 'react'
import withAuthorization from '../../../components/WithAuthorization'
import GameManagement from './GameManagement'


const GameManagementWithAuthorization = withAuthorization(GameManagement as React.FunctionComponent)

export default GameManagementWithAuthorization