import { defineStore } from "pinia";
import { ref } from 'vue';
import postDataArray from '../data/post';

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
    async fetchPosts() {
      try {
        const postsArray = [];
        const isLoading = ref(true)
        for (const postData of postDataArray) {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: postData.title,
              body: postData.body,
              bodySecond: postData.bodySecond,
              background: postData.background,
              author: postData.author,
              authors: postData.authors,
              userId: postData.userId
            }),
          });
          const data = await response.json();
          postsArray.push(data);
          isLoading.value = false
        }
        this.$patch({
          postsData: postsArray,
          totalPages: Math.ceil(postsArray.length / this.postsPerPage)
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
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