<template>
  <section class='section posts'>
    <div 
      v-for="(post, index) in postsData" 
      :key="index"
      class="posts__item"
    >
      {{ post.title }}
      {{ post.body}}
      {{ post.author }}
    </div>
  </section>
</template>

<script>
import createNewPosts from '../providers/createNewPosts'
import postDataArray from '../../data/post';

export default {
  name: 'PostsSection', 
  mounted() {
    console.log('mounted')
    createNewPosts(postDataArray);
  },
  data() {
    return {
      postsData: postDataArray
    };
  }
};
</script>


