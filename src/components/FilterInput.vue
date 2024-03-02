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
    </div>
  </template>
  
  <script setup>
  const AUTHORS = ['Autorzy', 'Magdalena Paul', 'Wojtek Paul'];
 import { onMounted } from 'vue';
  import { usePostStore } from '@/store';
  
  const postStore = usePostStore();
  
  const handleAuthorChange = (event) => {
    const selectedAuthor = event.target.value;
    postStore.setCurrentAuthor(selectedAuthor);
};

onMounted(() => {
  postStore.fetchPosts();
});
  
  </script>
