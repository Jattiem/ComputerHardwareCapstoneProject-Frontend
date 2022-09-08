<template>
  <nav class="navbar bg-dark fixed-top">
  <div class="container-fluid">
    <router-link class="navbar-brand"  to="/landing"><img src="https://i.postimg.cc/mk3ChYhQ/wp9360883.jpg" alt="logo"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start bg-dark" data-bs-scroll="true" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">PC GAMING</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/landing">Home</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" v-if="user" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/about">About</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link v-if="user.userRole != 'user'" class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/login">Login</router-link>
          </li>
        </ul>
        <div class="dicons row" v-if="user">
          <div class="personicon">
            <router-link
              class="nav-link bi bi-person-fill"
              to="/profile"
            ></router-link>
          </div>
          <div class="shopicon" v-if="user">
              <button
              class="nav-link bi bi-cart-fill"
              type="button" data-bs-target="#offcanvasScrolling" data-bs-toggle="offcanvas"
              ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
  <router-view />
  <CartVue />
</template>
  
  <script>
    import CartVue from "./Cart.vue"
export default {  
  mounted() {
    this.$store.commit("setAdmin");
  },
  components: {CartVue},
  computed: {
    user() {
      return this.$store.state.user;
    },
    cart() {
      return this.$store.state.cart;
    },
    admin() {
      return this.$store.state.admin;
    },
  },

};
</script>
  
  <style scoped>
    .navbar{
        --bs-navbar-toggler-border-color: white;
        --bs-navbar-toggler-border-radius: 0.380rem;
      }
    .navbar-toggler{
      color: red;
    }
    #offcanvasNavbarLabel{
      color: white;
    }
.bi-cart-fill {
  border: none;
  background: none;
  color: white;
}
.logout {
  color: black;
  font-weight: bold;
}
.logout:hover {
  color: black;
}
nav{
        border-bottom: 2px solid red;
      }
nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 10px;
}
nav a.router-link-exact-active {
  color: red;
  font-weight: bold;
}
img {
  height: 80px;
  width: 80px;
  object-fit: cover;
  height: 80px;
      border-radius: 50px;
      box-shadow: 3px 3px 3px red;
}
.shopicon {
  font-size: 25px;
  padding-left: 175px;
}
.shopicon:hover {
  color: black;
}
.personicon:hover {
  color: black;
}
button:hover{
  color: black;
}
.personicon {
  font-size: 30px;
  padding-right: 30px;
}
@media only screen and (min-width:300px) and (max-width: 301px){
  .shopicon{
    padding-left: 125px;
  }
}
@media only screen and (min-width:320px) and (max-width: 321px){
  .shopicon{
    padding-left: 135px;
  }
}
@media only screen and (min-width:375px) and (max-width: 376px){
  .shopicon{
    padding-left: 162px;
  }
}
</style>