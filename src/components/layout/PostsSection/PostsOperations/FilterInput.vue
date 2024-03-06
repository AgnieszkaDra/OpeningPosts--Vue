<template>
  <div class="operations__filter filter">
    <select class="filter__select" @change="handleAuthorChange">
      <option 
        v-for="author in AUTHORS" 
        :key="author" 
        :value="author" 
        class="filter__option"
        >
        {{ author }}
      </option>
    </select>
    <FontAwesomeIcon icon="arrow-down" class="filter__icon" />
  </div>
</template>

<script setup>
const AUTHORS = ['Autorzy', 'Magdalena Paul', 'Wojtek Paul'];
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { onMounted } from 'vue';
import { usePostStore } from '@/store';

library.add(faArrowDown)

const postStore = usePostStore();

const handleAuthorChange = (event) => {
  const selectedAuthor = event.target.value;
  postStore.setCurrentAuthor(selectedAuthor);
};

onMounted(() => {
postStore.fetchPosts();
});

</script>
