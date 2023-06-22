<script>
  import MainApp from './components/MainApp.vue';

  export default{
    name: "App",
    data() {
        return {
          
        };
    },
    components: {
        MainApp,
    }
}
</script>

<template>
  <MainApp/>
</template>

<style lang="scss">
  @import 'bootstrap/scss/bootstrap';
  @import './styles/general.scss';
</style>
