<template>
  <div class="operations__search search">
     <input
         type="text"
         placeholder="Wyszukaj..."
         class="search__input"
     />
     <FontAwesomeIcon icon="search" class="search__icon" />
   </div>
</template>
 
 <script>
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { faSearch } from '@fortawesome/free-solid-svg-icons'
 
   library.add(faSearch)
 
 export default {
   components: {
     FontAwesomeIcon
   }
 }
 </script>