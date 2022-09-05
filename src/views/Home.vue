<template>
    <Navbar2/>
        <section class="home vh-100">
            <div id="title" class="container  d-flex justify-content-center align-items-center flex-column h-100">
                <h2 class="text-center">Welcome to</h2>
                <h2 class="text-center">
                  Sneakers
                </h2>
            <router-link type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark" to="./login">Login</router-link>
            </div> 
        </section>
    </template>
    
    <script>
    import Navbar2 from '@/components/Navbar2.vue';
    export default {
        components: { Navbar2 }
    }
    </script>
    
    <style scoped>
        section{
            background: linear-gradient(   red, blue);
        }
    h2{
        color: white;
    }
    .home {
  background: url(https://i.postimg.cc/05z4rb8h/52-520290-rgb-live-wallpaper-pc.jpg),
   linear-gradient(rgba(0, 0, 0, 0.295), rgb(0, 0, 0));
  background-blend-mode: overlay;
  background-size: cover;
  background-attachment: fixed; 
}
    </style>