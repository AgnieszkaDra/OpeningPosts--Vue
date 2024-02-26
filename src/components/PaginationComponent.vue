<template>
  <section class="section pagination">
    <div class="pagination__container">
      <button 
        class="pagination__button pagination__button--prev"
      >
        <font-awesome-icon icon="chevron-left" />
      </button>
      <button 
        class="pagination__button pagination__button--main"
      >
        1
      </button>
      <button 
        class="pagination__button pagination__button--main"
      >
        2
      </button>
      <button 
        class="pagination__button pagination__button--main"
      >
        3
      </button>
      <button 
        class="pagination__button pagination__button--next"
      >
        <font-awesome-icon icon="chevron-right"/>
      </button>
  </div>
  </section>

</template>
  
  <script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
  
    library.add(faChevronLeft)
    library.add(faChevronRight)
  
    export default {
      components: {
      FontAwesomeIcon
      }
    }
  
  </script>