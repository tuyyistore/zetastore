import crypto from 'node:crypto'
import { kv } from '../../utils/kv'
import { normalizeEmail } from '../../utils/auth'
import { sendEmail } from '../../utils/mail'

const OTP_TTL_SEC = 5 * 60
const COOLDOWN_SEC = 60

const sha256 = (s: string) => crypto.createHash('sha256').update(s).digest('hex')
const makeOtp = () => String(Math.floor(100000 + Math.random() * 900000))

export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}))
  const email = normalizeEmail(body?.email)

  if (!email || !email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'Email tidak valid' })
  }

  const cdKey = `otp_cd:${email}`
  const cd = await kv.get(cdKey)
  if (cd) {
    throw createError({ statusCode: 429, statusMessage: 'Tunggu 60 detik sebelum request OTP lagi' })
  }

  const otp = makeOtp()
  const otpKey = `otp:${email}`

  await kv.set(otpKey, {
    otpHash: sha256(otp),
    attempts: 0,
    createdAt: Date.now()
  }, { ex: OTP_TTL_SEC })

  await kv.set(cdKey, { ok: true }, { ex: COOLDOWN_SEC })

  const subject = 'Zeta Store OTP'
  const html = `
  <div style="font-family:Arial,sans-serif;line-height:1.5">
    <h2 style="margin:0 0 10px">Zeta Store OTP</h2>
    <p style="margin:0 0 12px">Kode login kamu:</p>
    <div style="font-size:28px;font-weight:800;letter-spacing:3px;margin:0 0 12px">${otp}</div>
    <p style="margin:0 0 12px">Berlaku 5 menit.</p>
    <p style="margin:0;opacity:.75">Jika bukan kamu, abaikan email ini.</p>
  </div>`

  await sendEmail(email, subject, html)

  return { ok: true }
})
