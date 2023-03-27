<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">#todo</header>

  <RouterView />
</template>

<style scoped>
.header {
  font-family: "Raleway";
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
</style>
