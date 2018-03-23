<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
      components:{
          FooterGuide
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body,html
    width 100%
    height 100%
    #app
      width 100%
      height 100%
</style>
