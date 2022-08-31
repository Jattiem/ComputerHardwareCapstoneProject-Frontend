<template>
    <div  class="modal fade" style="color:black !important" :id="`deleteProduct`+product.id" tabindex="-1" :aria-labelledby="product.id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteProductLabel`+product.id">Delete Product</h5>
                    <button type="button" :id="`deleteProductClose`+product.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are you sure you want to delete this item?</h3>
                    <button id="cancel" data-bs-dismiss="modal" class="btn btn-primary">CANCEL</button>
                    <button class="btn btn-danger" @click="deleteProduct" data-bs-dismiss="modal">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['product'],
    methods:{
        deleteProduct(){
            this.$store.dispatch('deleteProduct',this.product);
            
        }
    }
}
</script>
<style scoped>
#cancel{
    margin-left: 10px;
    margin-right: 10px;
}
</style>