<template>
  <transition name="dip-fade">
    <div
      v-show="show"
      class="dip">
      <div
        class="dip-mask"
        @click="close"></div>
      <img
        :src="img"
        class="img"/>
      <!-- <a
        :href="img"
        class="new-tab"
        target="_blank">新页面打开</a> -->
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
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '../scss/index.scss';
</style>
