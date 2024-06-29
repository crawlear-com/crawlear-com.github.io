import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/:lng*','/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(req) {
  let lng

  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (!languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
      !req.nextUrl.pathname.startsWith('/_next') && 
      !req.nextUrl.pathname.endsWith('.png') &&
      !req.nextUrl.pathname.endsWith('manifest.json') &&
      !req.nextUrl.pathname.endsWith('favicon.ico') &&
      !req.nextUrl.pathname.endsWith('service-worker-dev.js') &&
      !req.nextUrl.pathname.endsWith('sw.js')) {

      return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  //component library images: TO VALIDATE
  if ((req.nextUrl.pathname.endsWith('.png')) && (req.nextUrl.pathname.indexOf(`/${lng}/`)>=0)) {
    const lngString = `/${lng}`
    const newUrl = new URL(`${req.nextUrl.href.replace(lngString, '')}`, req.url)

    return NextResponse.redirect(newUrl.href)
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}