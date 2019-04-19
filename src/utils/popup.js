import PopupPreview from '../components/Popup'

export default function popup(Vue, img) {
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
        img,
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