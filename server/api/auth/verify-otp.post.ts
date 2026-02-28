import crypto from 'node:crypto'
import { kv } from '../../utils/kv'
import { normalizeEmail, signSession } from '../../utils/auth'
import { setCookie } from 'h3'

const OTP_MAX_ATTEMPTS = 5
const SESSION_TTL_SEC = 7 * 24 * 60 * 60

const sha256 = (s: string) => crypto.createHash('sha256').update(s).digest('hex')

export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}))
  const email = normalizeEmail(body?.email)
  const otp = String(body?.otp || '').trim()

  if (!email || !otp) {
    throw createError({ statusCode: 400, statusMessage: 'Email dan OTP wajib' })
  }

  const otpKey = `otp:${email}`
  const data: any = await kv.get(otpKey)

  if (!data?.otpHash) {
    throw createError({ statusCode: 400, statusMessage: 'OTP expired / tidak ditemukan' })
  }

  if ((data.attempts || 0) >= OTP_MAX_ATTEMPTS) {
    await kv.del(otpKey)
    throw createError({ statusCode: 429, statusMessage: 'Terlalu banyak percobaan' })
  }

  const ok = sha256(otp) === data.otpHash
  if (!ok) {
    data.attempts = (data.attempts || 0) + 1
    await kv.set(otpKey, data, { ex: 5 * 60 })
    throw createError({ statusCode: 400, statusMessage: 'OTP salah' })
  }

  await kv.del(otpKey)

  const secret = process.env.AUTH_COOKIE_SECRET || ''
  if (!secret) throw createError({ statusCode: 500, statusMessage: 'AUTH_COOKIE_SECRET belum diset' })

  const adminEmails = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map(v => v.trim().toLowerCase())
    .filter(Boolean)

  const isAdmin = adminEmails.includes(email)

  const token = signSession({ email, isAdmin, iat: Date.now() }, secret)

  setCookie(event, 'zeta_session', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_SEC
  })

  return { ok: true, isAdmin }
})
