<template>
    <div class="modal fade" :id="`editProduct`+product.product_id" tabindex="-1" :aria-labelledby="product.product_id+`EditLabel`" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" :id="`editProductLabel`+product.product_id">Edit Product</h5>
                  <button type="button" :id="`editProductClose`+product.product_id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form method="PUT" @submit="editProduct">
                      <label class="form-label">ID</label>
                      <input type="number" class="form-control" :value="product.product_id" readonly>
                      <label class="form-label">Product Name</label>
                      <input type="text" class="form-control" v-model="product.title">
                      <label class="form-label">Product Image</label>
                      <input type="text" class="form-control" v-model="product.image">
                      <label class="form-label">Description</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="product.description"></textarea>
                      <label class="form-label">Category</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="product.category"></textarea>
                      <label class="form-label">Price</label>
                      <input type="number" class="form-control" v-model="product.price">
                      <label class="form-label">Created by</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="product.created_by"></textarea>
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
      props:['product'],
      methods:{
          editProduct(e){
              e.preventDefault();
              let newProduct = {
                  id: this.product.id,
                  productname: this.product.brand,
                  productImage: this.product.img,
                  description: this.product.description,
                  category: this.product.category ,
                  price: this.product.price ,
                //   created_by: this.created_by
              }
              this.$store.dispatch('editProduct',newProduct);
              document.getElementById(`editProductClose`+this.product.id).click();
          }
      }
  }
  </script>
  <style scoped>
  
  
  </style>