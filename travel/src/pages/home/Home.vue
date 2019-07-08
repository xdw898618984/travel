<template>
  <div>
    <home-header></home-header>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
export default {
  name: "Home",
  //局部组件要使用componetns
  components: {
    HomeHeader
  }
};
</script>
<style scoped>
</style>

