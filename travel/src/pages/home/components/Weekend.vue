<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-warpper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-tilte">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props:['weekendList'],
  data() {
    return {
    
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-text-indent: 0.2rem;
}

.item 
  height: 0;
  padding-bottom:52%;
  overflow hidden
  .item-img 
    width: 100%
.item-info 
  .item-tilte 
    line-height: 0.5rem;
    font-size: 0.32rem;
    ellipsis();
  .item-desc 
    line-height: 0.5rem;
    font-size: 0.32rem;
    ellipsis();
  
</style>