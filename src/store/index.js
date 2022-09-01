import {
  createStore
} from 'vuex'
import router from '@/router'
const moduleprojectUrl = "https://computer-hardware-capstone.herokuapp.com/";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    token: null,
    cart: null,
    total: 0

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
    },
    setTotal(state, total) {
      state.total = total
    }
  },
  actions: {
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
// GET USER CART
    async getUserCart(context){
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart');
      let res = await fetched.json();
      context.commit('setUserCart', res.cart)
      context.dispatch('getTotalCart')
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
      fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.users.id + '/cart', {
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
      // fetch('http://localhost:5000/products/' + payload.id, {
      fetch('https://computer-hardware-capstone.herokuapp.com/products/' + payload.id, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((res) => res.json())
        .then((data) => 
        {
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
// LOGIN
    login: async (context, payload) => {
      const {
        email,
        password
      } = payload;
      let result = await fetch(moduleprojectUrl + "login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
      if (result) {
        router.push({
          name: "landing"
        })
        alert('Welcome to PC Gaming')
      } else {
        this.errMsg = `
    error`
      }
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
// GET TOTAL CART
  getTotalCart(context){
    let total = 0;
    toRaw(context.state.cart).forEach(product => {
      total = total + product.price
    });
    context.commit('setTotal', total)
  },
// DELETE CART
  deleteCart(context){
    fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart', {
    method: 'DELETE'
    })
    .then((res) => res.json())
    .then((data) =>{
      if (data.result == 'There is no user with that ID') {
        alert(data.result)
      } else {
        alert(
          'The purchase of ' + context.state.user.fullname + ' with a total of R' + Math.round((context.state.total + Number.EPSILON)*100)/100)
        context.dispatch('getUserCart')
      }
    })
  },
  modules: {}
})