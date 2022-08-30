<template>
    <Navbar/>
    <section id="about" class="about vh-100">
        <h2>About</h2>
        <p class="par">Sneakers (also called trainers, athletic shoes, tennis shoes, gym shoes, kicks, sport shoes, flats, running shoes, or runners) are shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday casual wear.
    
    Since their popularization by companies such as Converse, Nike and Spalding in the mid 20th century, they have become attire, with variety growing in many global markets exponentially. Like other parts of the global clothing industry, manufacture of shoes is heavily concentrated in Asia with nine in ten shoes produced in that region. 
    
    Contemporary sneakers are largely made from synthetic materials, and the materials and manufacturing process produce, on average, about 14 kg (31 lb) of CO2 emissions.Some companies are trying to substitute more sustainable materials in their manufacture.About 90% of shoes end up in landfills at end of life</p>
    </section>
    </template>
    <script>
    import Navbar from '@/components/Navbar.vue';
    export default {
        components: { Navbar }
    }
    </script>
    <style scoped>
    .page-link{
      color: rgba(0, 0, 0, 0.795);
    }
    section{
    overflow-x: hidden;
    }
    h2{
        padding-top: 10px;
        margin-top: 160px;
    }
    p{
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
    box-shadow:  10px 10px 10px #cccccc,
                 -10px -10px 10px #ffffff;
    }
    nav{
        display: flex;
        justify-content: center;
    }
      @media only screen and (min-width:300px) and (max-width: 301px){
      p{
        width: 200px;
      }
      .par{
        margin-left: 60px;
      }
      section{
        margin-bottom: 135px;
      }
    }
      @media only screen and (min-width:320px) and (max-width: 321px){
      p{
        width: 200px;
      }
      .par{
        margin-left: 60px;
      }
        section{
        margin-bottom: 135px;
      }
    }
      @media only screen and (min-width:375px) and (max-width: 376px){
      p{
        width: 200px;
      }
      .par{
        margin-left: 90px;
      }
        section{
        margin-bottom: 135px;
      }
    }
      @media only screen and (min-width: 425px) and (max-width: 426px){
      p{
        width: 200px;
      }
      .par{
        margin-left: 110px;
      }
        section{
        margin-bottom: 135px;
      }
    }
    </style>