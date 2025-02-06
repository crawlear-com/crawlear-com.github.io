import * as React from 'react'
import type { Metadata } from 'next'
import { languages } from '../i18n/settings'
import { dir } from 'i18next'
import { Montserrat } from 'next/font/google'
import Menu from '../../modules/Menu/Menu'
import { cookies } from 'next/headers';

import '../../resources/css/Base.scss'
import '../../resources/css/App.scss'
import '../../resources/css/Footer.scss'

const font = Montserrat({
  weight: '400',
  subsets: ["latin"],
  style: ["normal"],
})

interface RootLayoutProps {
  children: React.ReactNode,
  params: {
    lng: string
  }
}

export const metadata: Metadata = {
  title: 'Crawlear.com',
  description: 'Crawlear.com Your profesional Crawler Scoreboard and route repository',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }: RootLayoutProps ) {
  const session = cookies().get("crawlear_session")?.value || null;

  return <html lang={lng} dir={dir(lng)}>
    <head>
      <meta name="theme-color" content="#000000" />
      <meta property="og:image" content="https://crawlear.com/static/logo512.png" />
      <meta property="og:title" content="Crawlear.com Your profesional Crawler Scoreboard" />
      <meta property="og:description" content="Crawlear.com Your profesional Crawler Scoreboard" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="preconnect" href="https://www.gstatic.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-J1NH6FT6E3" as="script" />
      <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=UA-156750890-2&l=dataLayer&cx=c" as="script" />

      <title>crawlear.com</title>

      <script defer src="https://unpkg.com/pwacompat" crossOrigin="anonymous"></script>
      <script defer src="https://www.googletagmanager.com/gtag/js?id=G-HZVHX11YSD"></script>

    </head>
    <body className={font.className}>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <div className="App">
          <Menu session={session} />
          <div className="AppMainContainer">
          { children }
          </div>
        </div>
      </div>
      <footer>
    </footer>
    </body>
  </html>
}