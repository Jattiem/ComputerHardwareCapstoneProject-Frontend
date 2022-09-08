<template>
  <section class="products">
    <h2 class="h2">Products</h2>
    <div class="container">
      <div class="row sort">
        <div class="col-md-3">
          <label for="sortby">Sort by:</label>
          <select class="form-select" name="sort-by">
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
        <div class="col-md-3">
          <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" v-model="search"> 
        </div>
      </div>
      <div v-if="products" class="row d-flex justify-content-center">
        <div
          v-for="product in products"
          :key="product.id"
          class="card mx-2 bg-light"
        >
          <div class="bg-light">
            <img
              :src="product.img"
              class="card-img-top img-fluid cards rgb"
              alt="image"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.brand }}</h5>
            <h5>$ {{ product.price }}</h5>
            <router-link
              :to="{
                name: 'singleProduct',
                params: { id: product.id },
              }"
            >
              <button id="viewproduct" class="btn btn-dark text-black w-5">
                View
              </button>
              <br /> 
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="dot-spinner">
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </section>
</template>

<script>
export default {
  props: ["product"],
  data(){
    return{
      search: ''
    }
  },
  computed: {
    products() {
      return this.$store.state.products?.filter(products =>{
          let Match = true;
          if (!products.brand.toLowerCase().includes(this.search.toLowerCase())) {
              Match = false;
          }
          return Match
          })
        },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
  .search{
    margin-top: 24px;
  }
.dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: #183153;
  position: relative;
  left: 39rem;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: var(--uib-size);
  width: var(--uib-size);
}
.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}
.dot-spinner__dot::before {
  content: "";
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}
.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}
.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}
.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}
.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}
.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}
.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}
.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}
.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}
.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}
.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}
.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}
.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}
.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}
.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}
@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

.card {
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
button {
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}
button:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}
.sort {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  color: black;
}
#viewproduct {
  width: 109px;
  margin-bottom: 10px;
  height: 50px;
}
#add {
  width: 109px;
  height: 50px;
}
.page-link {
  color: rgba(0, 0, 0, 0.795);  
}
h2 {
  margin-top: 160px;
  color: black;
}
.cards {
  padding-top: 10px;
  object-fit: contain;
  border-radius: 1px;
  border: 1px;
  height: 200px;
  width: 150px;
}
.products {
  background: linear-gradient(   red, blue);
  height: 100%;
  padding-top: 1px;
  padding-bottom: 1px;
  scroll-behavior: smooth;
}
.card {
  height:380px;
  width: 250px;
  margin-bottom: 10px;
}
.bottom {
  padding-bottom: 150px;
}
img{
  box-shadow: none;
}
section{
  scroll-behavior: smooth;
}
@media only screen and (min-width:300px) and (max-width: 301px){
  section{
    margin-top:-30px;
  }
  .bottom{
    padding-bottom: 160px;
  }
}
@media only screen and (min-width:320px) and (max-width: 321px){
  section{
    margin-top:-30px;
  }
  .bottom{
    padding-bottom: 160px;
  }
}
@media only screen and (min-width:375px) and (max-width: 376px){
  section{
    margin-top:-30px;
  }
  .bottom{
    padding-bottom: 160px;
  }
}
@media only screen and (min-width:425px) and (max-width: 426px){
  section{
    margin-top:-30px;
  }
  .bottom{
    padding-bottom: 160px;
  }
}
@media only screen and (min-width:768px) and (max-width: 769px){
  section{
    margin-top:-30px;
  }
  .bottom{
    padding-bottom: 160px;
  }
}
</style>