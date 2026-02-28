<template>
  <div>
    <nav class="navbar fixed-top py-3" id="mainNavbar" :class="{ scrolled: isScrolled }">
      <div class="container px-3 d-flex align-items-center justify-content-between">
        <h1 class="main-title mb-0">
          <NuxtLink to="/" class="text-decoration-none" style="color: inherit;">
            Zeta Store
          </NuxtLink>
        </h1>

        <div class="d-flex align-items-center gap-2">
          <NuxtLink class="nav-link px-2" to="/">Home</NuxtLink>
          <NuxtLink class="nav-link px-2" to="/login">Login</NuxtLink>
          <NuxtLink class="nav-link px-2" to="/dashboard">Dashboard</NuxtLink>
          <NuxtLink class="nav-link px-2" to="/admin">Admin</NuxtLink>
        </div>
      </div>
    </nav>

    <div class="content-wrap">
      <div class="container px-3">
        <NuxtPage />
      </div>
    </div>

    <footer class="py-4">
      <div class="container px-3 text-center text-muted" style="font-size: 12px;">
        © {{ new Date().getFullYear() }} Zeta Store
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.nav-link{
  color: rgba(255,255,255,.78);
  font-size: 13px;
  border-radius: 12px;
}
.nav-link:hover{
  color: rgba(255,255,255,.95);
  background: rgba(255,255,255,.04);
}
</style>
