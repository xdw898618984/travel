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
  data() {
    return {
      recommendList: [
        {
          id: "1",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg",
          title: "长隆野生动物世界",
          desc: "熊猫三胞胎与您共享欢乐时光"
        },
        {
          id: "2",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_200x200_d3b1427c.jpg",
          title: "长隆欢乐世界",
          desc: "爱挑战的你怎能错过垂直过山车"
        },
        {
          id: "3",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1511/89/894fa87d78ab240890.water.jpg_200x200_9eb09344.jpg",
          title: "锦绣香江温泉城",
          desc: "珠三角的绿肺，尽享私人别墅的奢华"
        },
        {
          id: "4",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg",
          title: "南沙百万葵园",
          desc: "南沙区"
        },
        {
          id: "5",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg",
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