<template>
    <div class="cart" v-if="user">
      <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling">
    <div class="offcanvas-header">
      <h1 class="offcanvas-title" id="offcanvasScrollingLabel"><i class="bi bi-cart-fill"></i></h1>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <h4>{{user.fullname}}'s Cart </h4>
      <div v-if="cart" id="cart">
        <div id="card" v-for="product in cart" :key="product" :product="product">
            <img :src="product.img" alt="Cart Item" class="img-fluid">
            <h3 class="pt-1">{{product.brand}}</h3>
            <h5>R{{product.price}}</h5>
            <button class="btn btn-primary"  @click="this.$store.dispatch('DeleteItem',product.id)"  >Remove from Cart</button>
        </div>
      </div>
      <div v-else>
          <h5>No Items in Cart</h5>
      </div>
    </div>
    <div class="offcanvas-footer">
      <button class="btn btn-primary mb-3" type="button" id="clearButton" @click="clear">Checkout</button>
    </div>
  </div>
    </div>
  </template>
  
  <script>
  import Cards from '../components/Cards.vue'
  
  export default {
    props: ["id"],
    components:{Cards},
      computed:{
        user(){
          return this.$store.state.user
        },
        cart(){
          return this.$store.state.cart
        },
      },
      methods:{
        clear(){
          this.$store.dispatch('deleteCart')
          this.cart = null
        }
      },
      mounted() {
    this.$store.dispatch("getUserCart");
  },
  }
  </script>
  
  <style scoped>
    h3,h4,h5{
        color: black;
    }
img{
      object-fit: cover;
      width: 150px;
      margin-left: 5px;
      border: 1px;
      border-radius: 1px;
      padding-top: 10px;
    }
 
  #cart{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  
  #card{
    object-fit: cover;
    padding: 10px 10px 10px 10px;
    width: 200px;
    border: 1px;
    background: linear-gradient(315deg, #dadada, #ffffff);
    box-shadow:  10px 10px 30px #bababa;
    margin: 0 !important;
    margin-bottom: 100px;
  }
  
  </style>