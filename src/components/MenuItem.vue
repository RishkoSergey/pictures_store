<template>
  <div class="menu-item">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["name"]
}
</script>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
  }
}
</style>