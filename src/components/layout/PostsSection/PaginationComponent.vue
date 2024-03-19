<template>
  <section class="section">
    <nav aria-label="..." class="pagination-nav">
      <ul class="pagination">
        <li
          class="pagination__item pagination__item--prev"
          @click="currentPage > 1 && hasPosts ? setCurrentPage1(currentPage - 1) : null"
          :class="{ disabled: currentPage === 1 || !hasPosts }"
        >
          <font-awesome-icon icon="chevron-left" />
        </li>
        <li 
          v-for="page in totalPages" 
          :key="page" 
          class="pagination__item pagination__item--main"
          :class="{ active: page === currentPage }"
          @click="hasPosts ? setCurrentPage1(page) : null"
        >
          {{ page }}
        </li>
        <li
          class="pagination__item pagination__item--next"
          @click="currentPage < totalPages && hasPosts ? setCurrentPage1(currentPage + 1) : null"
          :class="{ disabled: currentPage === totalPages || !hasPosts }"
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

const currentPage = computed(() => postStore.currentPage);

const totalPages = computed(() => postStore.totalPages);

const setCurrentPage1 = (page) => {
  postStore.setCurrentPage(page);
};


</script>