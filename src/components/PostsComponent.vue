<template>
  <section class='section posts'>
    <article 
      v-for="(post, index) in postsData" 
      :key="index"
      class="posts__item post"
    >
    <div 
      class="post__image" 
      :style="{ backgroundImage: `url(${post.background})`}">
    </div>
    <header
      class="post__header" 
    >
      <h3>
         {{ post.title }} 
      </h3>
    </header>
    <div 
      class="post__text"
    >
      {{ post.body}}
      {{ post.bodySecond}}
    </div>
    <div
      class="post__author"
    >
      {{ post.author}}
    </div>
    <div
      class="post__readMore"
    >
      <a
      class="post__readMore-link"
      >
        Przeczytaj więcej
      </a>
    </div>
  </article>
  </section>
</template>

<script setup>

import createNewPosts from '../providers/createNewPosts' 
import postDataArray from '../../data/post'

const postsData = postDataArray
createNewPosts(postDataArray)

</script>


