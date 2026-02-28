<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-6">
      <div class="card card-soft p-4 p-md-5">
        <div class="badge-soft d-inline-flex align-items-center gap-2 mb-3">
          <i class="bi bi-shield-lock-fill"></i>
          AUTH
        </div>

        <h1 class="mb-1" style="font-weight: 900;">Login</h1>
        <p class="text-muted mb-4">Masuk pakai email dan OTP.</p>

        <label class="form-label text-muted">Email</label>
        <input v-model="email" class="form-control mb-3" placeholder="you@example.com" />

        <button class="btn btn-primary w-100" :disabled="loadingSend" @click="sendOtp">
          {{ loadingSend ? 'Sending...' : 'Send OTP' }}
        </button>

        <div v-if="sent" class="mt-4">
          <div class="text-muted mb-2" style="font-size: 13px;">
            OTP sudah dikirim. Cek Inbox/Spam.
          </div>

          <label class="form-label text-muted mt-2">OTP</label>
          <input v-model="otp" class="form-control mb-3" placeholder="6 digit" inputmode="numeric" />

          <button class="btn btn-primary w-100" :disabled="loadingVerify" @click="verifyOtp">
            {{ loadingVerify ? 'Verifying...' : 'Verify & Login' }}
          </button>
        </div>

        <div v-if="err" class="mt-3 text-danger" style="font-weight: 700;">
          {{ err }}
        </div>
      </div>
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
