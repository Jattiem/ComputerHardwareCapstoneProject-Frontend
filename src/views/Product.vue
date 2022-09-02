<template>
    <Navbar/>
      <section  v-if="product"  class="product">
        <h2 class="h2 pt-5">Product</h2>
        <div class="container">
        <div class="card bg-light">
          <img :src="product.img" class="card-img-top img-fluid center" alt="image">
            <div class="card-body bg-light">
              <h5 class="card-title1">{{product.brand}}</h5>
              <h5 class="card-title1">{{product.Model}}</h5>
              <h5 class="card-title">R{{product.price}}</h5>
              <h5 class="card-title">{{product.description}}</h5> 
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
    }
    .card{
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 300px;
      /* height: 300px; */
      border-radius: 10px;
    }
    .card-title{
      padding-bottom: 1px;
    }
    img{
      object-fit: cover;
      /* height: 200px; */
      width: 150px;
      /* align-items: center; */
      margin-left: 75px;
      border: 1px;
      border-radius: 1px;
      padding-top: 10px;
    }
    section{
      margin-top: 100px;
      margin-bottom: 150px;
    }
    .h2{
      padding-top: 10px
    }
    </style>