<template>
  <div class="wrap">
    <header class="hdr">
      <a class="brand" href="/">
        <div class="logo">Z</div>
        <div class="meta">
          <div class="title">Zeta Store</div>
          <div class="sub">Premium & Add-ons</div>
        </div>
      </a>

      <nav class="nav">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/admin">Admin</a>
        <a href="/login">Login</a>
      </nav>
    </header>

    <main class="main">
      <NuxtPage />
    </main>

    <footer class="ftr">
      © {{ new Date().getFullYear() }} Zeta Store
    </footer>
  </div>
</template>

<style>
:root{
  --bg:#0b141a;
  --fg:#e6edf3;
  --muted:rgba(230,237,243,.78);
  --line:rgba(255,255,255,.10);
  --card:rgba(255,255,255,.03);
  --btn:#60a5fa;
  --btnfg:#071018;
  --danger:#fca5a5;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--fg);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial}
a{color:var(--fg);text-decoration:none;opacity:.92}
a:hover{opacity:1}
.wrap{max-width:980px;margin:0 auto;padding:18px}
.hdr{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 0;border-bottom:1px solid var(--line)}
.brand{display:flex;gap:10px;align-items:center}
.logo{width:34px;height:34px;border-radius:12px;background:rgba(255,255,255,.10);display:grid;place-items:center;font-weight:900}
.meta{line-height:1.1}
.title{font-weight:900;letter-spacing:.2px}
.sub{font-size:12px;color:var(--muted)}
.nav{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}
.main{padding:18px 0 40px}
.ftr{padding-top:14px;border-top:1px solid var(--line);font-size:12px;color:var(--muted)}
.card{border:1px solid var(--line);border-radius:16px;padding:18px;background:var(--card)}
.btn{margin-top:12px;width:100%;padding:10px 12px;border-radius:12px;border:0;background:var(--btn);color:var(--btnfg);font-weight:900;cursor:pointer}
.btn:disabled{opacity:.7;cursor:not-allowed}
.inp{width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.2);color:var(--fg);outline:none}
.lbl{display:block;font-size:12px;color:var(--muted);margin:10px 0 6px}
.muted{margin:0 0 16px;color:var(--muted)}
.err{margin-top:12px;color:var(--danger)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}
.tile{border:1px solid var(--line);border-radius:16px;padding:14px;background:var(--card)}
.tile h3{margin:0 0 6px}
.tile p{margin:0;color:var(--muted);font-size:13px}
.price{margin-top:12px;font-weight:900}
</style>
