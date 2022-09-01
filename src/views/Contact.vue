<template>
    <Navbar/>
     <section class="vh-100 gradient-custom">
      <div class="container">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 10px;">
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
      overflow-x: hidden;
    }
    .page-link{
      color: rgba(0, 0, 0, 0.795);
    }
    nav{
      display: flex;
      justify-content: center;
    }
    .card{
      height: 360px;
      border-radius: 10px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  10px 10px 10px #cccccc,
                 -10px -10px 10px #ffffff;
    }
    .container{
      margin-top: 170px;
    }
      @media only screen and (min-width:300px) and (max-width: 301px){
        #comment{
          margin-top: -20px;
        }
        #email{
          margin-top: -20px;
        }
      .card{
        height: 440px;
      }
      input{
        margin-bottom: 10px;
      }
      section{
        margin-bottom: 150px;
      }
    }
      @media only screen and (min-width:320px) and (max-width: 321px){
         #comment{
          margin-top: -20px;
        }
        #email{
          margin-top: -20px;
        }
      .card{
        height: 450px;
      }
      input{
        margin-bottom: 10px;
      }
      section{
        margin-bottom: 150px;
      }
    }
     @media only screen and (min-width:375px) and (max-width: 376px){
       #comment{
          margin-top: -20px;
        }
        #email{
          margin-top: -20px;
        }
      .card{
        height: 450px;
      }
      section{
        margin-bottom: 170px;
      }
      input{
        margin-bottom: 10px;
      }
    }
     @media only screen and (min-width:425px) and (max-width: 426px){
       #comment{
          margin-top: -20px;
        }
        #email{
          margin-top: -20px;
        }
      .card{
        height: 450px;
      }
      section{
        margin-bottom: 170px;
      }
      input{
        margin-bottom: 10px;
      }
    }
     @media only screen and (min-width:768px) and (max-width: 769px){
       #comment{
          margin-top: -20px;
        }
        #email{
          margin-top: -20px;
        }
      .card{
        height: 360px;
      }
      section{
        margin-bottom: 100px;
      }
      input{
        margin-bottom: 10px;
      }
    }
    </style>