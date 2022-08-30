<template>
    <Navbar/>
      <section class="admin vh-100">
        <h2 class="h2 pt-2">Admin</h2>
        <a href="" data-bs-toggle="modal" data-bs-target="#addProduct"
                  class="btn-add add" v-if="products">Add product</a>
                <Add :product="product" />
        <table  class="table align-middle mb-0 bg-white"  style="overflow-x:auto;">
          <thead class="bg-light">
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.brand }}</td>
              <td>{{product.Model}}</td>
              <td>{{ product.category }}</td>
              <td class="des" style="width: 20rem;">{{ product.description }}</td>
              <td><img :src="product.img" class="img-fluid" alt="" /></td>
              <td>R {{ product.price }}</td>
              <td><a href="" class="iconadmin bi bi-pencil-square"></a></td>
    
              <td>
                <button
                  id="delete"
                >
                  <a class="iconadmin bi bi-x-square"></a>
                </button>
              </td>
    
            </tr>
          </tbody>
        </table>
      </section>
    </template>
    
    <script>
    import Navbar from '@/components/Navbar.vue';
    import Add from '../components/Add.vue';
    export default {
      props: ["product"],
      mounted() {
        this.$store.dispatch("getProducts");
      },
      computed: {
        products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
    user(){
      return this.$store.state.user
    }
  },
        components: { Navbar,Add}
    };
    </script>
    
    <style scoped>
    #delete{
      border: none;
      background: none;
    }
    .des{
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
    }
    .iconadmin {
      font-size: x-large;
    }
    section {
      margin-top: 100px;
      margin-left: 20px;
      margin-right: 20px;
    }
    img {
      width: 8rem;
      border: 1px;
      border-radius: 1px;
    }
    .des[data-v-4579cfca] {
        width: 100%;
        font-size: small;
    }
    table th,
    table td {
      padding: .625em;
      text-align: center;
    }
    table th {
      text-transform: uppercase;
    }
    /* @Media */
    /* @media screen and (max-width: 600px) {
      table {
        border: 0;
        text-align: center;
      }
      table caption {
        font-size: 1.3em;
      }
      .des[data-v-4579cfca] {
        width: 100%!important;
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
        margin-bottom: .625em;
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
    } */

    </style>