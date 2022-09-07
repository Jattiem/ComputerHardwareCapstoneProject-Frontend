<template>
    <Navbar/>
    <section id="about" class="about vh-100">
        <h2>About</h2>
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">About Me</h5>
        <p><img src="https://i.postimg.cc/GmRmj6j4/Yaseen-1.jpg" class="img-fluid me" alt="img">
        </p>
        <p class="card-text">My curiosity for coding led me to become more interested in coding,Since I know that technology is the norm for everyone I became more interested and wanted to do more with coding.Which led me to become a Aspring Full Stack Developer</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card PCGAMING">
      <div class="card-body">
        <h5 class="card-title">About Pc Gaming</h5>
        <p><img src="https://i.postimg.cc/mk3ChYhQ/wp9360883.jpg" class="img-fluid" alt="img">
        </p>
        <p class="card-text">Pc Gaming is a company that sells all the latest Gaming Pc's for less.Estabilished in 15/062022.
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
    </template>
    <script>
    import Navbar from '@/components/Navbar.vue';
    export default {
        components: { Navbar }
    }
    </script>
    <style scoped>
    section{
      background: linear-gradient(   red, blue);
      /* overflow-x: hidden; */
      scroll-behavior: smooth;
      margin-bottom: 120px;
    }
    h2{
        padding-top: 150px;
        color: black;
    }
    .row{
        border: 1px solid gray;
        border-radius: 20px;
        margin-left: 150px;
        margin-right: 150px;
        display: flex;
        font-size: larger;
        justify-content: center;
        padding: 30px;
        border-radius: 10px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    }
    img{
        height: 200px;
        width: 200px;
        object-fit: cover;
        border-radius: 100px;
    }
    .me{
        height: 200px;
        width: 200px;
        object-fit: cover;
        border-radius: 100px;
        object-position: 0 0.5px;
    }
    .PCGAMING{
        height: 425px;
    }
    </style>