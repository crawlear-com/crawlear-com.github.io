import * as React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface SecuredComponentProps {
  children: React.JSX.Element
}

function SecuredComponent({ children }: SecuredComponentProps) {
  const session = cookies().get("crawlear_session")?.value || null;

  if (!session) {
    redirect('/')
  }

  return children
}

export default SecuredComponent