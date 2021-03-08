<template>
  <div class="city">
    <city-header />
    <city-search :cities="cities" />
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter" />
    <city-right :cities="cities" @change="change" />
  </div>
</template>


<script>
import CityHeader from "./children/CityHeader";
import CitySearch from "./children/CitySearch";
import CityList from "./children/CityList";
import CityRight from "./children/CityRight";

import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityRight,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
    };
  },
  created() {
    axios.get("/mock/city.json").then((res) => {
      res = res.data;
      if (res.ret && res.data) {
        this.cities = res.data.cities;
        this.hotCities = res.data.hotCities;
      }
    });
  },
  methods: {
    change(key) {
      this.letter = key;
    },
  },
};
</script>


<style lang="less" scoped>
</style>