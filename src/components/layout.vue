<template>
  <div class="m-wrapper">
    <nav class="g-menu">
      <v-aside></v-aside>
    </nav>
    <main class="g-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import vAside from './aside.vue'
  export default {
    data(){
      return {
      }
    },
    components:{
      vAside
    }
  }
</script>
