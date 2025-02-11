import * as React from 'react'
import WindowInitialization from './WindowInitialization'
import LoginInitialization from './LoginRoutine'

interface ClientBootstrapProps {
  children: React.JSX.Element,
  onLoginDestiny: string
}

function ClientBootstrap({ children, onLoginDestiny }: ClientBootstrapProps) {
  return <>
    <WindowInitialization />
    <LoginInitialization onLoginDestiny={onLoginDestiny} />
    { children }
  </>
}

export default ClientBootstrap