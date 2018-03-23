<template>
    <footer class="footer_guide border-1px">
        <div class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
          <span class="item_icon">
            <i class="iconfont icon-shouye"></i>
          </span>
          <span >
            首页
          </span>
        </div>
        <div class="guide_item" @click="goto('/sort')" :class="{on: isCurrent('/sort')}">
          <span class="item_icon">
            <i class="iconfont icon-fenlei"></i>
          </span>
          <span>分类</span>
        </div>
        <div class="guide_item" @click="goto('/shopcart')" :class="{on: isCurrent('/shopcart')}">
          <span class="item_icon">
            <i class="iconfont icon-shopcart"></i>
          </span>
          <span>购物车</span>
        </div>
        <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
          <span class="item_icon">
            <i class="iconfont icon-wode"></i>
          </span>
          <span>我的E宠</span>
        </div>
    </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 45px
    display flex
    /*line-height 45px*/
    .guide_item
      height: 45px;

      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top -3px
        margin-bottom 5px
        .iconfont
          font-size 25px
</style>
