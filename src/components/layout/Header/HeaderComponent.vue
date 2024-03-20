<template>
  <header class="header">
    <div class="header__nav">
      <div class="hamburger" 
          :class="{ close: navbarOpen }" 
          @click="handleToggle"
      >
        <span class="hamburger__line line1" :class="{ close: navbarOpen }"></span>
        <span class="hamburger__line line2" :class="{ close: navbarOpen }"></span>
        <span class="hamburger__line line3" :class="{ close: navbarOpen }"></span>
      </div>
      <Navigation :isNavbarOpen="navbarOpen"></Navigation>
    </div>
  </header>
</template>

<script setup>
import Navigation from '../Header/Navigation/NavigationComponent.vue';
import { ref } from 'vue';

const navbarOpen = ref(false);

const handleToggle = () => {
  navbarOpen.value = !navbarOpen.value;
};
</script>

