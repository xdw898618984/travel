<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: "1",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
          title: "长隆野生动物世界",
          desc: "熊猫三胞胎与您共享欢乐时光"
        },
        {
          id: "2",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
          title: "长隆欢乐世界",
          desc: "爱挑战的你怎能错过垂直过山车"
        },
        {
          id: "3",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg",
          title: "锦绣香江温泉城",
          desc: "珠三角的绿肺，尽享私人别墅的奢华"
        },
        {
          id: "4",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg",
          title: "南沙百万葵园",
          desc: "南沙区"
        },
        {
          id: "5",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1812/47/cbdc44f461db0d.jpg_r_640x214_aab1da76.jpg",
          title: "增城白水寨风景名胜区",
          desc: "奇趣水谷与天南第一梯"
        }
      ]
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