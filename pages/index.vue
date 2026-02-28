<template>
  <div class="stack">
    <!-- HERO -->
    <section class="hero card">
      <div class="heroGlow" />
      <div class="heroInner">
        <div class="heroLeft">
          <div class="pill">
            <span class="pillDot" />
            Premium Store
          </div>

          <h1 class="heroTitle">Upgrade ke Zeta Premium</h1>
          <p class="heroSub">
            Download link-only, akses fitur premium, dan prioritas lebih cepat.
            Login pakai email OTP untuk melihat dashboard.
          </p>

          <div class="heroCta">
            <a class="btn" href="/login">Login / Claim Premium</a>
            <a class="btnGhost" href="#pricing">Lihat Paket</a>
          </div>

          <div class="heroMeta">
            <div class="metaItem">
              <div class="metaTop">Fast</div>
              <div class="metaBot">Response lebih cepat</div>
            </div>
            <div class="metaItem">
              <div class="metaTop">Simple</div>
              <div class="metaBot">Cukup kirim link</div>
            </div>
            <div class="metaItem">
              <div class="metaTop">Priority</div>
              <div class="metaBot">Antrian premium</div>
            </div>
          </div>
        </div>

        <div class="heroRight">
          <div class="preview card">
            <div class="previewTop">
              <div class="dot" />
              <div class="dot" />
              <div class="dot" />
              <span class="previewTitle">Zeta Premium</span>
            </div>

            <div class="previewBody">
              <div class="line"></div>
              <div class="line short"></div>
              <div class="miniGrid">
                <div class="miniCard">
                  <div class="miniTitle">Link-only</div>
                  <div class="miniSub">No command</div>
                </div>
                <div class="miniCard">
                  <div class="miniTitle">HD Tools</div>
                  <div class="miniSub">Image enhance</div>
                </div>
                <div class="miniCard">
                  <div class="miniTitle">Downloader</div>
                  <div class="miniSub">TikTok/IG/YT</div>
                </div>
                <div class="miniCard">
                  <div class="miniTitle">Sticker</div>
                  <div class="miniSub">Auto convert</div>
                </div>
              </div>
            </div>
          </div>

          <div class="note">
            Pembayaran & aktivasi bisa kamu sambungin ke gateway kapan aja.
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="pricing">
      <div class="secHead">
        <h2 class="secTitle">Pilih paket</h2>
        <p class="muted">Mulai dari yang paling ringan sampai lifetime.</p>
      </div>

      <div class="grid">
        <article v-for="p in products" :key="p.slug" class="product card" :class="{ featured: p.featured }">
          <div class="productTop">
            <div class="badge" v-if="p.badge">{{ p.badge }}</div>
            <h3 class="productName">{{ p.name }}</h3>
            <p class="productDesc">{{ p.description }}</p>
          </div>

          <div class="priceRow">
            <div class="price">
              <span class="rp">Rp</span>
              <span class="amt">{{ formatID(p.price) }}</span>
            </div>
            <div class="per">{{ p.per }}</div>
          </div>

          <ul class="feat">
            <li v-for="(f, i) in p.features" :key="i">{{ f }}</li>
          </ul>

          <div class="actions">
            <a class="btn" href="/login">Beli / Login</a>
            <a class="btnGhost" href="/dashboard">Cek Status</a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const products = [
  {
    slug: 'zeta-premium-30d',
    name: 'Zeta Premium 30 Days',
    price: 25000,
    per: '/ 30 hari',
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
    per: '/ 90 hari',
    badge: 'Most Value',
    featured: true,
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
    per: '/ sekali bayar',
    badge: 'Lifetime',
    description: 'Sekali bayar, nikmatin premium jangka panjang.',
    features: [
      'Download link-only (tanpa command)',
      'Prioritas maksimal',
      'Bonus fitur/benefit ke depannya'
    ]
  }
]

const formatID = (n) => Number(n || 0).toLocaleString('id-ID')
</script>

<style scoped>
.stack{display:grid;gap:16px}

