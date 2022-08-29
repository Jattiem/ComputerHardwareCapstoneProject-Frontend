<template>
    <!-- <section class="login vh-100">
       <h2>Login</h2>
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form  @submit="login" method="PATCH">
            
            <div class="form-outline mb-4">
              <input required  v-model="email" type="email" id="form1Example13" class="form-control form-control-lg" placeholder="Email Address"/>
            </div>
            
            <div class="form-outline mb-4">
              <input required v-model="password" type="password" id="form1Example23" class="form-control form-control-lg"  placeholder="Password"/>
            </div>
            <div class="d-flex justify-content-around align-items-center mb-4">
              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>
                      <button  v-on:click="submit" type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
          </form>
        </div>
      </div>
    </div>
    </section> -->
    <Navbar2/>
    <section class="vh-100 gradient-custom login">
    <div class="container">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style="border-radius: 20px;">
            <div class="card-body">
              <h3 class="pb-3">Login</h3>
                  <form  @submit.prevent="login" method="POST">
            
            <div class="form-outline mb-4">
              <input autocomplete="on" required  v-model="email" type="email" id="form1Example13" class="form-control form-control-lg" placeholder="Email Address"/>
            </div>
  
            
            <div class="form-outline mb-4">
              <input minlength="8" maxlength="15" required v-model="password" type="password" id="form1Example23" class="form-control form-control-lg"  placeholder="Password"/>
            </div>
  
            <!-- <div class="d-flex justify-content-around align-items-center mb-4">
              
              <div class="form-check">
                <input class="form-check-input" type="checkbox"  id="form1Example3" checked />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div> -->
  <div class="row">
    <button  v-on:click="submit" class="login btn btn-dark btn-block">Login</button>
  </div>
  
  
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
  // import NewNav from '@/components/NewNav.vue';

  export default {
      data() {
          return {
              email: "",
              password: "",
          };
      },
      methods: {
          login() {
              this.$store.dispatch("login", {
                  email: this.email,
                  password: this.password,
              });
          }
      },
      components: { Navbar2 }
  }
  </script>
  
  <style scoped>
  @media only screen and (min-width:300px) and (max-width: 301px){
    section{
      margin-bottom: 100px;
    }
    .login{
    width: 90%;
    margin-left: 10px;
    height: 45px;
  }
  }
  @media only screen and (min-width:320px) and (max-width: 321px){
    section{
      margin-bottom: 100px;
    }
    .login{
    width: 91%;
    margin-left: 11px;
    height: 45px;
  }
  }
  @media only screen and (min-width:375px) and (max-width: 376px){
    section{
      margin-bottom: 100px;
      /* margin-left: 50px; */
    }
    .login{
    width: 93%;
    margin-left: 10px;
    height: 45px;
  }
  }
  @media only screen and (min-width:425px) and (max-width: 426px){
    section{
      margin-bottom: 100px;
      /* margin-left: 50px; */
    }
    .login{
    width: 93%;
    margin-left: 10px;
    height: 45px;
  }
  }
  section{
    /* padding-bottom: 1px; */
    overflow-x: hidden; 
  }
  button{
    width: 97%;
    margin-left: 10px;
    height: 45px;
  }
  input{
    margin-top: 40px;
  }
  .card{
    height: 370px;
    border-radius: 10px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  10px 10px 10px #cccccc,
               -10px -10px 10px #ffffff;
  }
  .page-link{
    color: rgba(0, 0, 0, 0.795);
    /* background-color: gray; */
  }
  nav{
    display: flex;
    justify-content: center;
  }
  h2{
    padding-top: 10px;
  }
  .container{
    margin-top: 170px;
  }
  </style>