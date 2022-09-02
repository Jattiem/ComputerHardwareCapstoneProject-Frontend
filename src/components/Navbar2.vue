<template>
    <nav id="nav" class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand spin"  to="#"><img src="https://i.postimg.cc/mk3ChYhQ/wp9360883.jpg" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
    </nav>
      <router-view/>
    </template>
    
    <script>
    export default {
    }
    </script>
    
    <style>
    .spin{
      transition: all 0.3s ease-in-out;
    }
    .spin:hover {
    transform: rotate(-20deg);
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
      font-size: 25px;
      padding-bottom: 16px;
    }
    .shopicon:hover{
      color: black;
    }
    .personicon:hover{
      color: black  ;
    }
    .personicon{
      font-size: 30px;
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