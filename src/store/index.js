import {
  createStore
} from 'vuex'
import router from '@/router'
import swal from 'sweetalert';
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    token: null,
    cart: null,
    admin: false,

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
    setUsers(state, users) {
      state.users = users;
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
    setAdmin(state) {
      if (state.user != null) {
        if (state.user.userRole === "admin") {
          state.admin = true;
        }
      }
    },
    setTotal(state, total){
      state.total = total
    }
  },
  actions: {
// 
// LOGIN
login(context, payload){
  const { email, password } = payload
  fetch('https://computer-hardware-capstone.herokuapp.com/users/login', {
  method: 'POST',
  body: JSON.stringify({
      email: email,
      password: password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    if (data.msg == 'Email Not Found. Please register') {
      swal({
        icon: "error",
        title: `Email Not Found. Please register`,
        text: "Type in the proper email",
        buttons: "Try Again"
      })
    } else {
      if (data.msg == 'Password is Incorrect') {
        swal({
          icon: "error",
          title: "Incorrect Password",
          buttons: "Try Again"
        })
      } else {
        swal({
          icon: "success",
          title: `Welcome , ${data.user[0].fullname}`,
          closeOnClickOutside: false
        })
        context.commit('setUser',data.user[0])
        context.commit('setToken',data.token)
        context.dispatch('getUserCart')
        setTimeout(()=>{
          router.push('/products'), 3000
        })
      }
    }

  });
},
// 
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
        // alert("The provided email exists. Please enter another one");
        swal({
          icon: "error",
          title: "The provided email exists",
          text: "Please try another email",
          button: "OK"
        })
      } else {
        // alert('Registration Successful');
        swal({
              icon: "success",
              title: "Registration Successful",
              buttons: "OK"
            })
        context.commit('setToken', data.token);
        setTimeout(() => {
          router.push('/login'), 3000
        })
      }

    });

},
// 
// CART
// GET USER CART
async getUserCart(context) {
  let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart');
  let res = await fetched.json();
  // console.log(res);
  context.commit('setUserCart', res.cart)
},
// ADD CART
addCart(context, payload){
  const {brand,Model, category, description, img, price} = payload
  fetch('https://computer-hardware-capstone.herokuapp.com/users/' + context.state.user.id + '/cart', {
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
        // alert(data.results)
        swal({
          icon: "error",
          title: `There is no user with that id`,
          closeOnClickOutside: false
        })
      } else {
        // alert('Item Added')
        swal({
          icon: "success",
          title: `Item Added`,
          buttons: "OK"
        })
        context.dispatch('getUserCart')
      }
})
},
// DELETE ITEM
DeleteItem: async (context, product , id) => {
  id = context.state.user.id;
  fetch(`https://computer-hardware-capstone.herokuapp.com/users/${id}/cart/${product}`, {
    method: "DELETE",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      swal({
        icon: "success",
        title: `${data.result}`,
        buttons: "OK"
      })
      context.dispatch("getUserCart" ,data.result);
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
        // alert(data.result)
        swal({
          icon: "error",
          title: `There is no user with that ID`,
          closeOnClickOutside: false
        })
      } else {
        // alert(
        //   'Thank you for shopping with PC Gaming')
        swal({
          icon: "success",
          title: `${data.results}`,
          buttons: "OK"
        })
        context.dispatch('getUserCart', data.results)
      }
    })
},
// 
// USER
// EDIT USER
async editUser(context, payload) {
  fetch('https://computer-hardware-capstone.herokuapp.com/users/' + payload.id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      swal({
        icon: "success",
        title: `${data.msg}`,
        closeOnClickOutside: false
      })
      context.dispatch('getUsers', data.msg)
    });
},
// GET USERS
async getUsers(context) {
  let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/users');
  let res = await fetched.json();
  context.commit('setUsers', res.users)
},
// DELETE USER
async deleteUser(context, id) {
  fetch('https://computer-hardware-capstone.herokuapp.com/users/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res) => res.json())
    .then((data) => {
      swal({
        icon: "success",
        title: `${data.msg}`,
        closeOnClickOutside: false
      })
      context.dispatch('getUsers')
    })
},
// 
// PRODUCTS
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
      // alert(data.msg)
      swal({
        icon: "success",
        title: `${data.msg}`,
        closeOnClickOutside: false
      })
      context.dispatch('getProducts', data.msg)
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
      swal({
        icon: "success",
        title: `${data.msg}`,
        closeOnClickOutside: false
      })
      context.dispatch('getProducts', data.msg)
    });
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
          // console.log(data)
          swal({
            icon: "success",
            title: `${data.msg}`,
            closeOnClickOutside: false
          })
          context.dispatch('getProducts', data.msg)
        })
    },
// GET PRODUCTS
    async getProducts(context) {
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/products');
      let res = await fetched.json();
      // console.log(res.products);
      context.commit('setProducts', res.products)
    },

// GET PRODUCT
    async getProduct(context, id) {
      let fetched = await fetch('https://computer-hardware-capstone.herokuapp.com/products/' + id);
      let res = await fetched.json();
      // console.log(res);
      context.commit('setProduct', res.products[0])
    }
  },
  modules: {}
})