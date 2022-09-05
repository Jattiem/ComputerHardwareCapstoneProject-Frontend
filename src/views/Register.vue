<template>
    <Navbar2/>
        <section class="vh-100 gradient-custom">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 10px;">
              <div class="card-body">
                <h3 class="pb-3">Register</h3>
                <form @submit.prevent="register" method="POST">
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" v-model="fullname" id="user_fullname" placeholder="Enter Your Full Name" required class="form-control form-control-lg"/>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="password" v-model="password" id="password" placeholder="Enter Your Password" minlength="8" maxlength="15" required class="form-control form-control-lg"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input class="form-control form-control-lg" type="email" v-model="email" id="email" placeholder="Enter Your Email" required/>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input class="form-control form-control-lg" type="tel" v-model="phonenumber" id="phone_number" placeholder=" Enter Your Phone Number" maxlength="10" required/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <input @click="register()" class="btn btn-dark input" type="button" value="Register" />
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
    export default {
        data() {
            return {
                fullname: "",
                email: "",
                password: "",
                phonenumber: "",
                userRole: "",
            };
        },
        methods:{
    register(){
      const user = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
          phonenumber: this.phonenumber,
          userRole: this.userRole
      }
      this.$store.dispatch('register', user) 
    }
  },
        components: { Navbar2 }
    };
    </script>
    
    <style scoped>
      section{
        scroll-behavior: smooth;
      }
    .input{
      width: 97%;
      margin-left: 10px;
      height: 45px;
    }
    .page-link{
      color: rgba(0, 0, 0, 0.795);
      margin-top: -10px;
    }
    .card{
      height: 370px;
      border-radius: 10px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  10px 10px 10px #cccccc,
                 -10px -10px 10px #ffffff;
    }
    .container{
      margin-top: 170px;
    }
      @media only screen and (min-width:300px) and (max-width: 301px){
      .card{
        height: 530px;
      }
      section{
        margin-bottom: 150px;
      }
    }
      @media only screen and (min-width:320px) and (max-width: 321px){
      .card{
        height: 520px;
      }
      section{
        margin-bottom: 140px;
      }
    }
     @media only screen and (min-width:375px) and (max-width: 376px){
      .card{
        height: 520px;
      }
      section{
        margin-bottom: 140px;
      }
    }
     @media only screen and (min-width:425px) and (max-width: 426px){
      .card{
        height: 520px;
      }
      section{
        margin-bottom: 150px;
      }
    }
    </style>