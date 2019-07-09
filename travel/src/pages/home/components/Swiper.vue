
  <template>
  <div class="wapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/57c0942b8ad742abf288489ee3acfcff.jpg_750x200_a23f426d.jpg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg"
          alt
        />
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
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.wapper 
   overflow: hidden
   width: 100%
   height:0
   padding-bottom :31.25%
   background :#eee
  .swiper-img 
  width: 100%;

</style>