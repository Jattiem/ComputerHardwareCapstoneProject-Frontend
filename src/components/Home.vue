<template>
    <section class="home vh-100">
        <div id="title" class="container  d-flex justify-content-center align-items-center flex-column h-100">
            <!-- <h2 class="text-center">Hi</h2> -->
            <h2 class="text-center">Welcome to</h2>
            <h2 class="text-center">
              Pc gaming
            </h2>
        <router-link type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark" to="./products">See More</router-link>
        <!-- <button type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark">Light</button> -->
        </div> 
    </section>
</template>

<script>
export default {
}
</script>

<style scoped>
h2{
    color: white;
    /* font-style: bold; */
    /* font-display: b; */
    /* position: fixed; */
    /* position: sticky; */
}
.home {
  background: url(https://i.postimg.cc/xj74cvDc/logo-brand-clothing-shoe-sneakers-png-favpng-Li-Z1c4-Q3s39-AD7-Vhiw64t-WXc-B.jpg),
   linear-gradient(rgba(0, 0, 0, 0.295), rgb(0, 0, 0));
  background-blend-mode: overlay;
  /* background-size: cover; */
  background-position: center center;
  background-attachment: fixed; 
}
</style>