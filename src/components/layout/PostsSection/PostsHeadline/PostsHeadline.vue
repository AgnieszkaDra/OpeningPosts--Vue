<template>
  <div>
    <h2 class="headline">
      {{ headline }}
    </h2>
    <div class="underline"></div>
  </div>
</template>

<script>
  export default {
  props: {
    headline: {
      type: String,
      required: true
    }
  }
  };
</script>



