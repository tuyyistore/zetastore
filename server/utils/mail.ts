export const sendEmail = async (to: string, subject: string, html: string) => {
  const apiKey = process.env.RESEND_API_KEY || ''
  const from = process.env.MAIL_FROM || ''

  if (!apiKey) throw new Error('RESEND_API_KEY belum diset')
  if (!from) throw new Error('MAIL_FROM belum diset')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to, subject, html })
  })

  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(json?.message || 'Gagal kirim email')
  }
  return json
}
