<template>
  <section class='section posts'>
    <div 
      v-for="(post, index) in postsData" 
      :key="index"
      class="posts__item"
    >
      {{ post.title }}
      {{ post.body}}
      {{ post.author }}
    </div>
  </section>
</template>

<script setup>

import createNewPosts from '../providers/createNewPosts' 
import postDataArray from '../../data/post'

const postsData = postDataArray
createNewPosts(postDataArray)

</script>

