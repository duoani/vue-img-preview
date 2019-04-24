<template>
  <transition name="dip-fade">
    <div
      v-show="show"
      :style="styles"
      class="dip">
      <div
        class="dip-mask"
        @click="close"></div>
      <img
        :src="img"
        class="img"/>
      <i
        class="dip-close dipfont dip-close"
        @click="close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  
  name: 'Popup',
  
  props: {
    img: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 99999
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  
  computed: {
    styles () {
      return { zIndex: this.zIndex }
    }
  },
  
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
 @import '../scss/index.scss';
</style>
