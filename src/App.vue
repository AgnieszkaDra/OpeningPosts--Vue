<template>
  <router-view/>
</template>

<script setup>

import { onMounted } from 'vue';
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
<<<<<<< HEAD
    totalPages: Math.ceil(postStore.postsData.length / postStore.postsPerPage)
=======
>>>>>>> Pagination
  });

}) 

</script>

<style lang="scss">
  @import './styles/style.scss';
</style>