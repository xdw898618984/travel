<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";

import axios from "axios"; //引入axios
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [], //热门城市
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(res => {
        this.getCityInfoSucc(res);
      });
    },

    getCityInfoSucc(res) {
      if (res.data.ret) {
        const data = res.data.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      // console.log(letter);
      this.letter=letter
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped></style>