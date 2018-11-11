<template>
  <el-menu>
    <el-menu-item
      v-bind:class="item.className"
      v-for="item in navList"
      :index="item.path"
      :key="item.index"
    >
      <router-link :to="item.path" tag="a">
        <i v-bind:class="item.icon"></i>
        <em v-if="item.name">{{ item.name }}</em>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data(){
      return {
        navList: [{
          className: "logo",
          index: 0,
          icon: "el-icon-ace-logo",
          path: "/home"
        },{
          index: 1,
          icon: "el-icon-ace-01",
          path: "/activity",
          name: "活动"
        },{
          index: 2,
          icon: "el-icon-ace-02",
          path: "/type",
          name: "类型"
        },{
          index: 3,
          icon: "el-icon-ace-03",
          path: "/tools",
          name: "工具"
        },{
          index: 4,
          icon: "el-icon-ace-04",
          path: "/member",
          name: "成员"
        },{
          index: 5,
          icon: "el-icon-ace-05",
          path: "/help",
          name: "帮助"
        },{
          className: "logout",
          index: 9,
          icon: "el-icon-ace-06",
          path: "/logout",
          name: "退出"
        }]
      }
    },
    computed: {

    },
    components:{

    }
  }
</script>

<style>

</style>
