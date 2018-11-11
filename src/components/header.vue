<template lang="pug">
  header.header
    img.logo(src='http://bgo.mamhao.cn/4f9cfee3-71d6-4269-ae5d-c326bf312cd7.png', alt='admin')
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .header {
    background: rgba(255,255,255,.6);
    height: 3rem;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
  }
  .logo{width: 3rem;height: 3rem}
</style>
