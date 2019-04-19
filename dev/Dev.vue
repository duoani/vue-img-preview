<template>
  <div id="app">
    <span v-preview="img">Hello</span>
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
