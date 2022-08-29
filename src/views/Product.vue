<template>
    <Navbar/>
      <section  v-if="product"  class="product">
        <h2 class="h2">Product</h2>
        <div class="container">
        <div class="card bg-light">
          <img :src="product.img" class="card-img-top spin img-fluid center" alt="image">
            <div class="card-body bg-light">
              <h2 class="card-title1">{{product.title}}</h2>
              <h2 class="card-title">R{{product.price}}</h2>
              <!-- <h2 class="card-title">{{product.description}}</h2> -->
                  <button class="btn btn-dark text-black">Add to Cart</button>
            </div>           
        </div>
        </div>
      </section>
      <div v-else>
        loading...
      </div>
    </template>
    
    <script>
    import Navbar from '@/components/Navbar.vue';
    export default {
        computed: {
            product() {
                return this.$store.state.singleproduct;
            }
        },
        mounted() {
            this.$store.dispatch("getSingleProducts", this.$route.params.id);
        },
        methods: {},
        components: { Navbar }
    };
    </script>
    
    <style scoped>
    button {
     color: #090909;
     padding: 0.7em 1.7em;
     font-size: 18px;
     border-radius: 0.5em;
     background: #e8e8e8;
     border: 1px solid #e8e8e8;
     transition: all .3s;
     box-shadow: 6px 6px 12px #c5c5c5,
                 -6px -6px 12px #ffffff;
    }
    button:active {
     color: #666;
     box-shadow: inset 4px 4px 12px #c5c5c5,
                 inset -4px -4px 12px #ffffff;
    }
    nav{
      display: flex;
      justify-content: center;
    }
    .page-link{
      color: rgba(0, 0, 0, 0.795);
      /* background-color: gray; */
    }
    .card{
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }
    .card-title{
      padding-bottom: 1px;
    }
    img{
      object-fit: cover;
      height: 200px;
      width: 200px;
      align-items: center;
      margin-left: 50px;
    }
    section{
      margin-top: 100px;
      margin-bottom: 120px;
    }
    .h2{
      padding-top: 10px
    }
    .spin{
      transition: all 0.3s ease-in-out;
    }
    .spin:hover {
    /* transition: .50s ease; */
    /* transition-delay: .50s ease-out; */
    transform: rotate(-20deg);
    /* transition: transform .7s ease-in-out; */
    }
      @media only screen and (min-width:300px) and (max-width: 301px){
      .card{
        height: 25rem;
      }
      section{
        /* padding-top: -40px; */
        margin-bottom: 150px;
      }
    }
    </style>