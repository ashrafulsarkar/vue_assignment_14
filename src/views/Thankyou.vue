<script setup>
import useCartStore from '../stores/cartStore';
const cartStore = useCartStore()
</script>
<template>
    <div class="my-4 grid sm:px-10">
        <div class="px-4 p-16">
            <p>Thank You for your order</p>
        </div>
    </div>
</template>
<style scope>
p{
    text-align: center;
}
</style>