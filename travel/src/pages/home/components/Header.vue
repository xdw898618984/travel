<template>
  <div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe676;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe67b;</span>
        </div>
    <div class="header-right">
       城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>
<style lang="stylus" scoped>

@import "~@/assets/styles/varibles.styl";
.header
  display :flex
  line-height :0.86rem
  background :$bgColor
  color:#fff 
  .header-left
    width: 0.64rem
    float:left
    text-align :center
    .back-icont
     text-align :center
     font-size :0.4rem

  .header-input
   flex:1
   background :#fff
   height :0.64rem
   line-height :0.64rem
   border-radius 0.1rem
   margin-top :0.12rem
   margin-left :0.2rem
   color:#ccc
   padding-left :0.2rem

  .heder-right
    width :1.24rem
    float :right
    text-align :center
      .arrow-icon
        font-size :0.2rem
        margin-left :-0.04rem
</style>

