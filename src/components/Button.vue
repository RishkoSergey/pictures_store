<template>
  <div 
    class="buy-button" 
    :class="{ 'buy-now': status === 'Купить', disable: loading }"
    @click="buy"
  >
    <img v-if="status === 'В корзине'" src="../assets/onCart.png" />
    <p v-if="loading === false">{{ status }}</p>
    <Loader v-if="loading === true" />
  </div>
</template>

<script>
import Loader from './Loader';
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
  data: () => ({
    loading: false
  }),
  components: {
    Loader
  },
  props: ['status', 'id'],
  methods: {
    ...mapMutations(['buyProduct']),
    async buy() {
      this.loading = true;
      if (this.status === 'Купить') {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(res => {
            if (res) {
              this.buyProduct(this.id);
              this.loading = false;
            }
          })
          .catch(err => {
            throw err;
          })
      }
    }
  },
  watch: {
    status() {
      this.loader = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.buy-button {
  width: 118px;
  height: 48px;
  background-color: #5B3A32;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 150%;
  cursor: pointer;
  img {
    margin-right: 5px;
  }
}
.buy-now {
  background-color: #382E2B;
  &:hover {
    background-color: #776763;
  }
}
.disable {
  background-color: #C1B4B1;
  &:hover {
    background-color: #C1B4B1;
  }
}
</style>