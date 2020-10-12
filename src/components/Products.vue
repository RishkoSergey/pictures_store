<template>
  <div class="products">
    <div class="container">
      <p class="products__name">Картины эпохи Возрождения</p>
      <div class="products__list">
        <ListItem v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListItem from './ListItem';

export default {
  components: {
    ListItem
  },
  computed: mapState(['products'])
}
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 320px;
  &__name {
    margin-left: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    margin-top: 45px;
    margin-bottom: 39px;
  }
  &__list {
    display: flex;
    justify-content: space-between;
  }
}
</style>