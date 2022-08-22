import { defineStore } from "pinia";
import shoppinglist from "@/testproductjson/shopponglist.json";
// import TheBottomShoppingCartVue from "@/components/TheBottomShoppingCart.vue";

export const shoppingCart = defineStore({
  id: "shoppingCart",
  state: () => ({
    total: 0 as number,
    list: shoppinglist.data.list,
    cartlist: [] as Array<any>,
    page: "index" as string,
  }),
  getters: {
    totalPrice: (state) => state.total,
  },
  actions: {
    addProduct(price: number, productId: string) {
      const price2: number = price.valueOf();
      this.total += price2;
      console.log(this.list.findIndex((item) => item.id === productId));
      this.cartlist.push(
        this.list[this.list.findIndex((item) => item.id === productId)]
      );
    },
    removeProdcut(price: number, productId: string) {
      this.total -= price;
      this.cartlist.splice(
        this.cartlist.findIndex((item) => item === productId),
        1
      );
    },
  },
});
