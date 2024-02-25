<template>
  <div>
    <h2>{{ decodedTitle }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decodedTitle: ''
    };
  },
  mounted() {
    const route = this.$route;
    const path = route.path;
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];
    const decodedTitle = decodeURIComponent(lastSegment);
    this.decodedTitle = decodedTitle;
  }
  }

</script>


