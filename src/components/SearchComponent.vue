<script>

    export default{
        name: 'SearchComponent',
        data() {
            return {
                searchInput: ''
            };
        },
        methods: {
            
        }
    }
</script>

<template>
    <input type="text" name="search-movies-input" id="search-movies-input" v-model="searchInput">
    <button @click="$emit('onSearch', searchInput)">click</button>
</template>

<style lang="scss" scoped>
  
</style>