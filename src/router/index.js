import { createRouter, createWebHistory } from 'vue-router';
import useAuthStore from '../stores/authStore';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [

		{
			path: '/',
			children: [
				{
					path: 'login',
					name: 'login',
					component: () => import('../views/auth/Login.vue')
				},
				{
					path: 'register',
					name: 'register',
					component: () => import('../views/auth/Register.vue')
				},
				{
					path: 'verify',
					name: 'verify',
					component: () => import('../views/auth/Verification.vue')
				},
				{
					path: 'forget-password',
					name: 'forget-password',
					component: () => import('../views/auth/PasswordForget.vue')
				},
				{
					path: 'reset-password',
					name: 'reset-password',
					component: () => import('../views/auth/PasswordReset.vue')
				},
				{
					path: 'profile',
					name: 'profile',
					component: () => import('../views/Profile.vue')
				},

				{
					path: '',
					name: 'home',
					component: () => import('../views/Shop.vue')
				},
				{
					path: 'product/list',
					name: 'product-list',
					component: () => import('../components/product/ProductList.vue')
				},
				{
					path: 'product/details/:id',
					name: 'product-details',
					component: () => import('../components/product/ProductDetails.vue')
				},
				{
					path: 'cart',
					name: 'cart',
					component: () => import('../views/Cart.vue')
				},
				{
					path: 'checkout',
					name: 'checkout',
					component: () => import('../views/Checkout.vue')
				},
				{
					path: 'thankyou',
					name: 'thankyou',
					component: () => import('../views/Thankyou.vue')
				},
			],
		},

	]
})

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();

	authStore.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

	if (to.meta.requiresAuth && authStore.isAuthenticated != true) {
		next('/login');
	} else {
		next();
	}
});

export default router