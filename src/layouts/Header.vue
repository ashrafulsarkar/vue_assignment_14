<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import useAuthStore from '../stores/authStore';
const authStore = useAuthStore();

import useCartStore from '../stores/cartStore';
const cartStore = useCartStore();

import wishList from '../stores/wishList';
const wishListStore = wishList();

const isDropdownOpen = ref(false);
function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}
</script>

<template>
    <header class="shadow">
        <div class="flex px-4 py-4 items-center justify-between">
            <router-link to="/">Gadget bd Shop</router-link>
            <nav aria-labelledby="header-navigation">
                <ul class="mt-4 flex sm:mt-0">
                    <li class="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center  text-gray-600 hover:text-black hover:shadow">
                        <router-link to="/cart">
                            <div class="flex min-h-screen items-center justify-center">
                                <div class="relative scale-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    <span class="absolute -top-2 left-6 rounded-full p-0.5 px-2 text-black">{{ cartStore.totalItems }}</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    
                    <li v-if="authStore.isAuthenticated != true" class="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                        <router-link to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </router-link>
                    </li>
                    <li v-if="authStore.isAuthenticated == true" class="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                        <router-link to="/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </router-link>
                    </li>                    
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped></style>