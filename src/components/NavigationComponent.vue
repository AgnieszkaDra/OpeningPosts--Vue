<template>
  <nav class='nav'>
    <h1 
      class='nav__headline'
    >
      {{ headline }}
    </h1>
  </nav>
</template>

<script>
export default {
  props: {
    headline: String 
  }
};
</script>
