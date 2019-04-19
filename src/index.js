import Preview from './directives/preview'
import popup from './utils/popup'
import config from './config'

const POPUP = {
  install(Vue, options = {}) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    const { zIndex } = options
    if (typeof zIndex === 'number') {
      config.set('zIndex', zIndex)
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
