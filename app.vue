<template>
  <div class="bg">
    <div class="shell">
      <header class="header">
        <a class="brand" href="/">
          <div class="brandMark">
            <span class="brandDot" />
            <span class="brandText">Zeta Store</span>
          </div>
          <span class="brandTag">Premium & Add-ons</span>
        </a>

        <nav class="nav">
          <a class="navLink" href="/">Home</a>
          <a class="navLink" href="/login">Login</a>
          <a class="navLink" href="/dashboard">Dashboard</a>
          <a class="navLink" href="/admin">Admin</a>
        </nav>
      </header>

      <main class="main">
        <NuxtPage />
      </main>

      <footer class="footer">
        <span>© {{ new Date().getFullYear() }} Zeta Store</span>
        <span class="footerDot">•</span>
        <span class="muted">Built for speed</span>
      </footer>
    </div>
  </div>
</template>

<style>
:root{
  --bg0:#070B12;
  --bg1:#0B1320;
  --card:rgba(255,255,255,.04);
  --line:rgba(255,255,255,.10);
  --line2:rgba(255,255,255,.08);
  --fg:#EAF0FF;
  --muted:rgba(234,240,255,.70);
  --muted2:rgba(234,240,255,.55);
  --accent:#76A9FF;   /* primary */
  --accent2:#9B7BFF;  /* glow */
  --ok:#22c55e;
  --danger:#fca5a5;
  --shadow: 0 24px 80px rgba(0,0,0,.55);
  --shadow2: 0 10px 30px rgba(0,0,0,.35);
  --radius: 18px;
}

*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  color: var(--fg);
  background: radial-gradient(1200px 700px at 20% -10%, rgba(118,169,255,.18), transparent 55%),
              radial-gradient(1000px 650px at 110% 10%, rgba(155,123,255,.14), transparent 55%),
              linear-gradient(180deg, var(--bg0), var(--bg1));
  min-height:100vh;
}

a{color:inherit;text-decoration:none}
a:hover{opacity:1}

.bg{
  min-height:100vh;
  padding: 18px;
}

.shell{
  max-width: 1020px;
  margin: 0 auto;
}

.header{
  position: sticky;
  top: 10px;
  z-index: 20;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  padding: 12px 14px;
  border: 1px solid var(--line2);
  border-radius: var(--radius);
  background: rgba(10, 14, 24, .62);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: var(--shadow2);
}

.brand{
  display:flex;
  flex-direction:column;
  gap:3px;
  min-width: 160px;
}
.brandMark{
  display:flex;
  align-items:center;
  gap:10px;
}
.brandDot{
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,.25) 35%, rgba(118,169,255,.9));
  box-shadow: 0 0 18px rgba(118,169,255,.45);
}
.brandText{
  font-weight: 900;
  letter-spacing: .2px;
}
.brandTag{
  font-size: 12px;
  color: var(--muted2);
}

.nav{
  display:flex;
  gap:10px;
  flex-wrap: wrap;
  justify-content:flex-end;
}
.navLink{
  font-size: 13px;
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: .15s ease;
}
.navLink:hover{
  color: var(--fg);
  border-color: var(--line);
  background: rgba(255,255,255,.03);
}

.main{padding: 18px 0 42px}

.footer{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding: 14px 0 4px;
  color: var(--muted2);
  font-size: 12px;
}
.footerDot{opacity:.35}

/* reusable ui */
.card{
  border: 1px solid var(--line2);
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow2);
}

.btn{
  border: 1px solid transparent;
  background: linear-gradient(135deg, rgba(118,169,255,1), rgba(155,123,255,1));
  color: #071018;
  font-weight: 900;
  padding: 10px 12px;
  border-radius: 14px;
  cursor: pointer;
  transition: .15s ease;
}
.btn:hover{transform: translateY(-1px)}
.btn:disabled{opacity:.7;cursor:not-allowed;transform:none}

.btnGhost{
  border: 1px solid var(--line);
  background: rgba(255,255,255,.03);
  color: var(--fg);
  font-weight: 800;
  padding: 10px 12px;
  border-radius: 14px;
  cursor: pointer;
  transition: .15s ease;
}
.btnGhost:hover{background: rgba(255,255,255,.05)}

.inp{
  width:100%;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(0,0,0,.22);
  color: var(--fg);
  outline: none;
}
.inp:focus{
  border-color: rgba(118,169,255,.55);
  box-shadow: 0 0 0 4px rgba(118,169,255,.12);
}

.lbl{
  display:block;
  font-size: 12px;
  color: var(--muted2);
  margin: 10px 0 6px;
}

.muted{color: var(--muted)}
.err{color: var(--danger); margin-top: 12px}
</style>
