import { createStore } from 'vuex';
import postDataArray from '../data/post';

const store = createStore({
  state() {
    return {
      currentPage: 1,
      totalPages: 1,
      postsData: [], 
      postsPerPage: 3 
    };
  },
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setPostsData(state, posts) {
      state.postsData = posts;
    }
  },
  actions: {
    async fetchPosts(context) {
      try {
        const posts = [];
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
          posts.push(data);
          console.log(data)
        }
        console.log(context)
        context.commit('setPostsData', posts);
        context.commit('setTotalPages', Math.ceil(posts.length / context.state.postsPerPage));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  }
});

export default store;