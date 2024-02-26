<template>
  <section class="section posts">
    <article 
      v-for="(post, index) in props.postsData" 
      :key="index" 
      class="posts__item post"
    >
      <div 
        class="post__image" 
        :style="{ backgroundImage: `url(${post.background})` }"
      >
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
        {{ post.body }}
        {{ post.bodySecond }}
      </div>
      <div 
        class="post__author"
      >
        {{ post.author }}
      </div>
      <router-link 
        :to="{ name: `${post.title}` }" 
      >
        <div
        class="post__readMore"
        >
        <a
          class="post__readMore-link"
        >
          Przeczytaj więcej
        </a>
        </div> 
      </router-link>
    </article>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  postsData: {
    required: true,
  }
});

</script>

