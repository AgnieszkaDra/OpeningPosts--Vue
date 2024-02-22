<template>
<NavigationComponent :headline="headline" />
<PostsComponent />
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue';
import PostsComponent from '@/components/PostsComponent.vue';
export default {
  name: "HomeView",
  components: {
    NavigationComponent,
    PostsComponent
  },
  data() {
    return {
      headline: "Client Reviews"
    };
  }
};
</script>
