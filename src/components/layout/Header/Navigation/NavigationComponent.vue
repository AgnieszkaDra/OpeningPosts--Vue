<template>
  <nav class="nav" :class="{ open: props.isNavbarOpen }">
    <div class="nav__hamburger"></div>
    <div class="nav__menu">
      <ul class="list">
        <li class="list__element">
          <a>Strona główna</a>
        </li>
        <li class="list__element">
          <a>Strefa dziecka</a>
        </li>
        <li class="list__element">
          <a>Strefa kobiet</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isNavbarOpen: Boolean // Define your prop type here
});

</script>