.hero{
  position: relative;
  overflow: hidden;
  padding: 18px;
}
.heroGlow{
  position:absolute;
  inset:-2px;
  background:
    radial-gradient(700px 350px at 15% 10%, rgba(118,169,255,.22), transparent 60%),
    radial-gradient(600px 320px at 85% 20%, rgba(155,123,255,.18), transparent 58%),
    radial-gradient(400px 240px at 50% 120%, rgba(255,255,255,.06), transparent 60%);
  pointer-events:none;
}
.heroInner{
  position:relative;
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 14px;
  align-items: stretch;
}
@media (max-width: 900px){
  .heroInner{grid-template-columns:1fr}
}

.pill{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding: 8px 10px;
  border: 1px solid rgba(255,255,255,.10);
  border-radius: 999px;
  background: rgba(255,255,255,.03);
  color: rgba(234,240,255,.80);
  font-size: 12px;
}
.pillDot{
  width: 8px; height: 8px; border-radius: 99px;
  background: rgba(118,169,255,1);
  box-shadow: 0 0 14px rgba(118,169,255,.45);
}

.heroTitle{
  margin: 12px 0 8px;
  font-size: 34px;
  letter-spacing: -.4px;
  line-height: 1.05;
}
.heroSub{
  margin: 0;
  max-width: 56ch;
  color: rgba(234,240,255,.72);
}

.heroCta{
  display:flex;
  gap:10px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.heroMeta{
  display:grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 10px;
  margin-top: 16px;
}
@media (max-width: 540px){
  .heroMeta{grid-template-columns:1fr}
}
.metaItem{
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  border-radius: 16px;
  padding: 10px 12px;
}
.metaTop{font-weight: 900}
.metaBot{font-size: 12px; color: rgba(234,240,255,.65); margin-top: 2px}

.preview{
  padding: 12px;
}
.previewTop{
  display:flex;
  align-items:center;
  gap: 8px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,.07);
}
.dot{width: 9px; height: 9px; border-radius: 99px; background: rgba(255,255,255,.12)}
.previewTitle{
  margin-left: 6px;
  font-weight: 900;
  color: rgba(234,240,255,.80);
  font-size: 13px;
}
.previewBody{padding-top: 10px}
.line{
  height: 10px;
  border-radius: 10px;
  background: rgba(255,255,255,.07);
  margin-bottom: 10px;
}
.short{width: 72%}
.miniGrid{
  display:grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 10px;
}
.miniCard{
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  border-radius: 16px;
  padding: 10px 12px;
}
.miniTitle{font-weight: 900; font-size: 13px}
.miniSub{color: rgba(234,240,255,.62); font-size: 12px; margin-top: 3px}

.note{
  margin-top: 10px;
  color: rgba(234,240,255,.60);
  font-size: 12px;
  padding: 10px 12px;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 16px;
  background: rgba(255,255,255,.02);
}

.secHead{margin-top: 4px}
.secTitle{margin: 0 0 6px; font-size: 18px}

.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.product{
  padding: 16px;
  position:relative;
}
.product.featured{
  border-color: rgba(118,169,255,.35);
  box-shadow: 0 0 0 1px rgba(118,169,255,.15), 0 24px 80px rgba(0,0,0,.55);
}
.badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  font-size: 12px;
  font-weight: 900;
  color: rgba(234,240,255,.85);
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  margin-bottom: 10px;
}
.productName{margin:0 0 6px; font-size: 16px}
.productDesc{margin:0; color: rgba(234,240,255,.68); font-size: 13px}

.priceRow{
  margin-top: 14px;
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,.07);
}
.price{display:flex; align-items:baseline; gap:8px}
.rp{color: rgba(234,240,255,.65); font-weight: 800}
.amt{font-size: 22px; font-weight: 950; letter-spacing: -.3px}
.per{color: rgba(234,240,255,.55); font-size: 12px}

.feat{
  margin: 12px 0 0;
  padding-left: 18px;
  color: rgba(234,240,255,.70);
  font-size: 13px;
  display:grid;
  gap: 8px;
}
.actions{
  margin-top: 14px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}
.actions a{display:inline-flex; align-items:center; justify-content:center}
</style>
