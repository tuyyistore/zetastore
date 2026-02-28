import { getCookie } from 'h3'
import { verifySession } from '../utils/auth'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'zeta_session') || ''
  const secret = process.env.AUTH_COOKIE_SECRET || ''
  if (!token || !secret) return { ok: false }

  const user = verifySession(token, secret)
  if (!user?.email) return { ok: false }

  return { ok: true, user }
})
