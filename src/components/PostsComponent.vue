<template>
  <section class="section posts">
    <article 
      v-for="post in paginatedPosts" 
      :key="post.id" 
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
        class="post__author"
      >
        {{ post.author }}
      </div>
      <div 
        class="post__text"
      >
        {{ post.body }}
        {{ post.bodySecond }}
      </div>
      <div
        class="post__readMore"
        >
        <a
          class="post__readMore-link"
          @click="navigateToPost(post)"
        >
          Przeczytaj więcej
        </a>
        </div> 
    </article>
  </section>
  <PaginationComponent 
    :currentPage="currentPage" 
    :totalPages="totalPages" 
    @pageChanged="setCurrentPage" 
  />
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import PaginationComponent from './PaginationComponent.vue';

const store = useStore();
const router = useRouter();
const currentPage = computed(() => store.state.currentPage);
const totalPages = computed(() => store.state.totalPages);
const postsData = computed(() => store.state.postsData);

const postsPerPage = store.state.postsPerPage;

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return postsData.value.slice(startIndex, endIndex);
});

const setCurrentPage = (page) => {
  store.commit('setCurrentPage', page);
};

const navigateToPost = (post) => {
  const route = { name: post.title };
  router.push(route);
};
</script>
