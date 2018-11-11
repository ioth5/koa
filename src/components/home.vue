<template lang="pug">
  .home
    .title
      span 欢迎访问ACE项目
      a.btn-login(href='#/login') 登录
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        msg: 'login'
      }
    }
  };
</script>

<style>
  .home{height: 100vh;display: flex;}
  .title{margin: auto;font-size: 2rem;}
</style>
