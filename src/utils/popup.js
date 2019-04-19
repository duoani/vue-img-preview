import PopupPreview from '../components/Popup'
import config from '../config'

export default function popup(Vue, img) {
  let zIndex = config.get('zIndex')
  let url
  if (typeof img === 'string') {
    url = img
  } else if (img instanceof Object) {
    url = img.img || ''
    if (typeof img.zIndex === 'number') {
      zIndex = img.zIndex
    }
  }
  var newPopup
  var vm
  var el
  const VuePopupPreview = Vue.extend({
    data() {
      return {
        show: false
      }
    },
    render(h) {
      const props = {
        zIndex,
        img: url,
        show: this.show
      }
      return h(PopupPreview, {
        props,
        on: {
          close() {
            if (el) {
              document.body.removeChild(el)
              newPopup.$destroy()
              vm = null
            }
          }
        }
      })
    }
  })

  newPopup = new VuePopupPreview()
  vm = newPopup.$mount()
  el = vm.$el
  document.body.appendChild(el) // 把生成的提示的dom插入body中
  vm.show = true
}