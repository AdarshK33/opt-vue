<template>
  <div class="row mainHeader">
    <div class="col-lg-4 col-md-4 logo">
      <!-- <p v-if="showLoader"><i class="fa fa-spinner fa-spin"></i></p> -->
      <!-- <p v-if="!multiCampusInfo">{{storeDetails.storeInfo.name}}</p> -->
      <p v-if="campusInfo.length > 1">
        <label for="userCampus" class="fontSize0"> Campuses</label>
        <select
          tabindex="1"
          id="userCampus"
          v-model="selectedCampus"
          @change="handleUserCampus(selectedCampus)"
          class="custom-select custom-select-medium"
          style="font-weight: 400;font-style: normal;font-size: 14px!important;width:auto;"
        >
          <option
            v-for="campus in campusInfo"
            :key="campus.storeNumber"
            :value="campus"
          >
            {{ campus.campusName }}
          </option>
        </select>
      </p>

      <p v-if="campusInfo.length == 1">{{ campusInfo[0]['campusName'] }}</p>
    </div>
    <div class="col-lg-4 col-md-5 text-right">
      <WeatherWidget
        v-if="zipcode"
        :campusInfo="campusInfo"
        :zip="zipcode"
        :reqId="reqId"
        :storeNo="storeNumber"
        :selectedCampus="selectedCampus"
      />
    </div>
    <div class="col-lg-4"></div>
  </div>
</template>

<script>
import WeatherWidget from './WeatherWidget.vue'
export default {
  name: 'TopHeader',
  data() {
    return {
      showLoader: true,
      selectedCampus: {},
      storeData: {},
      storeNumber: '',
      zipcode: this.zipC
    }
  },
  props: {
    zipC: {
      type: String,
      required: false
    },
    campusInfo: {
      type: Array,
      required: true
    }
  },
  components: {
    WeatherWidget
  },
  mounted() {
    console.log(this.campusInfo)
    if (this.campusInfo !== undefined) {
      this.selectedCampus = this.campusInfo[0]
    }
  },
  watch: {
    storeNumber(newVal) {
      this.storeNumber = newVal
    },
    zipC(newVal) {
      this.zipcode = newVal
    }
  },

  methods: {
    async handleUserCampus(campus) {
      this.storeNumber = campus.storeNumber
      this.$emit('campusChanged', campus)
    }
  }
}
</script>

<style></style>
