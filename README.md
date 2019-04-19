
## install

```bash
npm install @duoa/vue-img-preview
```

Register the component

```js
import Vue from 'vue'
import VueImgPreview from '@duoa/vue-img-preview'
import '@duoa/vue-img-preview/dist/vue-img-preview.css'

Vue.use(VueImgPreview)

// You can also set the default z-index
Vue.use(VueImgPreview, {
  zIndex: 9999
})
```

You may now use the `v-preview` directive in your markup.

```html
<template>
  <span v-preview="img">Preview</span>
</template>
<script>
export default {
  data () {
    return {
      img: 'http://your.img.url'
    }
  }
}
</script>
```
