<script>
import { store } from '../store';
import axios from 'axios';

    export default{
        name: 'ComponentList',
        data() {
            return {
                store,
                apiUrl:'https://api.themoviedb.org/3/search/movie?api_key=9a4f4493b3ac828e491ed30b5045198c&query=',
                results: [],
                activeIndex: 0
            };
        },
        beforeUpdate(){
             axios.get((this.apiUrl)+this.store.searchedText)
            .then( (response) => {
                this.results = response.data.results[this.activeIndex].title;
                console.log(this.results);
            })
            .catch(function (error) {
                    // handle error
                    console.log(error);
                });
            
        }
    }
</script>

<template>
    <div>
        {{ results }}
    </div>
    <h3>
        {{store.searchedText}}
    </h3>
</template>

<style lang="scss" scoped>
  
</style>