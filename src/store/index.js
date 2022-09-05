import {
  createStore
} from 'vuex'
import router from '@/router'
// const moduleprojectUrl = "https://computer-hardware-capstone.herokuapp.com/";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    token: null,
    cart: null

  },
  getters: {},
  mutations: {
    setProduct(state, product) {
      state.product = product
    },
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
    },
    setUserCart(state, cart) {
      state.cart = cart
    }
  },
  actions: {
    DeleteItem : async (context,product, id) => {
      console.log(product);
      id = context.state.users.id;
      fetch(`https://computer-hardware-capstone.herokuapp.com/users/${id}/cart/${product}`, {
        method: "DELETE",
        body :JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // "x-auth-token": context.state.token,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // if (data != null) {
          context.dispatch("getUserCart", (id));
        // }
      });
    },
    // ADD PRODUCT
    async addProduct(context, payload) {
      fetch('https://computer-hardware-capstone.herokuapp.com/products', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert(data.msg)
          context.dispatch('getProducts')
        });
    },
    // EDIT PRODUCT
    async editProduct(context, payload) {
      fetch('https://computer-hardware-capstone.herokuapp.com/products/' + payload.id, {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert(data.msg)
          context.dispatch('getProducts')
        });
    },
    // GET USERS
    async getUsers(context) {
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/users');
      let res = await fetched.json();
      context.commit('setUsers', res.users)
    },

    // GET USER CART
    async getUserCart(context) {
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart');
      // let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart');
      let res = await fetched.json();
      console.log(res);
      context.commit('setUserCart', res.cart)
      // context.dispatch('getTotalCart')
    },
    // ADD CART
    addCart(context, payload) {
      const {
        brand,
        Model,
        category,
        description,
        img,
        price
      } = payload
      fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart', {
      // fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart', {
          method: 'POST',
          body: JSON.stringify({
            brand: brand,
            Model: Model,
            category: category,
            description: description,
            img: img,
            price: price
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.results == 'There is no user with that id') {
            alert(data.results)
          } else {
            alert('Item Added')
            context.dispatch('getUserCart')
          }
        })
    },
    // DELETE PRODUCT
    async deleteProduct(context, payload) {
      console.log(payload.id);
      fetch('https://computer-hardware-capstone.herokuapp.com/products/' + payload.id, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.dispatch('getProducts')
        })
    },
    // REGISTER
    register(context, payload) {
      const {
        fullname,
        email,
        password,
        phonenumber
      } = payload
      fetch('https://computer-hardware-capstone.herokuapp.com/users', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == "The provided email exists. Please enter another one") {
            alert("The provided email exists. Please enter another one");
          } else {
            alert('Registration Successful');
            context.commit('setToken', data.token);
            setTimeout(() => {
              router.push('/login'), 5000
            })
          }

        });

    },
    // DELETE CART
  deleteCart(context) {
    fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart', {
        method: 'DELETE'
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.result == 'There is no user with that ID') {
          alert(data.result)
        } else {
          alert(
            'Thank you for shopping with PC Gaming')
          context.dispatch('getUserCart')
        }
      })
  },
    // LOGIN
    // login: async (context, payload) => {
    //   const {
    //     email,
    //     password
    //   } = payload;
    //   fetch("https://computer-hardware-capstone.herokuapp.com/users/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //       body: JSON.stringify({
    //         email: email,
    //         password: password,
    //       }),
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data.user[0]);
    //       context.commit("setUser", data.user[0])
    //       router.push({
    //         name: "landing"
    //       })
    //     })
    // },
    login: async (context, payload) => {
      await fetch("https://computer-hardware-capstone.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.state.msg = data.msg;
          context.commit("setUser", data.user);
          context.commit("setToken", data.token);
          router.push({
            name: "landing"
          })
        });
    },
    // GET PRODUCTS
    async getProducts(context) {
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/products');
      let res = await fetched.json();
      console.log(res.products);
      context.commit('setProducts', res.products)
    },
    // GET PRODUCT
    async getProduct(context, id) {
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/products/' + id);
      let res = await fetched.json();
      console.log(res);
      context.commit('setProduct', res.products[0])
    },
  },
  
  modules: {}
})