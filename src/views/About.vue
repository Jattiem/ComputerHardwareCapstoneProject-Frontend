<template>
    <Navbar/>
    <section id="about" class="about vh-100">
        <div class="container fluid">
        <div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">About Me</h3>
        <p><img src="https://i.postimg.cc/GmRmj6j4/Yaseen-1.jpg" class="img-fluid me" alt="img">
        </p>
        <p class="card-text">My curiosity for coding led me to become more interested in coding,Since I know that technology is the norm for everyone I became more interested and wanted to do more with coding.Which led me to become a Aspring Full Stack Developer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card PCGAMING">
      <div class="card-body">
        <h3 class="card-title">About Pc Gaming</h3>
        <p><img src="https://i.postimg.cc/mk3ChYhQ/wp9360883.jpg" class="img-fluid" alt="img">
        </p>
        <p class="card-text">Pc Gaming is a company that sells all the latest Gaming Pc's for less.Estabilished in 15/062022.
        </p>
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
        components: { Navbar }
    }
    </script>
    <style scoped>
    section{
        padding-top: 170px;
      background: linear-gradient(   red, blue);
      overflow-x: hidden;
      scroll-behavior: smooth;
      /* margin-bottom: 90px; */
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
        height: 364px;
    }
    h3{
        color: black;
    }
    @media only screen and (min-width:300px) and (max-width: 301px){
        .row{
            width: 280px;
            display: flex;
            justify-content: center;
            margin-left: -3px;
            height: 1140px;
        }
        section{
            padding-bottom: 1220px;
        }
        .PCGAMING{
            margin-top: 10px;
        }
        img{
            height: 100px;
            width: 100px;
        }
        .me{
            height: 100px;
            width: 100px;
        }
    }
    @media only screen and (min-width:320px) and (max-width: 321px){
        .row{
            width: 280px;
            display: flex;
            justify-content: center;
            margin-left: 8px;
            height: 1140px;
        }
        section{
            padding-bottom: 1220px;
        }
        .PCGAMING{
            margin-top: 10px;
        }
        img{
            height: 100px;
            width: 100px;
        }
        .me{
            height: 100px;
            width: 100px;
        }
    }
    @media only screen and (min-width:375px) and (max-width: 376px){
        .row{
            width: 280px;
            display: flex;
            justify-content: center;
            margin-left: 38px;
            height: 1140px;
        }
        section{
            padding-bottom: 1220px;
        }
        .PCGAMING{
            margin-top: 10px;
        }
        img{
            height: 100px;
            width: 100px;
        }
        .me{
            height: 100px;
            width: 100px;
        }
    }
    @media only screen and (min-width:425px) and (max-width: 426px){
        .row{
            width: 280px;
            display: flex;
            justify-content: center;
            margin-left: 58px;
            height: 1140px;
        }
        section{
            padding-bottom: 1220px;
        }
        .PCGAMING{
            margin-top: 10px;
        }
        img{
            height: 100px;
            width: 100px;
        }
        .me{
            height: 100px;
            width: 100px;
        }
    }
    @media only screen and (min-width:375px) and (max-width: 376px){
        .row{
            width: 280px;
            display: flex;
            justify-content: center;
            margin-left: 38px;
            height: 1140px;
        }
        section{
            padding-bottom: 1220px;
        }
        .PCGAMING{
            margin-top: 10px;
        }
        img{
            height: 100px;
            width: 100px;
        }
        .me{
            height: 100px;
            width: 100px;
        }
    }
    @media only screen and (min-width:768px) and (max-width: 769px){
        .row{
            width: 700px;
            display: flex;
            justify-content: center;
            margin-left: 2px;
            height: 600px;
        }
        section{
            padding-bottom: 660px;
        }
        .PCGAMING{
            height: 540px;
        }
    }
    @media only screen and (min-width:1024px) and (max-width: 1024px){
        section{
            padding-bottom: 68%;
        }
        .row{
            height: 630px;
        }
        .PCGAMING{
            height: 570px;
        }
    }
    </style>