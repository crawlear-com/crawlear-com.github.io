import * as React from 'react'
import WithAuthorization from '../../../components/WithAuthorization'
import GameConfigurator from './GameConfigurator'

const GameConfiguratorWithAuthorization = WithAuthorization(GameConfigurator as React.FunctionComponent)

export default GameConfiguratorWithAuthorization