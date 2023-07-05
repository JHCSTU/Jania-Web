<script setup>
import Sidebar from './components/sideBar.vue'
</script>

<template>
  <el-container>
    <el-aside width="100px">
      <Sidebar></Sidebar>
    </el-aside>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.main {
  text-align: center;
}
</style>
