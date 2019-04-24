import Vue from 'vue'
import popup from '../utils/popup'

export default {
  bind(el, binding) {
    if (binding.arg === 'z-index') {
      el._v_preview_zIndex = binding.value
    } else if (binding.arg === 'title') {
      el._v_preview_title = binding.value
    } else {
      el.addEventListener('click', () => {
        const options = {
          img: binding.value
        }
        if (el._v_preview_zIndex) {
          options.zIndex = el._v_preview_zIndex
        }
        if (el._v_preview_title) {
          options.title = el._v_preview_title
        }
        popup(Vue, options)
      })
    }
  }
}
