<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nav>
      <router-link to="/about/addEvent">Add</router-link>


    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<style scoped>
nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>