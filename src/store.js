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
  
       const res1 = state.postsData.filter(post => post.select.forEach(element => {
        if(element === state.currentSelect[0]){
          filteredPosts.push(post)
        }
       }))
       const res2 = state.postsData.filter(post => post.select.forEach(element => {
        if(element === state.currentSelect[1]){
          filteredPosts.push(post)
        }
       }))
       const res3 = state.postsData.filter(post => post.select.forEach(element => {
        if(element === state.currentSelect[2]){
          filteredPosts.push(post)
        }
       }))
       const res4 = state.postsData.filter(post => post.select.forEach(element => {
        if(element === state.currentSelect[3]){
          filteredPosts.push(post)
        }
       }))

       if (res1.length > 0 || res2.length > 0 || res3.length > 0 || res4.length > 0 ) {
        filteredPosts = [...res1, ...res2, ...res3, ...res4];
      }
    }
      return filteredPosts

    }
  }
},

);