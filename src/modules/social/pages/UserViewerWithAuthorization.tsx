import * as React from 'react'
import withAuthorization from '../../../components/WithAuthorization'
import PilotWall from './PilotWall'


const PilotWallWithAuthorization = withAuthorization(PilotWall as React.FunctionComponent)

export default PilotWallWithAuthorization


