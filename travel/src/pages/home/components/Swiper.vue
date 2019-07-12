
  <template>
  <div class="wapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div>/ -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:['swiperList'],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },

    };
  }
};
</script>
<style lang="stylus" scoped>
.wapper>>>.swiper-pagination-bullet-active {
  background: white;
}

.wapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.7%;
  background: #eee;
}

.swiper-img {
  width: 100%;
}
</style>