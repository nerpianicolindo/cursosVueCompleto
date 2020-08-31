// src/directives.js

import Vue from 'vue'

Vue.directive('void', function(el) {
    console.log(el.value);
    console.log("Directiva");
})

Vue.directive('focus', {
    // Cuando el elemento enlazado se inserta en el DOM...
    inserted: function (el) {
      // Enfoca el elemento
      el.focus()
    }
})

Vue.directive('hooks', {
    bind: function(el, binding, vnode) {
      console.log(el);
      console.log(binding);
      console.log(vnode);
    }
})

Vue.directive("color", {
    inserted: function(el, binding) {    
      el.style.color = binding.value;
    }
  })
  
Vue.directive("sticky", 
    function(el, binding) {
        console.log(el);
        console.log(binding);  
        el.value = (binding.arg);
});