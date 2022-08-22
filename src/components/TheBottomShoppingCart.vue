<template>
  <div>
    <div>
      <p>購物車共 {{ Cart.cartlist.length }} 項</p>
      <div>總計 {{ Cart.totalPrice }} 元</div>
      <!-- class="div-button" -->
      <div>
        <a class="div-button" @click="Clicked"> 結帳 </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shoppingCart } from "@/stores/shoppingCart";
import router from "@/router";

const Cart = shoppingCart();

function Clicked() {
  if (Cart.page != "shoppingcart") {
    router.push("shoppingcart");
  }
}
</script>

<style scoped>
.div-button {
  cursor: pointer;
  font-weight: bold;
  color: red;
}
</style>
