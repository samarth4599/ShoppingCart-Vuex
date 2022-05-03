<template>
  <div id="app">
    <div class="header">
      <h1>Shopping Cart</h1>
      <shopping-cart />
    </div>

    <section v-if="$store.state.products" class="items-container">
      <item-list
        v-for="item in $store.state.products"
        :key="item.id"
        :item="item"
      />
    </section>
  </div>
</template>

<script>
import ItemList from "./components/ItemList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
export default {
  components: { ItemList, ShoppingCart },
  name: "App",
  methods: {
    async onMount() {
      await this.$store.dispatch("generateProducts");
    },
  },
  async mounted() {
    await this.onMount();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, sans-serif;
}
h1 {
  font-size: 2.5em;
  font-family: "Times New Roman", Times, serif;
  margin-left: auto;
  margin-right: auto;
  color: cornflowerblue;
}
.header {
  background: #d1cfab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px 15px;
  margin: 0;
}
.items-container {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
select {
  width: 140px;
  -webkit-appearance: none;
  padding: 7px;
  background: antiquewhite;
  font-size: 1em;
}
select {
  cursor: pointer;
}
</style>
