<template>
  <div>
      <div class="search">
          <input class="search-input" type="text" placeholder="请输入城市名称">
      </div>
  </div>
</template>
<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.search
   height 0.72rem;
   padding 0 0.1rem;
   background  $bgColor;
   .search-input
      width 100%;
      height 0.62rem;
      line-height 0.62rem;
      text-align center;
      border-radius 0.06rem;
      color #666;
      padding 0 0.1rem;
      box-sizing border-box

    

</style>