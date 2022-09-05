<template>
  <Navbar2/>
    <section class="vh-100 gradient-custom login vh-100">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 20px;">
              <div class="card-body">
                <h3 class="pb-1">Login</h3>
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
  height: 370px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px white;
}
.page-link{
  color: rgba(0, 0, 0, 0.795);
}
.container{
  padding-top: 170px;
}

@media only screen and (min-width:300px) and (max-width: 301px){
  section{
    overflow-x: hidden;
     margin-top: -45px;
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
     margin-top: -45px;
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
     margin-top: -45px;
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
     margin-top: -45px;
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
  }
  button{
    width: 96%;
    margin-left: 12px;
  }
}
</style>