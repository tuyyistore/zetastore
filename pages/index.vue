<template>
  <div>
    <h1 style="margin:0 0 10px">Buy Premium</h1>
    <p class="muted">Pilih paket premium. Login pakai email OTP untuk melihat dashboard.</p>

    <div class="grid">
      <div class="tile" v-for="p in products" :key="p.slug">
        <h3>{{ p.name }}</h3>
        <p>{{ p.description }}</p>
        <div class="price">Rp {{ formatID(p.price) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  { slug: 'zeta-premium-30d', name: 'Zeta Premium 30 Days', price: 25000, description: 'Akses premium 30 hari: download link-only, lebih cepat.' },
  { slug: 'zeta-premium-90d', name: 'Zeta Premium 90 Days', price: 65000, description: 'Akses premium 90 hari: lebih hemat dan stabil.' },
  { slug: 'zeta-lifetime', name: 'Zeta Premium Lifetime', price: 199000, description: 'Sekali bayar: akses premium selamanya (sesuai ketentuan).' }
]
const formatID = (n) => Number(n || 0).toLocaleString('id-ID')
</script>
