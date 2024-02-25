<script setup>
  import PostsComponent from '@/components/PostsComponent.vue';
  import { inject } from 'vue'
  const postsData = inject('postsData')
</script>

<template>
  <div>
    <PostsComponent :postsData="postsData"/>
  </div>
</template>