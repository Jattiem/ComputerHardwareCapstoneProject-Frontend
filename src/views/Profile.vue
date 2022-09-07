<template>
    <Navbar/>
      <section class="vh-100" style="background-color: #eee;"  v-if="user" >
      <div class="container">
        <h2 class="text-center">Profile</h2>
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  class="rounded-circle img-fluid" style="width: 150px;">
                <h5 class="my-3">{{user.fullname}}</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-8 second">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Fullname</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-3">{{user.fullname}}</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-3">{{user.email}}</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-3">{{user.phonenumber}}</p>
                  </div>
                </div>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </template>
    
    <script>
    import Navbar from '../components/Navbar.vue';
    export default {
      mounted() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
      components: {
        Navbar,
    }
    }
    </script>
    
    <style scoped>
    section{
      padding-left: 10px;
  padding-right: 10px;
        padding-top: 140px;
        background: linear-gradient(   red, blue);
        overflow-x: hidden;
    }
    h2{
      color: black;
    }
    </style>