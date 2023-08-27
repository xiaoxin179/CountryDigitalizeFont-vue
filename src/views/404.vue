<template>
    <div class="not-found">
      <img src="@/assets/404.svg" alt="" class="svg_404">
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name:"404",
    setup() {
      return {
  
      }
    }
  })
  </script>
  <style scoped>
  .svg_404{
    height:100vh;
  }
  </style>