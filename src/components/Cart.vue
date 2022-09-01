<template>
<section  v-if="cart"  class="product">
        <h2 class="h2">Cart</h2>
        <div class="container">
        <div class="card bg-light" v-for="product in cart" :key="product" :product="product">
          <img :src="product.img" class="card-img-top img-fluid center" alt="image">
            <div class="card-body bg-light">
              <h5 class="card-title1">{{product.brand}}</h5>
              <h5 class="card-title1">{{product.Model}}</h5>
              <h5 class="card-title">R{{product.price}}</h5>
              <h5 class="card-title">{{product.description}}</h5> 
            </div>

        </div>
        </div>
      </section>
      <div class="empty" v-else>
        <h2>Cart is empty</h2>
    </div>
    <Navbar/>
  </template>
  
  <script>
  import Cards from '../components/Cards.vue'
    import Navbar from '../components/Navbar.vue'
  export default {
    components:{Cards, Navbar},
      computed:{
        user(){
          return this.$store.state.user
        },
        cart(){
          return this.$store.state.cart
        },
        // total(){
        //   return Math.round((this.$store.state.total + Number.EPSILON)*100)/100
        // }
      },
      mounted() {
        this.$store.dispatch('getUserCart')
      },
      methods:{
        clear(){
          this.$store.dispatch('deleteCart')
          this.cart = null
        }
      }
  }
  </script>
  
  <style scoped>
    .empty{
        margin-top: 150px;
    }
    section{
        padding-top: 200px;
    }
  .card {
    height:380px;
    width: 250px;
    margin-bottom: 10px;
  }
  .h2 {
    padding-top: 10px;
  }
  .bottom {
    padding-bottom: 150px;
  }

.cards {
  padding-top: 10px;
  object-fit: contain;
  border-radius: 1px;
  border: 1px;
  height: 200px;
  width: 150px;
}
.card {
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.cart{
    margin-bottom: 100px;
}
  </style>