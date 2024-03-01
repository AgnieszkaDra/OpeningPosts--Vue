import { defineStore } from "pinia";
import postDataArray from '../data/post';

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    currentPage: 1,
    totalPages: 1,
    postsData: [],
    postsPerPage: 3,
    currentAuthor: null, // Add currentRegion state
  }),
  actions: {
    async fetchPosts() {
      try {
        const postsArray = [];
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
              userId: postData.userId
            }),
          });
          const data = await response.json();
          postsArray.push(data);
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
      // Ensure that the page is within the valid range
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    // Add a setter for currentRegion
    setCurrentAuthor(author) {
      this.currentAuthor = author;
    },
  },
  // Define the computed property filteredByRegion
  getters: {
    filteredByAuthor() {
      console.log(this.currentAuthor)
      if(this.currentAuthor === 'Wojtek Paul') {
        alert('Wojtek')
      }
      return this.currentAuthor !== null
        ? this.postsData.filter(({ author }) => {
            return author === this.currentAuthor;
          })
        : this.postsData;
    },
  },
});