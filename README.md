# Zeta Store (Nuxt 3) + Email OTP Auth (Vercel-ready)

Project template:
- Nuxt 3
- Email OTP login (6 digit)
- Upstash Redis for OTP storage + cooldown + attempt limit
- Cookie-based session (HMAC signed)
- Protected routes: /dashboard, /admin (admin via ADMIN_EMAILS)

## Quick start (Local)
1. Install deps
   npm i
2. Copy env
   cp .env.example .env
3. Run
   npm run dev

## Deploy (Vercel)
- Push this repo to GitHub
- Import in Vercel
- Add env vars from `.env.example`
- Deploy

## Routes
- /            Store home (dummy)
- /login       Email + OTP login
- /dashboard   User dashboard (protected)
- /admin       Admin dashboard (protected)
- /api/auth/request-otp  POST
- /api/auth/verify-otp   POST
- /api/auth/logout       POST
- /api/me                GET

## Notes
- OTP TTL 5 minutes
- OTP cooldown 60 seconds
- Max verify attempts: 5
- Session cookie TTL: 7 days
