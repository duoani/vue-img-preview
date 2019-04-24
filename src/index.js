import Preview from './directives/preview'
import popup from './utils/popup'
import config from './config'

const POPUP = {
  install(Vue, options = {}) {
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

if (typeof window !== 'undefined' && window.Vue) {
  POPUP.install(window.Vue)
}

export default POPUP
