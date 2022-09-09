<template>
    <div  class="modal fade" style="color:black !important" :id="`deleteUser`+user.id" tabindex="-1" :aria-labelledby="user.id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteUserLabel`+user.id">Delete User</h5>
                    <button type="button" :id="`deleteUserClose`+user.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5>Are you sure you want to delete {{user.fullname}}?</h5>
                    <button id="cancel" data-bs-dismiss="modal" class="btn btn-primary">CANCEL</button>
                    <button class="btn btn-danger" @click="deleteUser(user.id)" data-bs-dismiss="modal">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['user'],
    methods:{
        deleteUser(id){
            this.$store.dispatch('deleteUser',id);
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