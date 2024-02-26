<template>
  <div>
    <NavigationComponent headline="Co nowego"/>
    <section 
      class="section operations"
    >
      <SearchInput/>
      <FilterInput/>
  </section>
    <router-view/>
  </div>
</template>

<script setup>

import NavigationComponent from './components/NavigationComponent'
import SearchInput from './components/SearchInput';
import FilterInput from './components/FilterInput'

import postDataArray from '../data/post';
import { onMounted, provide, ref } from 'vue'
const postsData = ref([])

onMounted(() => {
  postDataArray.forEach(postData => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      bodySecond: postData.bodySecond,
      background: postData.background,
      author: postData.author,
      userId: postData.userId
    }),
  })
  .then(response => response.json())
  .then(data => {
    postsData.value.push(data);
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });
});
})

provide('postsData', postsData)

</script>

<style lang="scss">
  @import './styles/style.scss';
</style>