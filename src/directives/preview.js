import Vue from 'vue'
import popup from '../utils/popup'

export default {
  bind(el, binding) {
    if (binding.arg === 'z-index') {
      console.log('zIndex:', binding.arg, binding.value)
      el._v_preview_zIndex = binding.value
    } else {
      el.addEventListener('click', () => {
        console.log('zIndex:', binding.arg, binding.value)
        const options = {
          img: binding.value
        }
        if (el._v_preview_zIndex) {
          options.zIndex = el._v_preview_zIndex
        }
        popup(Vue, options)
      })
    }
  }
}
