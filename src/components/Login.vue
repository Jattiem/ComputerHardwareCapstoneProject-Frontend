<template>
    <Navbar2/>
      <section class="vh-100 gradient-custom login vh-100">
        <div class="container">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" style="border-radius: 20px;">
                <div class="card-body">
                  <h3 class="">Login</h3>
                    <form  @submit.prevent="login" method="POST">
                      <div class="form-outline mb-4">
                        <input autocomplete="on" required  v-model="email" type="email" class="form-control form-control-lg" placeholder="Email Address"/>
                      </div>   
                      <div class="form-outline mb-4">
                        <input minlength="4" maxlength="15" required v-model="password" type="password" class="form-control form-control-lg"  placeholder="Password"/>
                      </div>
                      <div class="row">
                        <button  v-on:click="submit" class="login btn btn-dark btn-block">Login</button>
                      </div>
                      <!-- <button to="/register">Don't have a account? Sign Up</button> -->
                      <router-link class="nav-link register"  to="/register">Don't have a account? Sign Up</router-link>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </template>
    
  <script>
    import Navbar2 from '@/components/Navbar2.vue';
    export default {
      data() {
        return {
          email: "",
          password: "",
        };
      },
      methods: {
        login() {
          const pay = {
            email: this.email,
            password: this.password,
            
          }
          this.$store.dispatch("login", pay);
        }
      },
      components: { Navbar2 }
  }
  </script>
    
  <style scoped>
  .register{
    padding-top: 10px;
    /* color: ; */
    text-decoration: underline;
  }
  .register:hover{
    color: rgb(0, 115, 255);
  }
  section{
    scroll-behavior: smooth;
    background: linear-gradient(   red, blue);
    overflow-x: hidden;
  }
  button{
    width: 97%;
    margin-left: 10px;
    height: 45px;
    margin-top: 20px;
  }
  input{
    margin-top: 40px;
  }
  .card{
    height: 360px;
    border-radius: 20px;
  }
  .page-link{
    color: rgba(0, 0, 0, 0.795);
  }
  .container{
    padding-top: 170px;
  }
  h3{
    color: black;
  }
  @media only screen and (min-width:300px) and (max-width: 301px){
    section{
      overflow-x: hidden;
      margin-top: -30px;
       margin-bottom: 60px;
    }
    .card{
      height: 350px;
    }
    button{
      width: 90%;
      margin-left: 12px;
    }
  }
  @media only screen and (min-width:320px) and (max-width: 321px){
    section{
      overflow-x: hidden;
       margin-top: -30px;
       margin-bottom: 60px;
    }
    .card{
      height: 350px;
    }
    button{
      width: 91%;
      margin-left: 12px;
    }
  }
  @media only screen and (min-width:375px) and (max-width: 376px){
    section{
      overflow-x: hidden;
      margin-top: -30px;
       margin-bottom: 60px;
    }
    .card{
      height: 350px;
    }
    button{
      width: 92%;
      margin-left: 12px;
    }
  }
  @media only screen and (min-width:425px) and (max-width: 426px){
    section{
      overflow-x: hidden;
      margin-top: -30px;
       margin-bottom: 60px;
    }
    .card{
      height: 350px;
    }
    button{
      width: 93%;
      margin-left: 12px;
    }
  }
  @media only screen and (min-width:768px) and (max-width: 769px){
    section{
       overflow-x: hidden;
       margin-top: -45px;
       margin-bottom: 70px;
    }
    button{
      width: 96%;
      margin-left: 12px;
    }
  }
  </style>