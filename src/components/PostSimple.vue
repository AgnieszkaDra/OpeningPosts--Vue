<template>
  <div>
   <div v-if="selectedPost">
      <h3>{{ selectedPost.title }}</h3>
      <p>{{ selectedPost.body }}</p>
      <div>{{ selectedPost.bodySecond }}</div>
      <p>{{ selectedPost.author }}</p>
    </div>
  </div>
</template>
 
<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/store';

const postStore = usePostStore();
const postsData = computed(() => postStore.postsData);
const selectedPost = ref(null);
const route = useRoute();

onMounted(() => {
  const postTitle = route.params.postTitle;
  selectedPost.value = postsData.value.find(post => post.title === postTitle);
});

</script>

