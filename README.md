
# Vue Img Preview

An simple & easy use component for image preview.

## Take a glance

<a href="https://duoani.github.io/vue-img-preview/index.html" target="_blank">Online Demo</a>

## Installation

```bash
npm install @duoa/vue-img-preview
```

Register the component

```js
import Vue from 'vue'
import VueImgPreview from '@duoa/vue-img-preview'
// Because this components has its styles, you must also import the css file.
import '@duoa/vue-img-preview/dist/vue-img-preview.css'

// Register
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

That's all you need to do!
