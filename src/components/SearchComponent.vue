<script>
    import { store } from '../store';

    export default{
        name: 'SearchComponent',
        data() {
            return {
                store,
            };
        },

        log(message){
            console.warn(message)
        }
    }
</script>

<template>
    <input type="text" id="serch-input " v-model="store.searchedText">
    <button @chick="log(store.searchedText)" :value="store.searchedText">Clicca</button>    
</template>

<style lang="scss" scoped>
  
</style>