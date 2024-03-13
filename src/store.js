import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    currentPage: 1,
    totalPages: 1,
    postsData: [],
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
      alert('value')
      this.currentSearch = value;
    },
  },
  getters: {
    filteredBySelect: (state) => {
      let filteredPosts = [];
    
      if (state.currentSelect.length === 0) {
        filteredPosts = state.postsData;
      } else {
        filteredPosts = state.postsData.filter(post => {
          return state.currentSelect.every(selection => post.select.includes(selection));
        });
      }
    
      return filteredPosts;
    },
  
    // filteredBySearch: (state) => {
    //   let filteredPosts = [];
      
    //   for (const letter of state.currentSearch.toLowerCase()) {
    //     filteredPosts = filteredPosts.filter(post => {
    //       return post.title.includes(letter);
    //     });
    //   }
      
    //   return filteredPosts;
    // },

     
    filteredBySearch: (state) => {
      let filteredPosts = [];
      console.log(state.currentSearch)
        filteredPosts= state.postsData.filter(post => {
          return post.title === state.currentSelect;
        });
     return filteredPosts;
    } 
   
  
  }});