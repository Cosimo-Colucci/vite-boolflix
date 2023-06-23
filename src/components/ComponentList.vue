<script>

    export default{
        name: 'ComponentList',
        data() {
            return {
                availablelenguages :[
                    'it.png', 'en.png', 'fr.png',
                ]
            };
        },
        props:{
            componentList : Array,
        },
        methods:{
            isLanguageFlagPresent(language){
                if(this.availablelenguages.includes(language)){
                    return true
                }
                return false;
            },
            getImagePath(img){
                return new URL (`../assets/img/${img}.png`, import.meta.url).href;
            }

        },
    }
</script>

<template>
    
    <div>
        <article v-for="movie in componentList">
            <h1>
                {{ movie.title }}
            </h1>
            <h2>
                {{ movie.original_title }}
            </h2>

            <img v-if="isLanguageFlagPresent(movie.original_language)" 
            :src="getImagePath(movie.original_language)" alt="">
            <pre v-else>
                {{ movie.original_language }}
            </pre>

            <span>
                {{ movie.vote_average }}
            </span>
        </article>
    </div>
</template>

<style lang="scss" scoped>
  
</style>