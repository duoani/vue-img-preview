import Vue from 'vue'
import popup from '../utils/popup'

export default {
  bind(el, binding) {
    el.addEventListener('click', () => {
      if (binding.value) {
        popup(Vue, binding.value)
      }
    })
  }
}
