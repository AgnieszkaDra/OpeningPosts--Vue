<template>
  <div class="operations__filter filter" >
    <div 
      class="filter__input"
      @click="openSubMenu" >
      <input
        type="text"
        placeholder="Wszystkie posty"
      />
    <FontAwesomeIcon icon="arrow-down" class="filter__icon" /> 
    </div>
    <div 
      class="filter__submenu"
      :class="{ 'active': isOpenSubMenu }"
    >
      <fieldset class="fieldset">
        <legend class="legend">{{ AUTHORS.title }}</legend>
        <div v-for="(author, index) in AUTHORS.options" :key="index">
          <input type="checkbox" 
            :id="'authorCheckbox' + index" 
            v-model="selectedInput" 
            :value="author"
            class="input" 
          />
          <label :for="'authorCheckbox' + index" class="label">{{ author }}</label>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="legend">{{ CATEGORIES.title }}</legend>
        <div v-for="(category, index) in CATEGORIES.options" 
          :key="index"
        >
          <input type="checkbox" 
            :id="'categoryCheckbox' + index" 
            v-model="selectedInput" 
            :value="category"
            class="input" 
          />
          <label :for="'categoryCheckbox' + index" class="label">{{ category }}</label>
        </div>
      </fieldset>
    </div>
  
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { usePostStore} from '../../../../store.js'
import { watch, ref } from 'vue'

library.add(faArrowDown)

const AUTHORS = {
  title: 'Autorzy',
  options: ['Magdalena Paul', 'Wojtek Paul']
}

const CATEGORIES = {
  title: 'Kategoria',
  options: ['Dzieci', 'Kobieta']
}
const selectedInput = ref([]);
const isOpenSubMenu = ref(false);

const postStore = usePostStore();
postStore.setCurrentSelect(selectedInput)

const openSubMenu = () => {
  isOpenSubMenu.value = !isOpenSubMenu.value;
}

watch(selectedInput, () => {
  postStore.setCurrentSelect(selectedInput)
})

</script>