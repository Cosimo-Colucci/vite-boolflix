<script>

    export default{
        name: 'ComponentList',
        data() {
            return {
                apiUrl:'https://api.themoviedb.org/3/search/movie?api_key=9a4f4493b3ac828e491ed30b5045198c&query=',
            };
        },
        props:{
            movies : Array,
        },
        methods:{

        },
    }
</script>

<template>
    <div>
        
        <article v-for="movie in movies">
            <h1>
                {{ movie.title }}
            </h1>
            <h2>
                {{ movie.original_title }}
            </h2>
        </article>
    </div>
</template>

<style lang="scss" scoped>
  
</style>