import Preview from './directives/preview'
import popup from './utils/popup'

const POPUP = {
  install(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.directive('Preview', Preview)
    // mount to vue prototype chain
    Vue.prototype.$imgPreview = function(url) {
      if (!url) { return }
      popup(Vue, url)
    }
  }
}

export default POPUP
