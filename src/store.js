import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    currentPage: 1,
    totalPages: 1,
    postsData: [],
    postsPerPage: 3,
    currentAuthor: 'Autorzy', 
  }),
  actions: {
    setCurrentPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    setCurrentAuthor(author) {
      this.currentAuthor = author;
    },
  },
  getters: {
    filteredByAuthor: (state) => {
      if (state.currentAuthor === 'Autorzy') {
          return state.postsData;
      } else {
        return state.postsData.filter(({ author }) => author === state.currentAuthor);
      }
  },
  },
});