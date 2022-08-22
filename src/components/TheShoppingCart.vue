<template>
  <div v-bind:click="Clicked">購物車清單</div>
  <div class="contentWrap" v-for="item in cartlist" :key="item.id">
    <div class="shoppingInfo">
      <div class="shoppingImgWrap">
        <img class="shoppingImg" :src="item.imgUrl" />
      </div>
      <div class="goodsInfo">
        <p>{{ item.title }}</p>
        <p>
          $ {{ item.price }}
          <span style="text-align: right; color: #666; margin: right">
            剩餘數量 {{ item.count }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { shoppingCart } from "@/stores/shoppingCart";

const sc = shoppingCart();

const cartlist: Array<any> = reactive(sc.cartlist);

function Clicked() {
  cartlist.forEach((element) => console.log(element));
}
</script>

<style scoped>
.contentWrap {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  height: 80px;
  position: relative;
  border-radius: 5px;
  margin-top: 10px;
}
.shoppingInfo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 1px #eee solid;
}

.shoppingImgWrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.shoppingImgWrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.shoppingImg {
  height: 80px;
  width: 80px;
}
</style>
