import * as React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SESSION_COOKIE_NAME = "crawlear_session"

interface SecuredComponentProps {
  children: React.JSX.Element
}

async function SecuredComponent({ children }: SecuredComponentProps) {
    const cookieStore = await cookies()
    const session = cookieStore.get(SESSION_COOKIE_NAME)?.value || null;

    if (!session) {
      console.log("REDIRECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        redirect('/')
    }

    return children
}

export default SecuredComponent