<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of pages" :key="index">
        <div class="icon" v-for="items of item" :key="items.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="items.imgUrl" alt />
            <p class="icon-desc">{{items.name}}</p>
          </div>
        </div>
      </swiper-slide>

      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        // pagination: {
        //   el: ".swiper-pagination"
        // }
      },
      imgList: [
        {
          id: "1",
          name: "景点门票",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "2",
          name: "故宫",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"
        },
        {
          id: "3",
          name: "北京必游",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
        },
        {
          id: "4",
          name: "水上乐园",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png"
        },
        {
          id: "5",
          name: "爬长城",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png"
        },
        {
          id: "6",
          name: "北京欢乐谷",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png"
        },
        {
          id: "7",
          name: "动植物园",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"
        },
        {
          id: "8",
          name: "北京野生动物园",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png"
        },
        {
          id: "9",
          name: "xxx",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.imgList.forEach((item, index) => {
        const page = Math.floor(index / 8);

        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';
* {
    touch-action: pan-y;
}
.icons >>>.swiper-container
  height: 0;
  padding-bottom: 50%;
.icons 
  margin-top:0.2rem;
  .icon 
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    position: relative;

    .icon-img 
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padiing: 0.1rem;

      .icon-img-content 
        display: block;
        margin: 0 auto;
        height: 100%;
      
    

    .icon-desc 
      position: absolute;
      left: 0;
      right: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
 
    
  
</style>