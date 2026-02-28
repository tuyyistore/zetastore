<template>
  <div>
    <div class="card card-soft p-4 p-md-5 mb-4">
      <div class="badge-soft d-inline-flex align-items-center gap-2 mb-3">
        <i class="bi bi-stars"></i>
        Premium Store
      </div>

      <h1 class="mb-2" style="font-weight: 900; letter-spacing: -.2px;">
        Upgrade ke Zeta Premium
      </h1>
      <p class="text-muted mb-4" style="max-width: 60ch;">
        Download link-only, akses fitur premium, dan prioritas lebih cepat. Login pakai email OTP untuk melihat dashboard.
      </p>

      <div class="d-flex gap-2 flex-wrap">
        <NuxtLink to="/login" class="btn btn-primary">Login / Claim Premium</NuxtLink>
        <a href="#pricing" class="btn btn-outline-light">Lihat Paket</a>
      </div>
    </div>

    <div id="pricing" class="mb-3">
      <h2 class="mb-1" style="font-weight: 900;">Pilih Paket</h2>
      <div class="text-muted">Mulai dari yang paling ringan sampai lifetime.</div>
    </div>

    <div class="row g-3">
      <div v-for="p in products" :key="p.slug" class="col-12 col-lg-4">
        <div class="card card-soft p-4 h-100">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="badge-soft">{{ p.badge }}</span>
            <span class="text-muted" style="font-size: 12px;">{{ p.per }}</span>
          </div>

          <h3 class="mb-2" style="font-weight: 900;">{{ p.name }}</h3>
          <p class="text-muted mb-3">{{ p.description }}</p>

          <div class="mb-3" style="font-weight: 950; font-size: 22px;">
            Rp {{ formatID(p.price) }}
          </div>

          <ul class="text-muted" style="padding-left: 18px;">
            <li v-for="(f, i) in p.features" :key="i">{{ f }}</li>
          </ul>

          <div class="mt-auto d-flex gap-2 flex-wrap">
            <NuxtLink to="/login" class="btn btn-primary w-100">Beli / Login</NuxtLink>
            <NuxtLink to="/dashboard" class="btn btn-outline-light w-100">Cek Status</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    slug: 'zeta-premium-30d',
    name: 'Zeta Premium 30 Days',
    price: 25000,
    per: '30 hari',
    badge: 'Starter',
    description: 'Cocok buat coba premium dengan harga ringan.',
    features: [
      'Download link-only (tanpa command)',
      'Prioritas lebih cepat dibanding free',
      'Akses fitur premium standar'
    ]
  },
  {
    slug: 'zeta-premium-90d',
    name: 'Zeta Premium 90 Days',
    price: 65000,
    per: '90 hari',
    badge: 'Most Value',
    description: 'Paket paling worth untuk pemakaian rutin.',
    features: [
      'Download link-only (tanpa command)',
      'Prioritas tinggi (lebih cepat)',
      'Akses fitur premium + stabil'
    ]
  },
  {
    slug: 'zeta-lifetime',
    name: 'Zeta Premium Lifetime',
    price: 199000,
    per: 'sekali bayar',
    badge: 'Lifetime',
    description: 'Sekali bayar, nikmatin premium jangka panjang.',
    features: [
      'Download link-only (tanpa command)',
      'Prioritas maksimal',
      'Bonus benefit ke depannya'
    ]
  }
]

const formatID = (n) => Number(n || 0).toLocaleString('id-ID')
</script>
