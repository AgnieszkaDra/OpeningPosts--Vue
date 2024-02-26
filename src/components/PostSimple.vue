<template>
  <div>
   <div v-if="selectedPost">
      <h3>{{ selectedPost.title }}</h3>
      <p>{{ selectedPost.body }}</p>
      <p>{{ selectedPost.bodySecond }}</p>
      <p>{{ selectedPost.author }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'; 

const store = useStore();
const postsData = computed(() => store.state.postsData);
const route = useRoute(); 
const selectedPost = ref(null);

const path = route.path;
const segments = path.split('/');
const lastSegment = segments[segments.length - 1];
const decodedTitleValue = decodeURIComponent(lastSegment);

selectedPost.value = postsData.value.find(post => post.title === decodedTitleValue);

</script>



