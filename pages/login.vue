<template>
  <div class="card" style="max-width:420px;margin:0 auto">
    <h1 style="margin:0 0 6px">Login</h1>
    <p class="muted">Masuk pakai email dan OTP.</p>

    <label class="lbl">Email</label>
    <input v-model="email" class="inp" placeholder="you@example.com" />

    <button class="btn" :disabled="loadingSend" @click="sendOtp">
      {{ loadingSend ? 'Sending...' : 'Send OTP' }}
    </button>

    <div v-if="sent" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--line)">
      <label class="lbl">OTP</label>
      <input v-model="otp" class="inp" placeholder="6 digit" />
      <button class="btn" :disabled="loadingVerify" @click="verifyOtp">
        {{ loadingVerify ? 'Verifying...' : 'Verify & Login' }}
      </button>
    </div>

    <p v-if="err" class="err">{{ err }}</p>
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
