<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" v-model="keyword" placeholder="请输入城市名称" />
    </div>

    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      scroll:null,
    };
  },

  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const result = [];

        for (const key in this.cities) {
          this.cities[key].forEach(element => {
            if (
              element.spell.indexOf(this.keyword) > -1 ||
              element.name.indexOf(this.keyword) > -1
            ) {
              result.push(element);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.scroll = new BScroll(this.$refs.search);
    // }, 300);
    setTimeout(() => {
      // this.scroll = new BScroll(this.$refs.wrapper);
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.search, {
            probeType: 3,
            // 允许使用点击事件
            click: true,
            // 允许上拉加载
            pullUpLoad: {
              threshold: -10
            },
            // 允许下拉加载
            pullDownRefresh: {
              threshold: 100,
              stop: 0
            },
            scrollbar: {
              fade: false,
              interactive: true // 1.8.0 新增
            }
          });
          this.scroll.on("scroll", position => {
            window.console.log(position);
          });
        } else {
          this.scroll.refresh();
        }
      });
    }, 1000);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eeeeee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>