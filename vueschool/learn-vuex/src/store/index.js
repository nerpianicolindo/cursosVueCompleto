import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  //State es equivalente a data
  state: {
    products: []
  },

  //Getters es equivalente a computed properties
  getters: {
    productsCount() {
      // ...
    }
  },

  //Actions es equivalente a mehtods
  actions: {
    // Hacer la llamada
    fetchProducts() {
      // ...
    }
  },

  //Mutations es el responsable de los setters y updaters de State
  mutations: {
    setProducts (state, products) {
      //Update products
      state.products = products
    }
  }
})
