<template>
  <div
    class="modal fade"
    :id="`editProduct` + product.id"
    tabindex="-1"
    :aria-labelledby="product.id + `EditLabel`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`editProductLabel` + product.id">
            Edit Product
          </h5>
          <button
            type="button"
            :id="`editProductClose` + product.id"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form method="PUT" @submit="editProduct">
            <label class="form-label">ID</label>
            <input
              type="number"
              class="form-control"
              :value="product.id"
              readonly
            />
            <label class="form-label">Product Brand</label>
            <input type="text" class="form-control" v-model="product.brand" />
            <label class="form-label">Product Model</label>
            <input type="text" class="form-control" v-model="product.Model" />
            <label class="form-label">Product Image</label>
            <input type="text" class="form-control" v-model="product.img" />
            <label class="form-label">Description</label>
            <textarea
              style="resize: none"
              class="form-control"
              cols="30"
              rows="2"
              v-model="product.description"
            ></textarea>
            <label class="form-label">Category</label>
            <textarea
              style="resize: none"
              class="form-control"
              cols="30"
              rows="2"
              v-model="product.category"
            ></textarea>
            <label class="form-label">Price</label>
            <input type="number" class="form-control" v-model="product.price" />
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">
            Close
          </button>

          <button
            type="button"
            @click="editProduct"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Edit Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: ["product"],
  methods: {
    editProduct(e) {
      e.preventDefault();
      let newProduct = {
        id: this.product.id,
        brand: this.product.brand,
        Model: this.product.Model,
        img: this.product.img,
        description: this.product.description,
        category: this.product.category,
        price: this.product.price,
      };
      this.$store.dispatch("editProduct", newProduct);
      document.getElementById(`editProductClose` + this.product.id).click();
    },
  },
};
</script>
  <style scoped>
</style>