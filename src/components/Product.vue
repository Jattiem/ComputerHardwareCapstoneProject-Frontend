<template>
    <Navbar/>
      <section  v-if="product"  class="product vh-100">
        <div class="container fluid">
        <div class="card bg-light">
          <img :src="product.img" class="card-img-top img-fluid center" alt="image">
            <div class="card-body">
              <h5 class="card-title1">{{product.brand}}</h5>
              <h6 class="card-title1">{{product.Model}}</h6>
              <h6 class="card-title">${{product.price}}</h6>
              <h6 class="card-title">{{product.description}}</h6> 
                  <button class="btn btn-dark text-black" @click="this.$store.dispatch('addCart', product)" target="_blank">Add to Cart</button>
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
      props : ["id"],
        computed: {
            product() {
                return this.$store.state.product;
            },
            user(){
        return this.$store.state.user
      }
        },
        mounted() {
            this.$store.dispatch("getProduct", this.id);
        },
        methods: {
          addCart(){
        let product = {
          brand: this.product[0].brand,
          Model: this.product[0].Model,
          category: this.product[0].category,
          description: this.product[0].description,
          img: this.product[0].img,
          price: this.product[0].price
        }
        this.$store.dispatch('addCart', product, this.user.id)
      }
      },
        components: { Navbar }
    };
    </script>
    
    <style scoped>
      .card {
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 20px;
}
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
     font-size: 14px;
    }
    button:active {
     color: #666;
     box-shadow: inset 4px 4px 12px #c5c5c5,
                 inset -4px -4px 12px #ffffff;
    }
    .page-link{
      color: rgba(0, 0, 0, 0.795);
    }
    .card{
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 300px;
    }
    .card-title{
      padding-bottom: 1px;
    }
    img{
      object-fit: cover;
      width: 100px;
      margin-left: 100px;
      border: 1px;
      border-radius: 1px;
      padding-top: 10px;
      box-shadow: none;
    }
    section{
      scroll-behavior: smooth;
      overflow-x: hidden;
      padding-top: 150px;
      background: linear-gradient(   red, blue);
    }
    @media only screen and (min-width:300px) and (max-width: 301px){
      section{
        padding-bottom: 190px;
      }
      .card{
        width: 260px;
      }
      img{
        margin-left: 80px;
      }
    }
    @media only screen and (min-width:320px) and (max-width: 321px){
      section{
        padding-bottom: 190px;
      }
    }
    @media only screen and (min-width:375px) and (max-width: 376px){
      section{
        padding-bottom: 190px;
      }
    }
    @media only screen and (min-width:425px) and (max-width: 426px){
      section{
        padding-bottom: 190px;
      }
    }
    @media only screen and (min-width:768px) and (max-width: 769px){
      section{
        padding-bottom: 170px;
      }
    }
    </style>