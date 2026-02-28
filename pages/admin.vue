<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <div class="card card-soft p-4 p-md-5">
        <div class="badge-soft d-inline-flex align-items-center gap-2 mb-3">
          <i class="bi bi-shield-fill-check"></i>
          ADMIN
        </div>

        <h1 class="mb-1" style="font-weight: 900;">Admin Dashboard</h1>
        <p class="text-muted mb-4">Khusus admin (whitelist email di env).</p>

        <div class="row g-3">
          <div class="col-12 col-lg-4">
            <div class="card card-soft p-3">
              <div class="text-muted" style="font-size: 12px;">Admin</div>
              <div style="font-weight: 900; font-size: 16px;">{{ me?.user?.email }}</div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card card-soft p-3">
              <div class="text-muted" style="font-size: 12px;">Orders</div>
              <div style="font-weight: 900; font-size: 16px;">coming soon</div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card card-soft p-3">
              <div class="text-muted" style="font-size: 12px;">Webhook Logs</div>
              <div style="font-weight: 900; font-size: 16px;">coming soon</div>
            </div>
          </div>
        </div>

        <button class="btn btn-outline-light w-100 mt-4" @click="logout">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const me = await $fetch('/api/me').catch(() => null)

const logout = async () => {
  await $fetch('/api/auth/logout', { method: 'POST' }).catch(() => null)
  window.location.href = '/login'
}
</script>
