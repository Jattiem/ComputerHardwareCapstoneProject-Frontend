<template>
  <div
    class="modal fade"
    :id="`editUser` + user.id"
    tabindex="-1"
    :aria-labelledby="user.id + `EditLabel`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`editUserLabel` + user.id">
            Edit Product
          </h5>
          <button
            type="button"
            :id="`editUserClose` + user.id"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form method="PUT" @submit="editUser">
            <label class="form-label">ID</label>
            <input
              type="number"
              class="form-control"
              :value="user.id"
              readonly
            />
            <label class="form-label">User Fullname</label>
            <input type="text" class="form-control" v-model="user.fullname" />
            <label class="form-label">User UserRole</label>
            <input type="text" class="form-control" v-model="user.userRole" />
            <label class="form-label">User Email</label>
            <input type="text" class="form-control" v-model="user.email" />
            <label class="form-label">Phone Number</label>
            <input
              type="number"
              class="form-control"
              v-model="user.phonenumber"
            />
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">
            Close
          </button>

          <button
            type="button"
            @click="editUser"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Edit User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: ["user"],
  methods: {
    editUser(e) {
      e.preventDefault();
      let newUser = {
        id: this.user.id,
        fullname: this.user.fullname,
        userRole: this.user.userRole,
        email: this.user.email,
        phonenumber: this.user.phonenumber,
      };
      this.$store.dispatch("editUser", newUser);
      document.getElementById(`editUserClose` + this.user.id).click();
    },
  },
};
</script>
  <style scoped>
</style>