'use server';

import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = "crawlear_session"

export async function createSession(uid: string) {
    console.log("entra!")
  cookies().set(SESSION_COOKIE_NAME, uid, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // One day
    path: '/',
  });
}

export async function removeSession() {
  cookies().delete(SESSION_COOKIE_NAME);
}