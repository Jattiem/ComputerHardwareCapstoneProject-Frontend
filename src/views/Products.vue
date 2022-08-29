<template>
    <Navbar/>
    <Cards/>
    </template>
    <script>
    import Cards from "../components/Cards.vue";
    import Navbar from "@/components/Navbar.vue";
    export default {
      computed:{
        // products(){
        //   return this.$store.state.products;
        // }
      },
      components: {
        Cards,
        Navbar
    },
      mounted(){
        //this.$store.dispatch('getProducts');
        // this.$store.dispatch('clearSingleProduct');
      }
    };
    </script>
    
    <style scoped>
    </style>