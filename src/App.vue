<template>
  <HeaderComponent></HeaderComponent>
  <!-- <NavigationComponent headline="Tutaj będzie sekcja nawigacji"/> -->
  <router-view/>
</template>

<script setup>

import HeaderComponent from './components/layout/Header/HeaderComponent.vue';
import { onMounted, watch } from 'vue';
import { usePostStore } from '@/store';
import postData from '../data/post';

const postStore = usePostStore();

onMounted(() => {
  const postsArray = [];

  for (const post of postData) {
    postsArray.push({
      title: post.title,
      body: post.body,
      bodySecond: post.bodySecond,
      background: post.background,
      select: post.select,
      author: post.author,
      categories: post.categories,
      userId: post.userId
    });
  }
      
  postStore.$patch({
    postsData: postsArray,
    totalPages: Math.ceil(postsArray.length / postStore.postsPerPage)
  });

  }) 

watch(postStore.currentSelect, () => {
    postStore.filteredBySelect
})

</script>

<style lang="scss">
  @import './styles/style.scss';
</style>