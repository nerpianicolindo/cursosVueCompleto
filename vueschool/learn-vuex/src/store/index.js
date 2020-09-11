import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  //State es equivalente a data
  state: {
  },

  //Getters es equivalente a computed properties
  getters: {

  },

  //Actions es equivalente a mehtods
  actions,

  //Mutations es el responsable de los setters y updaters de State
  mutations: {

  }
})
