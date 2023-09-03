<script setup>
import { computed, nextTick,provide,ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user';
const isRouterAlive=ref(true)
// 让页面在不刷新的情况下，重新渲染一次
const reload=()=>{
  isRouterAlive.value=false
  nextTick(()=>{
    isRouterAlive.value=true
  })
}
provide('reload',reload)

</script>

<template>
  <div class="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<style scoped>

</style>
