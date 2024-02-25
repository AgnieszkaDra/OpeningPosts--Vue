<template>
  <section class='section posts'>
    <article 
      v-for="(post) in postsData" 
      :key="post.userId"
      :name="post.title"
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
      @click="navigateToPost(post.title)"
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
import { useRouter } from 'vue-router';
import createNewPosts from '../providers/createNewPosts' 
import postDataArray from '../../data/post'

const router = useRouter();

const postsData = postDataArray
createNewPosts(postDataArray)

const navigateToPost = (title) => {
    router.push({ path: `/${title}`})
};

</script>


