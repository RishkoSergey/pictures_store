<template>
  <div class="footer">
    <div class="container">
      <div class="footer__menu">
        <div class="footer__menu__logo">
          <img src="../assets/logo_footer.png" />
        </div>
        <MenuItem name="Каталог" />
        <MenuItem name="Доставка" />
        <MenuItem name="Оплата" />
        <MenuItem name="Контакты" />
        <MenuItem name="О галерее" />
      </div>
      <CompanyInfo />
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem';
import CompanyInfo from './CompanyInfo';

export default {
  components: {
    MenuItem,
    CompanyInfo
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 96px;
  width: 100%;
  background-color: #ECEAEA;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &__menu {
    display: flex;
    color: #555555;
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

