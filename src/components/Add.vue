<template>
    <div class="modal fade" id="addProduct" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addProductLabel">New Product</h5>
        </div>
        <div class="modal-body">
          <form method="POST" @submit="addProduct">
                      <label class="form-label">Product Brand</label>
                      <input type="text" class="form-control" v-model="brand">
  
                      <label class="form-label">Product Model</label>
                      <input type="text" class="form-control" v-model="Model">

                      <label class="form-label">Product Image</label>
                      <input type="text" class="form-control" v-model="img">
  
                      <label class="form-label">Description</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="description"></textarea>
  
                      <label class="form-label">Category</label>
                      <input type="text" class="form-control" v-model="category">
  
                      <label class="form-label">Price</label>
                      <input type="number" class="form-control" v-model="price">
  
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                  </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props : ["id"],
     data(){
      return{
          brand: '',
          Model: '',
          img:'',
          description:'',
          category:'',
          price:''
      }
     },
      computed:{
          user(){
              return this.$store.state.user
          }
      },
      methods:{
          addProduct(e){
              e.preventDefault();
              let newProduct = {
                  brand: this.brand,
                  Model: this.Model,
                  img: this.img,
                  description: this.description,
                  category: this.category,
                  price: this.price
              }
              this.$store.dispatch('addProduct',newProduct);
           }
      }
  }
  </script>
  
  <style>
  
  </style>