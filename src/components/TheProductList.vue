<template>
  <div
    class="contentWrap"
    v-for="(item, index) in productlist"
    :key="item.id"
    @click="onClickItem(index, item)"
    :style="{ 'box-shadow': item.border }"
  >
    <div class="shoppingInfo">
      <div class="shoppingImgWrap">
        <img class="shoppingImg" :src="item.imgUrl" alt="" />
      </div>
      <div class="goodsInfo">
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
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

const productlist: any = reactive(sc.list);

productlist.border = "0 0 100px 2px green";
productlist.isSelect = false;

function onClickItem(index: number, item: any) {
  if (item.border == "0 0 10px 2px yellow") {
    item.border = "0 0 10px 2px rgba(0, 0, 0, 0.05)";
    sc.removeProdcut(item.price * item.count, item.id);
  } else {
    item.border = "0 0 10px 2px yellow";
    item.isSelect = true;

    sc.addProduct(item.price * item.count, item.id);
  }
}
</script>

<style scoped>
.contentWrap {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.05);
  /* box-shadow: 0 0 100px 2px v-bind(boardercolor); */
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

.shoppingImg {
  height: 80px;
  width: 80px;
}
.goodsInfo {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
</style>
