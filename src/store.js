import { defineStore } from "pinia";
import { ref } from 'vue';
export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    currentPage: 1,
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
    },
    setCurrentSearch(value) {
      this.currentSearch = value;
    },
    setTotalPages(state) {
      this.totalPages(state)
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
      return Math.ceil(state.filteredBySelect.length / state.postsPerPage);
    }
  }
}
);