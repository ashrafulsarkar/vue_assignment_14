import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification'
const toast = useToast();

const baseURL = 'https://dummyjson.com';

const useCartStore = defineStore('cart', () => {

    const items = reactive(JSON.parse(localStorage.getItem('cart')) || {});
    
    const totalItems = computed(()=>{
        let total = 0
        for(let id in items){
            total += items[id].quantity
        }
        return total
    });

    const totalPrice = computed(()=>{
        let total = 0
        for(let id in items){
            total += items[id].product.price * items[id].quantity
        }
        return parseFloat(total.toFixed(2))
    });

    async function add(product){
        if(items[product.id]){
            items[product.id].quantity++
        }else{
            items[product.id] = {
                product,
                quantity:1
            }
        }
        saveCartToLocalStorage()
        toast.success("Product added to cart!");
    }

    async function removeItem(product) {
        const id = product.id;
        if (items[id]) {
            delete items[id];
        }
        saveCartToLocalStorage();
    }

    async function subItem(product) {
        if (items[product.id].quantity < 2) {
            removeItem(product);
        } else {
            if (items[product.id]) {
                items[product.id].quantity--
            }
        }
        
        saveCartToLocalStorage()
        toast.success("Product remove to cart!");
    }

    async function empty() {
        for (const key in items) {
            if (items.hasOwnProperty(key)) {
              delete items[key];
            }
        }
        saveCartToLocalStorage();
    }
    
    function saveCartToLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(items))
    }
    function getCartFromLocalStorage(){
        items = JSON.parse(localStorage.getItem('cart')) || {}
    }

    return { items, totalItems, totalPrice, add, empty, getCartFromLocalStorage, removeItem, subItem }
})

export default useCartStore;