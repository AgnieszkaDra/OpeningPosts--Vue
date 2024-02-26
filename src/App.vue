<template>
  <div>
    <NavigationComponent headline="Co nowego"/>
    <section 
      class="section operations"
    >
      <SearchInput/>
      <FilterInput/>
  </section>
    <router-view/>
  </div>
</template>

<script setup>

import NavigationComponent from './components/NavigationComponent'
import SearchInput from './components/SearchInput';
import FilterInput from './components/FilterInput'

</script>

<style lang="scss">
  @import './styles/style.scss';
</style>