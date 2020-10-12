<template>
  <div class="preloader">
    <img src="../assets/preloader.png" class="preloader__image" />
  </div>
</template>

<style lang="scss">
.preloader {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &__image {
    width: 30px;
    height: 30px;
    animation: rotation 3s infinite linear;
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>