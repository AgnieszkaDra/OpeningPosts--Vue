<template>
  <nav class='section nav'>
    <h1 
      class='nav__headline'
    >
      {{ headline }}
    </h1>
    <div class='nav__underline'>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    headline: String 
  }
};
</script>
