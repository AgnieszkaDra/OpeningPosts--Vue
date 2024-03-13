<template>
  <div 
    class="operations"
  >
    <h4 class="operations__headline">Znajdź post:</h4>
    <FilterInput class="operations__filter"/>
    <SearchInput class="operations__search" v-model="search"/>
  </div>
</template>

<script>
import FilterInput from './FilterInput'
import SearchInput from './SearchInput.vue';

export default {
  components: {
    FilterInput,
    SearchInput
  }
};
</script>



