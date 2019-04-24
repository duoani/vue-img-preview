<template>
  <div id="app">
    <p>
      <button v-preview="img">Simple Preview</button>
    </p>
    <p>
      <button v-preview="img" v-preview:title="'This is a title'">Preview with a title</button>
    </p>
    <p>
      <button @click="handleClick">Preview using $imgPreview</button>
    </p>
  </div>
</template>

<script>
// import Preview from '../src/directives/preview'

export default {
  // directives: { Preview },
  data () {
    return {
      img: '/dev/sight.jpeg'
    }
  },
  methods: {
    handleClick () {
      this.$imgPreview({
        img: '/dev/sight.jpeg',
        title: 'Nice sight',
        zIndex: 99
      })
    }
  }
};
</script>

<style>
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, sans-serif;
  }

  #app {
    height: 100%;
  }

  hr {
    border: none;
    border-bottom: 1px solid #cacaca;
    margin-bottom: 1em;
    padding-top: 1em;
    width: 90%;
  }
</style>
