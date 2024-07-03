import * as React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SESSION_COOKIE_NAME = "crawlear_session"

interface SecuredComponentProps {
  children: React.JSX.Element
}

function SecuredComponent({ children }: SecuredComponentProps) {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;

  if (!session) {
    redirect('/')
  }

  return children
}

export default SecuredComponent