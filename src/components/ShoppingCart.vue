<template>
  <div id="ShoppingCart">
    <h3>Cart Details</h3>
    <p>No. of items: {{ $store.getters["getCartLength"] }}</p>
    <p>Total: ${{ $store.getters["getCartTotal"] }}</p>
  </div>
</template>

<script>
export default {
  name: "shopping-cart",
};
</script>

<style>
h3 {
  margin: 0;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
p {
  margin: 0;
  font-family: "Times New Roman", Times, serif;
}
#ShoppingCart {
  padding: 10px 20px;
  border-radius: 5px;
  background: #877e83;
}
</style>
