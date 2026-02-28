export default defineNuxtRouteMiddleware(async (to) => {
  const protectedPaths = ['/dashboard', '/admin']
  const needsAuth = protectedPaths.some(p => to.path.startsWith(p))
  if (!needsAuth) return

  const session = await $fetch('/api/me').catch(() => null)
  if (!session?.ok) return navigateTo('/login')

  if (to.path.startsWith('/admin') && !session?.user?.isAdmin) {
    return navigateTo('/dashboard')
  }
})
