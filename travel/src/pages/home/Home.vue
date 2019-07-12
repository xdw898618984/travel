<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommmend";
import HomeWeekend from "./components/Weekend";

import axios from "axios"; //引入axios
export default {
  name: "Home",
  //局部组件要使用componetns
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: String,
      iconList: [],
      weekendList: [],
      swiperList: [],
      recommendList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(res => {
        this.getHomeInfoSucc(res);
      });
    },
    getHomeInfoSucc(res) {
      console.log(res);
      if (res.data.ret) {
        this.city = "北京";
        const data = res.data.data;
        this.iconList = data.iconList;
        this.weekendList = data.weekendList;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
<style scoped>
</style>

