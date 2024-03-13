<template>
  <div class="operations__search search">
     <input
         type="text"
         placeholder="Wyszukaj...-nie działa"
         class="search__input"
         v-model="search"
         @input="updateSearch"
     />
     <FontAwesomeIcon icon="search" class="search__icon" />
   </div>
</template>
 
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { usePostStore } from '../../../../store.js'
import { ref, watch } from 'vue';

library.add(faSearch)

const postStore = usePostStore();
const search = ref('');

const updateSearch = (event) => {
 
  search.value = event.target.value;
  console.log(search)
  postStore.setCurrentSearch(search.value);
};

watch(search.value, ()  => {
  postStore.setCurrentSearch(search.value);
  postStore.filteredBySearch; // You may want to call this method to trigger filtering
});

// Watch for changes in search and apply filtering
watch(postStore.currentSearch, ()  => {
 alert('store')
  postStore.filteredBySearch; // You may want to call this method to trigger filtering
});

</script>