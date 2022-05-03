import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    cart: {},
  },
  getters: {
    getCartLength(state) {
      return Object.keys(state.cart).length;
    },
    getCartTotal(state) {
      let total = 0;
      Object.entries(state.cart || {}).forEach((data) => {
        const [, item] = data;
        total += item.price;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    ADD_TO_CART(state, data) {
      const cart = state.cart;
      cart[Object.keys(cart).length] = data;
      state.cart = cart;
    },
    REMOVE_FROM_CART(state, data) {
      const cart = state.cart;
      const key = Object.keys(cart).find((key) => cart[key] === data);
      delete cart[key];
      state.cart = cart;
    },
  },
  actions: {
    async generateProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      this.commit("SET_PRODUCTS", data);
    },
  },
});
