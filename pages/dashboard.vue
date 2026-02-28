<template>
  <div class="card">
    <h1 style="margin:0 0 6px">Dashboard</h1>
    <p class="muted">Login berhasil.</p>

    <div class="tile">
      <div style="display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.06)">
        <div style="opacity:.75;font-size:12px">Email</div>
        <div style="font-weight:900">{{ me?.user?.email }}</div>
      </div>
      <div style="display:flex;justify-content:space-between;gap:10px;padding:8px 0">
        <div style="opacity:.75;font-size:12px">Role</div>
        <div style="font-weight:900">{{ me?.user?.isAdmin ? 'Admin' : 'User' }}</div>
      </div>
    </div>

    <button class="btn" style="margin-top:14px;background:rgba(255,255,255,.10);color:var(--fg)" @click="logout">
      Logout
    </button>
  </div>
</template>

<script setup>
const me = await $fetch('/api/me').catch(() => null)

const logout = async () => {
  await $fetch('/api/auth/logout', { method: 'POST' }).catch(() => null)
  window.location.href = '/login'
}
</script>
