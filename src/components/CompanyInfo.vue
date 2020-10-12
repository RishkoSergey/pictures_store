<template>
  <div class="company-info">
    <div class="company-info__phone">
      <img src="../assets/phone.png" />
      <p>+7 (495) 555-55-55</p>
    </div>
    <div class="company-info__address">
      <img src="../assets/address.png" />
      <p>г. Москва, ул. Расплетина, 24</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company-info {
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #555555;
  div {
    display: flex;
    align-items: center;
    img {
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }
  }
  &__phone {
    margin-right: 50px;
  }
}
</style>