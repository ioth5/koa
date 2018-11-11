<template lang="pug">
  el-row.login
    el-col.content(:xs='24', :sm='{span: 6,offset: 9}')
      h3.title
        | 欢迎登录
      el-row
        el-input(v-model='account', placeholder='账号', type='text')
        el-input(v-model='password', placeholder='密码', type='password', @keyup.enter.native='loginToDo')
        el-button(type='primary', @click='loginToDo') 登录
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
  .login{height: 100vh;display: flex;}
  .content{margin: auto;font-size: 2rem;}
  .el-row.content{padding: 16px}
  .title{font-size: 28px;text-align: center;font-weight: 400;margin: 0;}
  .el-input{margin: 12px 0}
  .el-button{width: 100%;margin-top: 12px;}
</style>
