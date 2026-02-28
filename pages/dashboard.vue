<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-8">
      <div class="card card-soft p-4 p-md-5">
        <div class="badge-soft d-inline-flex align-items-center gap-2 mb-3">
          <i class="bi bi-person-check-fill"></i>
          USER
        </div>

        <h1 class="mb-1" style="font-weight: 900;">Dashboard</h1>
        <p class="text-muted mb-4">Login berhasil.</p>

        <div class="card card-soft p-3">
          <div class="d-flex justify-content-between py-2 border-bottom" style="border-color: rgba(255,255,255,.08) !important;">
            <div class="text-muted" style="font-size: 12px;">Email</div>
            <div style="font-weight: 900;">{{ me?.user?.email }}</div>
          </div>
          <div class="d-flex justify-content-between py-2">
            <div class="text-muted" style="font-size: 12px;">Role</div>
            <div style="font-weight: 900;">{{ me?.user?.isAdmin ? 'Admin' : 'User' }}</div>
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
