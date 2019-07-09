<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <div>test</div>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
export default {
  name: "Home",
  //局部组件要使用componetns
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
};
</script>
<style scoped>
</style>

