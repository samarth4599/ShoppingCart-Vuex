<template>
  <div class="ItemList">
    <div class="image">
      <img :src="item.image" />
      <p class="item-price">${{ item.price }}</p>
      <div class="button-container">
        <div class="item-add-btn">
          <button class="btn" @click="addToCart(item)">+</button>
          <p class="item-length">{{ itemLength }}</p>
          <button class="btn" @click="removeFromCart(item)">-</button>
        </div>
      </div>
    </div>
    <p class="item-name">{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: ["item"],
  data() {
    return {
      size: "",
    };
  },
  computed: {
    itemLength() {
      const cart = this.$store.state.cart;
      return Object.keys(cart).filter((key) => cart[key] === this.item).length;
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("ADD_TO_CART", item);
    },
    removeFromCart(item) {
      this.$store.commit("REMOVE_FROM_CART", item);
    },
  },
};
</script>

<style>
img {
  width: 100px;
  height: 150px;
}
.ItemList {
  width: 100%;
  padding: 50px;
}
@media screen and (min-width: 630px) {
  .ItemList {
    width: 30%;
  }
}
@media screen and (min-width: 940px) {
  .ItemList {
    width: 20%;
  }
}
.item-add-btn {
  display: flex;
  flex-direction: row;
}
.image {
  position: relative;
  color: white;
}
.item-length {
  color: black;
  margin: 0px 5px;
}
.item-name {
  background: rgba(215, 126, 126, 0.8);
  padding: 10px;
}
.item-price {
  position: absolute;
  top: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.5);
  padding: 10px;
}
.button-container {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
}
.btn {
  height: 5;
  width: 5;
}
</style>
