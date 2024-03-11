import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    currentPage: 1,
    totalPages: 1,
    postsData: [],
    postsPerPage: 3,
    currentSelect: [],
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
  },
  getters: {
    filteredBySelect: (state) => {
      let filteredPosts = [];

      if (state.currentSelect.length === 0) {
        filteredPosts = state.postsData;
      } else {
        const res1 = state.postsData.filter(post => post.select === state.currentSelect[0]);
        const res2 = state.postsData.filter(post => post.select === state.currentSelect[1]);
        const res3 = state.postsData.filter(post => post.select === state.currentSelect[2]);
        const res4 = state.postsData.filter(post => post.select === state.currentSelect[3]);

        if (res1.length > 0 || res2.length > 0 || res3.length > 0 || res4.length > 0) {
          filteredPosts = [...res1, ...res2, ...res3, ...res4];
        }

      }
      return filteredPosts
    }
  }
},

);