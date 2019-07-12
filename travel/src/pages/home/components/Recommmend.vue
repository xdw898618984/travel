<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt />
        <div class="item-info">
          <p class="item-tilte">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props:['recommendList'],
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

.item {
  display: flex;
  height: 2rem;

  .item-img {
    height: 1.8rem;
    width: 1.8rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    min-width: 0;
  }

  .item-tilte {
    line-height: 0.5rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.5rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-button {
    line-height: 0.8rem;
    margin-top: 0.1rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    border-radius: 0.1rem;
    background: #ff9300;
  }
}
</style>