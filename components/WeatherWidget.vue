<template>
  <div class="row float-right mobStyle">
    <span class="weatherStyle">Current Weather on Campus</span>
    <div class="tempStyle" v-if="Object.keys(weatherResponse).length > 0">
      {{ Math.round(weatherResponse.temp.main.temp) }} °F
      <img
        typeof="foaf:Image"
        class="img-responsive"
        :src="
          'https://openweathermap.org/img/w/' +
            weatherResponse.temp.weather[0].icon +
            '.png'
        "
        :alt="weatherResponse.temp.weather[0].description"
        :title="weatherResponse.temp.weather[0].description"
        width="50"
        height="45"
      />
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie } from '../cookies.js'

export default {
  name: 'WeatherWidget',
  data() {
    return {
      zipcode: this.zip,
      realReq: 'reqIdnew',
      weatherResponse: {}
    }
  },
  props: [
    'campusInfo',
    'zip',
    'reqId',
    'storeNo',
    'selectedCampus',
    'storeDetails',
    'selectedTerm'
  ],
  created() {},
  mounted() {this.getCurrentWeather()},
  watch: {
    storeNo(newVal) {
      this.storeNo = newVal
      this.getCurrentWeather()
    },
    zip(newVal) {
      this.zipcode = newVal
      this.getCurrentWeather()
    }
  },
  methods: {
    async getCurrentWeather() {
      const params = {
        zip: this.zipcode,
        requestId: this.reqId,
        storeNumber:this.storeNo
      }

      await this.$apis.baseService
        .getCurrentWeather(params)
        .then(response => {
          this.weatherResponse = { ...response.data }
        })
        .catch(errors => {})
    }
  }
}
</script>

<style scoped></style>
