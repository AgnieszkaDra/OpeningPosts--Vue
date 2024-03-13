<template>
  <NavigationComponent headline="Tutaj będzie sekcja nawigacji"/>
  <router-view/>
</template>

<script setup>

import NavigationComponent from './components/NavigationComponent'
import { onMounted, ref, watch } from 'vue';
import { usePostStore } from '@/store';
import postData from '../data/post';

const postStore = usePostStore();

onMounted(async () => {
      try {
        const postsArray = []
        const isLoading = ref(true);

        for (const post of postData) {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: post.title,
              body: post.body,
              bodySecond: post.bodySecond,
              background: post.background,
              select: post.select,
              author: post.author,
              categories: post.categories,
              userId: post.userId
            }),
          });

          const data = await response.json();
          postsArray.push(data);
          isLoading.value = false;
        }

        postStore.$patch({
          postsData: postsArray,
          totalPages: Math.ceil(postsArray.length / postStore.postsPerPage)
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    });

    watch(() => postStore.currentSelect, () => {
      postStore.filteredBySelect;
    });

    watch(postStore.currentSelect, () => {
    postStore.filteredBySelect
    })

</script>

<style lang="scss">
  @import './styles/style.scss';
</style>