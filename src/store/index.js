import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initProducts = [
  {
    id: 1,
    name: '«Рождение Венеры» Сандро Боттичелли',
    price: '1 000 000 $',
    oldPrice: '2 000 000 $',
    status: 'Купить',
    image: 'image1'
  },
  {
    id: 2,
    name: '«Тайная вечеря» Леонардо да Винчи',
    price: '3 000 000 $',
    oldPrice: null,
    status: 'Купить',
    image: 'image2'
  },
  {
    id: 3,
    name: '«Сотворение Адама» Микеланджело',
    price: '5 000 000 $',
    oldPrice: '6 000 000 $',
    status: 'В корзине',
    image: 'image3'
  },
  {
    id: 4,
    name: '«Урок анатомии» Рембрандт',
    price: null,
    oldPrice: null,
    status: 'Продана на аукционе',
    image: 'image4'
  }
];

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    getInfo(state) {
      if (localStorage.products) {
        state.products = JSON.parse(localStorage.getItem("products"));
      } else {
        state.products = initProducts;
        localStorage.setItem("products", JSON.stringify(state.products));
      }
    },
    buyProduct(state, id) {
      state.products.find(item => item.id === id).status = 'В корзине';
      localStorage.setItem("products", JSON.stringify(state.products));
    }
  },
  actions: {
  },
  modules: {
  }
})
