<template>
  <div class="header">
    <div class="container">
      <div class="header__menu">
        <div class="header__menu__logo">
          <img src="../assets/logo_header.png" />
        </div>
        <MenuItem name="Каталог" />
        <MenuItem name="Доставка" />
        <MenuItem name="Оплата" />
        <MenuItem name="Контакты" />
        <MenuItem name="О галерее" />
      </div>
      <Search />
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem';
import Search from './Search';

export default {
  components: {
    MenuItem,
    Search
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 96px;
  width: 100%;
  border-bottom: 1px solid #E1E1E1;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &__menu {
    display: flex;
    div {
      margin-right: 48px;
      &:last-child {
        margin-right: 0;
      }
    }
    &__logo {
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}
</style>

