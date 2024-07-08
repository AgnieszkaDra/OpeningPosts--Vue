<template>
  <section class="section">
    <nav aria-label="..." class="pagination-nav">
      <ul class="pagination">
        <li 
          class="pagination__item pagination__item--prev"
          @click="currentPage > 1 ? setCurrentPage(currentPage + 1) : null"
          :class="{ disabled: currentPage === 1 }"
        >
          <font-awesome-icon icon="chevron-left" />
        </li>
        <li 
          v-for="page in totalPages" 
          :key="page" 
          class="pagination__item pagination__item--main"
          :class="{ active: page === currentPage, 'not-active': page > lastPage }"
          @click="setCurrentPage(page)"
        >
          {{ page }}
        </li>
        <li 
          class="pagination__item pagination__item--next"
          @click="currentPage < totalPages ? setCurrentPage(currentPage - 1) : null"
          :class="{ disabled: currentPage === totalPages }"
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
import { computed } from 'vue';
import { usePostStore } from '@/store';

library.add(faChevronLeft);
library.add(faChevronRight);

const postStore = usePostStore();
const lastPage = computed(() => postStore.lastPage);
const currentPage = computed(() => postStore.currentPage);
const totalPages = computed(() => postStore.totalPages);

const setCurrentPage = (page) => {
  postStore.setCurrentPage(page);
};

</script>