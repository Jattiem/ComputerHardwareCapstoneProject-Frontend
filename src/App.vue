<template>
  <router-view/>
  <Footer/>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Cart</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>You currently have no products in the cart</p>
  </div>
</div>  
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  components: {
    Footer
}
}
</script>

<style>
*{
  scroll-behavior: smooth;
}
</style>