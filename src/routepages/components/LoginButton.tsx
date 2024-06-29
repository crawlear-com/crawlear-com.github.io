"use client"

import * as React from 'react'
import { OnLogin } from 'src/app/libs/LoginRoutine'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import image from '../styles/img/btn_google_signin_light_pressed_web.webp'

function LoginButton() {
  const router = useRouter()
  
  function clickOnGoogleSignIn() {
    const fbBase = window.crawlear?.fbBase
  
    fbBase.signInWithGoogle(() => {
      OnLogin(router, '/game', ()=>{})
    })
  }

  return <Image width={191} height={46} className="crawlerImageSignIn" loading="lazy" src={image.src} alt="google sign in" onClick={clickOnGoogleSignIn} />
}

export default LoginButton