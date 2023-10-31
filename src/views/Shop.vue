<script setup>
import { onMounted } from 'vue';
import ProductCard from '../components/product/ProductCard.vue';

import useProductStore from '../stores/productStore';
const productStore = useProductStore();

onMounted(() => {
    productStore.getProducts();
    productStore.getCategories();
});


</script>
<template>
    <section class="border-b container flex-grow lg:flex lg:flex-row lg:py-10 max-w-screen mx-auto py-5">
        <div>
            <div class="grid grid-cols-1 mt-6 gap-4 lg:grid-cols-4 lg:gap-6">
                <ProductCard v-for="product in productStore.products" key="product.id" :product="product"></ProductCard>
            </div>
        </div>
    </section>
</template>