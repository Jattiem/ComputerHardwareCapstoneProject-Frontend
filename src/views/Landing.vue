<template>
    <Navbar/>
      <Home/>
    </template>
    
    <script>
    import Home from '@/components/Home.vue';
    import Navbar from '@/components/Navbar.vue';
    export default {
        components: { Navbar, Home }
    }
    </script>
    
    <style>
    </style>