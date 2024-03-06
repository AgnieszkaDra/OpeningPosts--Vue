<template>
  <section class="section posts">
    <PostsHeadline 
      headline="Co nowego" 
      class="posts__headline"
    />
    <PostsOperations 
      class="posts__operations"
    />
    <div class="posts__elements">
      <article 
      v-for="post in paginatedPosts" 
      :key="post.id" 
      class="posts__item post"
    >
      <div 
        class="post__image" 
        :style="{ backgroundImage: `url(${post.background})` }"
      ></div>
      <header class="post__header">
        <h3>{{ post.title }}</h3>
      </header>
      <div class="post__author">{{ post.author }}</div>
      <div class="post__text">
        {{ post.body }}
        {{ post.bodySecond }}
      </div>
      <div class="post__readMore">
        <a class="post__readMore-link" @click="navigateToPost(post)">
          Przeczytaj więcej
        </a>
      </div> 
    </article>
    </div>
    <PaginationComponent 
      :currentPage="currentPage" 
      :totalPages="totalPages" 
      @pageChanged="setCurrentPage"
      class="posts__pagination"
    />
  </section>
 
</template>

<script setup>
import { computed } from 'vue';
import { usePostStore } from '@/store';
import { useRouter } from 'vue-router';
import PaginationComponent from './PaginationComponent.vue';
import PostsHeadline from './PostsHeadline/PostsHeadline.vue';
import PostsOperations from './PostsOperations/PostsOperations'

const postStore = usePostStore();
const router = useRouter();

const currentPage = computed(() => postStore.currentPage);
const totalPages = computed(() => postStore.totalPages);
let posts = computed(() => postStore.filteredByAuthor);
const postsPerPage = computed(() => postStore.postsPerPage);

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage.value;
  const endIndex = startIndex + postsPerPage.value;
  return posts.value.slice(startIndex, endIndex);
});

const navigateToPost = (post) => {
  const route = { name: post.title };
  router.push(route);
};

const setCurrentPage = (page) => {
  postStore.currentPage(page);
};

</script>