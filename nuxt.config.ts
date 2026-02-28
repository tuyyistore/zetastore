export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@/assets/css/gateway.css'
  ]
})
