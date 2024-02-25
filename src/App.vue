<template>
  <div>
    <NavigationComponent headline="Co nowego"/>
    <router-view/>
  </div>
</template>

<script setup>
import NavigationComponent from './components/NavigationComponent.vue';
</script>

<style lang="scss">
  @import './styles/style.scss';
</style>