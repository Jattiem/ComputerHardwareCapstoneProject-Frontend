<template>
    <nav class="navbar bg-dark fixed-top">
  <div class="container-fluid">
    <router-link class="navbar-brand"  to="/"><img src="https://i.postimg.cc/mk3ChYhQ/wp9360883.jpg" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">PC GAMING</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/register">Register</router-link>
          </li>
        </ul>
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
    
    <style scoped>
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
      nav{
        border-bottom: 2px solid red;
      }
      img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      height: 80px;
      border-radius: 50px;
      box-shadow: 3px 3px 3px red;
}
    </style>