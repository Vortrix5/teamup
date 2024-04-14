import { createRouter, createWebHistory } from 'vue-router/auto'
import { getCurrentUser } from "@/repositories/UserRepo";


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
})

const authRoutes = [ '/manager','admin'];
const roleRoutes = {  '/manager': 'manager', '/admin': 'admin'};

router.beforeEach((to, from, next) => {
  const currentUser = getCurrentUser();
  const requiresAuth = authRoutes.includes(to.path);
  const requiresRole = roleRoutes[to.path];

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresRole && (!currentUser || currentUser.role !== requiresRole)) {
    next('/');
  } else {
    next();
  }
});

export default router
