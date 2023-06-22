<script>
    import ComponentList from './ComponentList.vue';
    import SearchComponent from './SearchComponent.vue';
    import axios from 'axios';

    export default{
    name: "MainApp",
    data() {
        return {
            onSearchApiUrl: 'https://api.themoviedb.org/3/search/movie',
            movies: []
        };
    },
    methods:{
        
        getMovies(onSearch){
            axios.get(this.onSearchApiUrl,{
                params:{
                    api_key: '9a4f4493b3ac828e491ed30b5045198c',
                    query: onSearch,
                }
            })
            .then((response) => {
                    console.log(response.data.results);
                    this.movies = response.data.results;
                    console.log(this.movies);
            })
            .catch((error) => {
                console.log(error)
            });
        }
    },
    components: {
        SearchComponent,
        ComponentList,
    }
}
</script>

<template>
    <SearchComponent @onSearch='getMovies' />
    <ComponentList :componentList="movies"/>
</template>

<style lang="scss">
  
</style>