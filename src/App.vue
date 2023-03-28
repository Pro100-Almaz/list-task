<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="container">
    <header class="header">#todo</header>

    <HomeView />
  </div>
</template>

<style scoped>
.header {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.045em;
  padding-top: 2rem;
  padding-bottom: 4rem;
  color: #333333;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
