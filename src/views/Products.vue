<template>
    <Navbar/>
    <Cards/>
    </template>
    <script>
    import Cards from "../components/Cards.vue";
    import Navbar from "@/components/Navbar.vue";
    export default {
      computed:{
      },
      components: {
        Cards,
        Navbar
    },
      mounted(){
      }
    };
    </script>
    
    <style scoped>
    </style>