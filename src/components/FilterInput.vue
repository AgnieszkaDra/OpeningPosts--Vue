<template>
    <div
        class="operations__filter filter"
    >
       <select 
        class="filter__select"
        >
        <option 
            v-for="author in AUTHORS" 
            :key="author"
            class='filter__option'
        >
            {{ author }}
        </option>
    </select>  
    </div>
   
</template>

<script>
    
    const AUTHORS = ['Magdalena Paul', 'Wojtek Paul']

    export default {
        data() {
            return {
                AUTHORS: AUTHORS
            }
        }
    }
</script>
