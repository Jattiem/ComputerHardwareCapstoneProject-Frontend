<template>
  <nav id="nav" class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand spin"  to="/"><img src="https://i.postimg.cc/gkTytsLv/360-F-136554929-JG7-RLQNf-AKp-AQlm-Rmd-V7-Qhb-EM1-PDt6k2.jpg" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/landing">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/products">Products</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link"  to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/register">Register</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link"  to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/admin">Admin</router-link>
          </li>
        </ul>
        <form class="d-flex search" role="search">
            <router-link class="logout"  to="/">Logout</router-link>
            <br>
          <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search">
          <!-- <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button> -->
        </form>
        <!-- <button><a href="../components/Navbar1.vue">Logout</a></button> -->
  
        <div class="dicons">
        <div class="personicon">
          <router-link class="nav-link bi bi-person-fill"  to="/profile"></router-link>
          </div>
        <div class="shopicon">
          <!-- <router-link class="nav-link bi bi-cart-fill"  to="/cart"></router-link> -->
          <button class="nav-link bi bi-cart-fill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></button>
        </div>
         </div>
       </div>
       </div>
       
  </nav>
    <router-view/>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  .bi-cart-fill{
    border: none;
    background: none;
  }
  .logout{
    color: black;
    font-weight: bold;
  }
  .logout:hover{
    color: black;
  }
  .spin{
    transition: all 0.3s ease-in-out;
  }
  .spin:hover {
  /* transition: .50s ease; */
  /* transition-delay: .50s ease-out; */
  transform: rotate(-20deg);
  /* transition: transform .7s ease-in-out; */
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav{
      width: 100%;
      top: 0;
      position: fixed;
      z-index: 10;
  }
  nav {
    padding: 30px;
  }
  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
  }
  nav a.router-link-exact-active {
    color: black;
    font-weight: bold;
  }
  img{
    height: 80px;
    border-radius: 50px;
  }
  .shopicon{
    /* height: 20px; */
    font-size: 25px;
    /* padding-bottom: px; */
    padding-bottom: 16px;
  }
  .shopicon:hover{
    color: black;
  }
  .personicon:hover{
    color: black  ;
  }
  .personicon{
    /* height: 20px; */
    font-size: 30px;
    /* padding-bottom: 10px; */
  }
  @media only screen and (min-width:320px),(min-width:375px)  and (max-width: 321px),(max-width:376px) {
    .dicons{
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
    .shopicon{
    padding-top: 3px;
  }
  }
  @media only screen and (min-width: 300px) and (max-width: 301px) {
    .search{
      display: none;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 321px) {
    .search{
      display: none;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 376px) {
    .search{
      display: none;
    }
  }
  @media only screen and (min-width: 425px) and (max-width: 426px) {
    .search{
      display: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 769px) {
    .search{
      display: none;
    }
  }
  </style>