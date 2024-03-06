<template>
  <section class="section pagination">
    <div class="pagination__container">
      <button 
        class="pagination__button pagination__button--prev"
        @click="setCurrentPage1(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        <font-awesome-icon icon="chevron-left" />
      </button>
      <button 
        v-for="page in totalPages" 
        :key="page" 
        class="pagination__button pagination__button--main"
        :class="{ active: page === currentPage }"
        @click="setCurrentPage1(page)"
      >
        {{ page }}
      </button>
      <button 
        class="pagination__button pagination__button--next"
        @click="setCurrentPage1(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        <font-awesome-icon icon="chevron-right"/>
      </button>
    </div>
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