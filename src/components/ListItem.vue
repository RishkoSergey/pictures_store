<template>
  <div class="product" :class="{ disabled: product.status === 'Продана на аукционе' }">
    <img :src="getImage" class="product__image" />
    <p class="product__name">{{ product.name }}</p>
    <div v-if="product.status !== 'Продана на аукционе'" class="product__bottom">
      <div class="product__price">
        <p v-if="product.oldPrice" class="product__price__old">{{ product.oldPrice }}</p>
        <p class="product__price__new">{{ product.price }}</p>
      </div>
      <Button :status="product.status" :id="product.id" />
    </div>
    <div v-else class="product__selled">
      <p>Продана на аукционе</p>
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  props: ['product'],
  components: {
    Button
  },
  computed: {
    getImage: function() {
      return require(`../assets/products/${this.product.image}.png`);
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  width: 280px;
  height: 328px;
  border: 1px solid #E1E1E1;
  &__image {
    width: 280px;
    height: 160px;
    margin-bottom: 20px;
  }
  &__name {
    margin-left: 24px;
    margin-right: 36px;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 22px;
  }
  &__bottom {
    height: 48px;
    margin: 0 24px 24px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__price {
    &__old {
      font-weight: 300;
      font-size: 14px;
      line-height: 150%;
      text-decoration-line: line-through;
      color: #A0A0A0;
    }
    &__new {
      font-weight: bold;
      font-size: 16px;
      line-height: 150%;
    }
  }
  &__selled {
    height: 48px;
    margin: 0 24px 24px 24px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
  }
}
.disabled {
  opacity: 0.5;
}
</style>