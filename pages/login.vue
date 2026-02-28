<template>
  <div class="wrap">
    <div class="card loginCard">
      <div class="top">
        <div class="kicker">Email OTP</div>
        <h1 class="title">Login</h1>
        <p class="muted">Masuk pakai email dan OTP (berlaku 5 menit).</p>
      </div>

      <label class="lbl">Email</label>
      <input v-model="email" class="inp" placeholder="you@example.com" />

      <button class="btn full" :disabled="loadingSend" @click="sendOtp">
        {{ loadingSend ? 'Sending...' : 'Send OTP' }}
      </button>

      <div v-if="sent" class="otpBox">
        <div class="otpHint">OTP sudah dikirim. Cek Inbox/Spam.</div>

        <label class="lbl">OTP</label>
        <input v-model="otp" class="inp" placeholder="6 digit" inputmode="numeric" />

        <button class="btn full" :disabled="loadingVerify" @click="verifyOtp">
          {{ loadingVerify ? 'Verifying...' : 'Verify & Login' }}
        </button>
      </div>

      <p v-if="err" class="err">{{ err }}</p>
    </div>
  </div>
</template>

<script setup>
const email = ref('')
const otp = ref('')
const sent = ref(false)
const err = ref('')
const loadingSend = ref(false)
const loadingVerify = ref(false)

const sendOtp = async () => {
  err.value = ''
  loadingSend.value = true
  try {
    await $fetch('/api/auth/request-otp', { method: 'POST', body: { email: email.value } })
    sent.value = true
  } catch (e) {
    err.value = e?.data?.message || e?.statusMessage || 'Gagal kirim OTP'
  } finally {
    loadingSend.value = false
  }
}

const verifyOtp = async () => {
  err.value = ''
  loadingVerify.value = true
  try {
    const res = await $fetch('/api/auth/verify-otp', { method: 'POST', body: { email: email.value, otp: otp.value } })
    if (res?.isAdmin) window.location.href = '/admin'
    else window.location.href = '/dashboard'
  } catch (e) {
    err.value = e?.data?.message || e?.statusMessage || 'OTP salah / expired'
  } finally {
    loadingVerify.value = false
  }
}
</script>

<style scoped>
.wrap{display:flex;justify-content:center;padding: 22px 0}
.loginCard{width:100%;max-width:440px;padding: 18px}
.top{padding-bottom: 10px}
.kicker{
  display:inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  color: rgba(234,240,255,.75);
  font-size: 12px;
  font-weight: 900;
}
.title{margin: 10px 0 6px; font-size: 22px}
.full{width:100%}
.otpBox{
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,.07);
}
.otpHint{
  font-size: 12px;
  color: rgba(234,240,255,.65);
  padding: 10px 12px;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 16px;
  background: rgba(255,255,255,.02);
  margin-bottom: 10px;
}
</style>
