<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>

        <div class="button-list">
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
          <div class="button-warpper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>

        <div class="item-list">
          <div class="item border-bottom">aaa</div>

          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>

          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>

          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>

          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
          <div class="item border-bottom">aaa</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";

// import PullUp from "@better-scroll/pull-up";
// BScroll.use(Pullup)
export default {
  name: "CityList",
  mounted() {
    
    this.$nextTick(() => {

                this.scroll = new BScroll(this.$refs.wrapper, {})    });
    // let bs = new BScroll(".list", {
    // //   pullUpLoad: true
    // });
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;

  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-warpper {
      width: 33.33%;
      float: left;

      .button {
        margin: 0.1rem;
        border-radius: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.54rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>