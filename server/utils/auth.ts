import crypto from 'node:crypto'

const b64u = (buf: Buffer) =>
  buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')

const unb64u = (s: string) => {
  s = s.replace(/-/g, '+').replace(/_/g, '/')
  while (s.length % 4) s += '='
  return Buffer.from(s, 'base64')
}

export const normalizeEmail = (raw: string) => String(raw || '').trim().toLowerCase()

export const signSession = (payload: Record<string, any>, secret: string) => {
  const data = b64u(Buffer.from(JSON.stringify(payload)))
  const sig = crypto.createHmac('sha256', secret).update(data).digest()
  return `${data}.${b64u(sig)}`
}

export const verifySession = (token: string, secret: string) => {
  const [data, sig] = String(token || '').split('.')
  if (!data || !sig) return null
  const expected = b64u(crypto.createHmac('sha256', secret).update(data).digest())
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null
  try {
    return JSON.parse(unb64u(data).toString('utf8'))
  } catch {
    return null
  }
}
