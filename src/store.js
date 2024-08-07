import { defineStore } from "pinia";
import { ref } from 'vue';
export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    currentPage: 1,
    lastPage: 1,
    postsData: ref([]),
    postsPerPage: 3,
    currentSelect: [],
    currentSearch: ''
  }),
  actions: {
    setCurrentPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    setCurrentSelect(inputSelected) {
      this.currentSelect = inputSelected;
      this.setFirstPage()
      this.setLastPage()
    },
    setTotalPages(state) {
      this.totalPages(state)
    },
    setFirstPage() {
      this.currentPage = 1
    },
    setLastPage() {
      this.lastPage = this.totalPosts / this.postsPerPage
    }
  },
  getters: {
    filteredBySelect: (state) => {
      
      let filteredPosts = state.postsData;
    
      if (state.currentSelect.length === 0) {
        filteredPosts = state.postsData;
      } else {
        filteredPosts = state.postsData.filter(post => {
          return state.currentSelect.every(selection => post.select.includes(selection));
        });
      }
      
      return filteredPosts
    },
    totalPages: (state) => {
      return Math.ceil(state.postsData.length / state.postsPerPage);
    },
    totalPosts: (state) => {
      return Math.ceil(state.filteredBySelect.length);
    },
  }
}
);