<template>
  <Navbar />
  <section class="admin" v-if="user">
    <h2 class="h2 pt-2">Admin</h2>
    <div class="container fluid admin">
      <div class="table-responsive">
        <table class="table">
          <tr>
            <th class="table__heading">ID</th>
            <th class="table__heading">FullName</th>
            <th class="table__heading">UserRole</th>
            <th class="table__heading">Email</th>
            <th class="table__heading">Phone</th>
            <th class="table__heading">Edit</th>
            <th class="table__heading">Delete</th>
          </tr>
          <tbody v-if="users">
            <tr
              class="table__row"
              v-for="userA in users"
              :key="userA.id"
            >
              <td class="table__content" data-heading="ID">{{ userA.id }}</td>
              <td class="table__content" data-heading="User FullName">
                {{ userA.fullname }}
              </td>
              <td class="table__content" data-heading="User Role">
                {{ userA.userRole }}
              </td>
              <td class="table__content" data-heading="Email">
                {{ userA.email }}
              </td>
              <td class="table__content" data-heading="Phone">
                {{ userA.phonenumber }}
              </td>
              <td>
                <a
                  data-bs-toggle="modal"
                  :data-bs-target="`#editUser` + userA.id"
                  href=""
                  class="iconadmin bi bi-pencil-square"
                ></a>
                <EditUser :user="userA" />
              </td>
              <td>
                <button id="delete">
                  <a
                    data-bs-toggle="modal"
                    :data-bs-target="`#deleteUser` + userA.id"
                    class="iconadmin bi bi-x-square"
                  ></a>
                </button>
                <DeleteUser :user="userA" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Products -->
    <a
      href=""
      data-bs-toggle="modal"
      data-bs-target="#addProduct"
      class="btn-add add"
      v-if="products"
      >Add product</a
    >
    <Add :product="product" />
    <table class="table align-middle mb-0 bg-white" style="overflow-x: auto">
      <thead class="bg-light">
        <tr>
          <th>ID</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Image</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.brand }}</td>
          <td>{{ product.Model }}</td>
          <td><img :src="product.img" class="img-fluid" /></td>
          <td>{{ product.category }}</td>
          <td class="des" style="width: 20rem">{{ product.description }}</td>
          <td>$ {{ product.price }}</td>
          <td>
            <a
              data-bs-toggle="modal"
              :data-bs-target="`#editProduct` + product.id"
              href=""
              class="iconadmin bi bi-pencil-square"
            ></a>
            <EditProduct :product="product" />
          </td>
          <td>
            <button id="delete">
              <a
                data-bs-toggle="modal"
                :data-bs-target="`#deleteProduct` + product.id"
                class="iconadmin bi bi-x-square"
              ></a>
            </button>
            <DeleteProduct :product="product" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <div v-else>
    <h4 class="error">Please login to view the admin page</h4>
  </div>
</template>
      
      <script>
import Navbar from "../components/Navbar.vue";
import Add from "../components/Add.vue";
import DeleteProduct from "../components/DeleteProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import DeleteUser from "../components/DeleteUser.vue";
import EditUser from "../components/EditUser.vue";
export default {
  props: ["product", "user"],
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUsers");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
  },
  components: { Navbar, Add, DeleteProduct, EditProduct, DeleteUser, EditUser },
};
</script>
      
      <style scoped>
section {
  margin-bottom: 100px;
}
.error {
  margin-top: 300px;
  display: flex;
  justify-content: center;
}
#delete {
  border: none;
  background: none;
}
.des {
  width: 5rem;
}
a {
  color: black;
}
h2 {
  margin-top: 160px;
}
.add {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-bottom: 10px;
  text-decoration: none;
  font-weight: bold;
}
.iconadmin {
  font-size: x-large;
}
section {
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 150px;
}
img {
  width: 8rem;
  border: 1px;
  border-radius: 1px;
  box-shadow: none;
}
.des[data-v-4579cfca] {
  width: 100%;
  font-size: small;
}
table th,
table td {
  padding: 0.625em;
  text-align: center;
}
table th {
  text-transform: uppercase;
}
/* @Media */
@media screen and (max-width: 600px) {
  table {
    border: 0;
    text-align: center;
  }
  table caption {
    font-size: 1.3em;
  }
  .des[data-v-4579cfca] {
    width: 100% !important;
    font-size: small;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>