<template>
  <div>
    <h2>{{ decodedTitle }}</h2>
    <div 
      v-if="selectedPost"
    >
      <h3>{{ selectedPost.title }}</h3>
      <p>{{ selectedPost.body }}</p>
      <p>{{ selectedPost.bodySecond }}</p>
      <p>{{ selectedPost.author }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const currentPage = computed(() => store.state.currentPage);
console.log(currentPage)

// export default {
//   setup() {
//     const decodedTitle = ref('');
//     const postsData = inject('postsData');
//     const selectedPost = ref(null);
//     const route = useRoute(); 

//     const findPostByTitle = () => {
//       const path = route.path;
//       const segments = path.split('/');
//       const lastSegment = segments[segments.length - 1];
//       const decodedTitleValue = decodeURIComponent(lastSegment);

//       selectedPost.value = postsData.value.find(post => post.title === decodedTitleValue);
//     };

//     onMounted(() => {
//      findPostByTitle();
//     });

//     return {
//       decodedTitle, 
//       selectedPost 
//     };
//   }
// };
</script>


