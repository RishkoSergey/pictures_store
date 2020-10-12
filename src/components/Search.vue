<template>
  <div class="search">
    <input class="search__input" type="text" placeholder="Поиск по названию картины" />
    <div class="search__button"><p>Найти</p></div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  &__input {
    border: 1px solid #E1E1E1; 
    outline: none; 
    height: 48px; 
    width: 294px; 
    font-family: 'Merriweather', sans-serif;
    font-size: 14px;
    line-height: 150%;
    color: #343030;
    padding-left: 16px;
    &::placeholder {
      color: #9F9F9F;
    }
  }
  &__button {
    width: 122px;
    height: 48px;
    background-color: #403432;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>