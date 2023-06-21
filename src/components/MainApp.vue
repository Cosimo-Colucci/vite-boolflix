<script>
    import ComponentList from './ComponentList.vue';
    import SearchComponent from './SearchComponent.vue';

    export default{
    name: "MainApp",
    data() {
        return {
            
        };
    },
    components: {
        ComponentList,
        SearchComponent,
    }
}
</script>

<template>
    <h2>
        main
    </h2>
    <ComponentList/>
    <SearchComponent/>
</template>

<style lang="scss" scoped>
  
</style>