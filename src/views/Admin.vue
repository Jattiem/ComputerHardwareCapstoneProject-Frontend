<template>
    <Navbar/>
      <section v-if="products" class="admin vh-100">
        <h2 class="h2 pt-2">Admin</h2>
        <a href="" class="add">Add product</a>
        <table class="table align-middle mb-0 bg-white"  style="overflow-x:auto;">
          <thead class="bg-light">
            <tr>
              <th>ID</th>
              <th>Title</th>
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
              <td>{{ product.product_id }}</td>
              <td>{{ product.title }}</td>
              <td>{{ product.category }}</td>
              <td class="des" style="width: 20rem;">{{ product.description }}</td>
              <td><img :src="product.img" class="img-fluid" alt="" /></td>
              <td>R {{ product.price }}</td>
              <td><a href="" class="iconadmin bi bi-pencil-square"></a></td>
    
              <td>
                <button
                  id="delete"
                  v-on:click="$store.dispatch('deleteProduct', product.product_id)"
                >
                  <a class="iconadmin bi bi-x-square"></a>
                </button>
              </td>
    
            </tr>
          </tbody>
        </table>
      </section>
                <!-- <div v-else>Hello</div> -->
    </template>
    
    <script>
    import Navbar from '@/components/Navbar.vue';
    export default {
      props: ["product"],
      mounted() {
        this.$store.dispatch("getProducts");
        // this.$store.dispatch('clearSingleProduct');
      },
      computed: {
        products() {
          return this.$store.state.products;
        },
      },
        components: { Navbar }
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
    /* nav{
      display: flex;
      justify-content: center;
    } */
    .add {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      /* margin-bottom: 40px; */
      padding-bottom: 10px;
      text-decoration: none;
    }
    .iconadmin {
      font-size: x-large;
    }
    section {
      margin-top: 100px;
      /* margin-top: -200px; */
      margin-left: 20px;
      margin-right: 20px;
      /* margin-bottom: 300px; */
    }
    img {
      width: 8rem;
      /* border: 1px solid gray; */
    }
    /* @media only screen and (min-width: 320px) and (max-width: 321px) {
      table {
       overflow-x: auto;
      }
    }  */
    .des[data-v-4579cfca] {
        width: 100%;
        font-size: small;
    }
    /* table {
      border: 1px solid #ccc;
      border-collapse: collapse;
      margin: 0;
      padding: 0;
      width: 100%;
      table-layout: fixed;
    } */
    /* table caption {
      font-size: 1.5em;
      margin: .5em 0 .75em;
    } */
    /* table tr {
      background-color: #f8f8f8;
      border: 1px solid #ddd;
      padding: .35em;
    } */
    table th,
    table td {
      padding: .625em;
      text-align: center;
    }
    table th {
      text-transform: uppercase;
    }
    @media screen and (max-width: 600px) {
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
        /*
        * aria-label has no advantage, it won't be read inside a table
        content: attr(aria-label);
        */
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
      
      table td:last-child {
        border-bottom: 0;
      }
    }
    /* general styling */
    /* body {
      font-family: "Open Sans", sans-serif;
      line-height: 1.25;
    } */
    </style>