import {
  createStore
} from 'vuex'
import router from '@/router'
const moduleprojectUrl = "https://computer-hardware-capstone.herokuapp.com/";
export default createStore({
  state: {
    products: null,
    singleproduct: null,
    users: null,
    user: null,
    token: null,
    cart: null,
    total: 0

  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },

    setProducts(state, products) {
      state.products = products;
    },
    setSingleProduct(state, singleproduct) {
      state.singleproduct = singleproduct;
    },
    setUser(state, user){
      state.user = user
    },
    setToken(state, token){
      state.token = token
    },
    setUserCart(state, cart){
      state.cart = cart
    },
    setUsers(state, users){
      state.users = users
    },  
    setTotal(state, total){
      state.total = total
    }
  },
  actions: {
    addCart(context, payload){
      const {brand,Model, category, description, img, price} = payload
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

    // delete product
    deleteProduct: async (context, id) => {
      fetch("https://computer-hardware-capstone.herokuapp.com/products/" + id, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => context.dispatch('getProducts'), alert('Delete was successfull! Refresh the page.'));
    },

    // register
    register: async (context, payload) => {
      const {
        fullname,
        email,
        password,
        phonenumber,
        userRole,
        dateJoined,
        cart
      } = payload;
      await fetch(moduleprojectUrl + "register", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            fullname: fullname,
            email: email,
            password: password,
            phonenumber: phonenumber,
            userRole: userRole,
            dateJoined: dateJoined,
            cart: cart
          }),
        })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json),

          router.push({
            name: "login"
          }),
          alert(`Your Registration was Successfull. Please login!`));
    },
    // login
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
        alert('WELCOME')
      } else {
        this.errMsg = `
    error`
      }
    },


    async editProduct(context,payload){
      fetch('https://computer-hardware-capstone.herokuapp.com/products/'+payload.id, {
          method:'PUT',
          body: JSON.stringify(payload),
          headers:{
              'Content-type': 'application/json; charset=UTF-8'
          }
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getProducts'));
  },

    async getProducts(context) {
      await fetch(moduleprojectUrl + "products")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
            context.commit("setProducts", data.products);
        })
    },
    async getSingleProducts(context, id) {
      let res = await axios.get(moduleprojectUrl + 'products/' + id);
      // let {
      //   results
      // } = await res.data;
      context.commit('setSingleProduct', results[0]);
    }
  },


  login: async (context, payload) => {
    const {
      email,
      password
    } = payload;
    fetch(moduleprojectUrl + "login", {
        method: "PATCH",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": await context.state.token,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        alert(data.msg);
        let user = data.user;
        let token = data.token;
        let cart = data.user.cart;
        context.commit("setuser", user);
        context.commit("setToken", token);
        context.commit("setcart", cart);
      });


  },
  modules: {}
})