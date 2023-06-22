<script>

    export default{
        name: 'ComponentList',
        data() {
            return {
            };
        },
        props:{
            componentList : Array,
        },
        methods:{

        },
    }
</script>

<template>
    <div>
        <h1>
            porca
        </h1>
    </div>
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