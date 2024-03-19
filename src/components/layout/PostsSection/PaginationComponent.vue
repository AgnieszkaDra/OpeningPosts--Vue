<template>
  <section class="section">
    <nav aria-label="..." class="pagination-nav">
      <ul class="pagination">
        <li 
          class="pagination__item pagination__item--prev"
          @click="currentPage > 1 && hasPrevPosts ? setCurrentPage(currentPage - 1) : null"
          :class="{ disabled: currentPage === 1 || !hasPrevPosts }"
        >
          <font-awesome-icon icon="chevron-left" />
        </li>
        <li 
          v-for="page in totalPages" 
          :key="page" 
          class="pagination__item pagination__item--main"
          :class="{ active: page === currentPage }"
          @click="hasNextPosts  ? setCurrentPage(page) : null"
        >
          {{ page }}
        </li>
        <li 
          class="pagination__item pagination__item--next"
          @click="currentPage < totalPages && hasNextPosts ? setCurrentPage(currentPage + 1) : null"
          :class="{ disabled: currentPage === totalPages || !hasNextPosts }"
        >
          <font-awesome-icon icon="chevron-right"/>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { computed, watch } from 'vue';
import { usePostStore } from '@/store';

library.add(faChevronLeft);
library.add(faChevronRight);

const postStore = usePostStore();

const currentPage = computed(() => postStore.currentPage);

const totalPages = computed(() => postStore.totalPages);
const posts = computed(() => postStore.filteredBySelect);





const setCurrentPage = (page) => {
    postStore.setCurrentPage(page);
};



let hasNextPosts = computed(() => {
    const nextPageIndex = postStore.currentPage + 1;
    return nextPageIndex * postStore.postsPerPage <= posts.value.length;
});





watch(() => postStore.currentPage, (newValue, oldValue) => {
  // Check if the new value is greater than the old value
  if (newValue > oldValue) {
   hasNextPosts = computed(() => {
      const nextPageIndex = postStore.currentPage + 1;
      return nextPageIndex * postStore.postsPerPage <= posts.value.length;
    });
  }

 
});
</script>