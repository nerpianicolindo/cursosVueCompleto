import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  //State es equivalente a data
  state: {
    products: []
  },

  //Getters es equivalente a computed properties
  getters: {
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  //Actions es equivalente a mehtods
  actions: {
    // Hacer la llamada
    fetchProducts({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })

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
