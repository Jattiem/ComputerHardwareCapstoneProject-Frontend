<template>
  <Navbar/>
   <section class="vh-100 gradient-custom vh-100">
    <div class="container">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration">
            <div class="card-body">
              <h3 class="pb-3">Contact Form</h3>
              <form id="contact-form" name="contact-form" action="https://formspree.io/f/xdojoljr" method="POST">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input v-model="name" type="name" id="name" name="name" class="form-control" placeholder="Enter your firstname">
                          </div>
                      </div>
                      <br>
                      <div class="col-md-6">
                          <div id="sur" class="md-form mb-0">
                              <input v-model="surname" type="surname" id="surname" name="surname" class="form-control" placeholder="Enter your Surname">
                          </div>
                      </div>
                      <br>
                  </div>
                  <br>
                  <div class="row">
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input v-model="email" type="email" id="email" name="email" class="form-control" placeholder="Enter email address">
                          </div>
                      </div>
                      <br>
                      <div id="con" class="col-md-6">
                          <div class="md-form mb-0">
                              <input v-model="number" type="number" id="number" name="number" class="form-control" placeholder="Enter contact number">
                          </div>
                      </div>
                      <br>
                  </div>
                  <br>
                  <div class="row">
                      <div class="col-md-12">
                          <div class="md-form">
                              <textarea v-model="comment" type="commit" id="comment" name="comment" rows="2" class="form-control md-textarea" placeholder="Your Comments"></textarea>
                          </div>
                      </div>
                  </div>
                  <br>
                  <div class="text-center row">
                  <button type="submit" class="btn btn-dark" target="blank">Submit</button>
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
  import Navbar from '@/components/Navbar.vue';
  export default {
      data() {
          return {
              name: "",
              surname: "",
              email: "",
              number: "",
              comment: ""
          };
      },
      components: { Navbar }
  }
  </script>
  
  <style scoped>
  section{
    background: linear-gradient(   red, blue);
    overflow-x: hidden;
  }
  .page-link{
    color: rgba(0, 0, 0, 0.795);
  }
  .card{
    height: 360px;
    border-radius: 20px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  }
  .container{
    padding-top: 170px;
  }
  button{
    width: 97%;
    margin-left: 10px;
  }
  h3{
    color: black;
  }
  @media only screen and (min-width:300px) and (max-width: 301px){
    section{
      margin-top:-40px;
      margin-bottom: 150px;
    }
    .card{
      height: 450px;
    }
    button{
      width: 240px;
    }
    .col-md-6{
      padding-bottom: 10px;
    }
  }
  @media only screen and (min-width:320px) and (max-width: 321px){
    section{
      margin-top: -40px;
      margin-bottom: 150px;
    }
    .card{
      height: 450px;
    }
    button{
      width: 260px;
    }
    .col-md-6{
      padding-bottom: 10px;
    }
  }
  @media only screen and (min-width:375px) and (max-width: 376px){
    section{
      margin-top: -40px;
      margin-bottom: 150px;
    }
    .card{
      height: 450px;
    }
    button{
      width: 320px;
    }
    .col-md-6{
      padding-bottom: 10px;
    }
  }
  @media only screen and (min-width:425px) and (max-width: 426px){
    section{
      margin-top: -40px;
      margin-bottom: 150px;
    }
    .card{
      height: 450px;
    }
    button{
      width: 370px;
    }
    .col-md-6{
      padding-bottom: 10px;
    }
  }
  @media only screen and (min-width:768px) and (max-width: 769px){
    section{
      margin-bottom: 60px;
    }
  }
  </style>