<template>
  <div class="operations__filter filter">
    <div class="filter__submenu">
      <fieldset>
        <legend>{{ AUTHORS.title }}</legend>
        <div v-for="(author, index) in AUTHORS.options" :key="index">
          <input type="checkbox" 
            :id="'authorCheckbox' + index" 
            v-model="selectedInput" 
            :value="author" 
          />
          <label :for="'authorCheckbox' + index">{{ author }}</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>{{ CATEGORIES.title }}</legend>
        <div v-for="(category, index) in CATEGORIES.options" 
          :key="index"
        >
          <input type="checkbox" 
            :id="'categoryCheckbox' + index" 
            v-model="selectedInput" 
            :value="category" 
          />
          <label :for="'categoryCheckbox' + index">{{ category }}</label>
        </div>
      </fieldset>
    </div>
  <FontAwesomeIcon icon="arrow-down" class="filter__icon" />
  </div>
</template>

<!-- https://awplife.com/demo/blog-filter-premium/blog-without-filter/ -->

<script setup>
import {  ref } from 'vue';

const AUTHORS = {
  title: 'Autorzy',
  options: ['Magdalena Paul', 'Wojtek Paul']
}

const CATEGORIES = {
  title: 'Kategoria',
  options: ['Dzieci', 'Kobieta']
}

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { usePostStore} from '../../../../store.js'
import { watch } from 'vue'

library.add(faArrowDown)
const selectedInput = ref([]);

const postStore = usePostStore();
postStore.setCurrentSelect(selectedInput)

watch(selectedInput, () => {
  postStore.setCurrentSelect(selectedInput)
  postStore.filteredBySelect
})




</script>