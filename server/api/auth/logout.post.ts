import { setCookie } from 'h3'

export default defineEventHandler(async (event) => {
  setCookie(event, 'zeta_session', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })
  return { ok: true }
})
