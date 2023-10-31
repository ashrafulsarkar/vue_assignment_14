<script setup>
import useCartStore from '../stores/cartStore';
const cartStore = useCartStore()
function checkout() {
    
}
</script>
<template>
    <div class="my-4 grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
            <p class="text-xl font-medium">Order Summary</p>
            <div v-for="product in cartStore.items" class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    :src="product.product.thumbnail" alt="" />
                    <div class="flex w-full flex-col px-4 py-4">
                        <span class="font-semibold">{{ product.product.title }}</span>
                        <p class="text-lg font-bold">${{ product.product.price * product.quantity }}</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="px-4 pt-8">
            <p class="text-xl font-medium">Payment Details</p>
            <p class="text-gray-400 mb-6">Complete your order by providing your payment details.</p>
            <div class="bg-gray-50 px-4 pt-4">
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-2xl font-semibold text-gray-900">${{cartStore.totalPrice}}</p>
                </div>
                <router-link class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white checkout-btn" to="/thankyou" @click="cartStore.empty">Place Order</router-link>
            </div>
        </div>
    </div>
</template>
<style scope>
.checkout-btn{
    display: block;
    text-align: center;
}
</style>