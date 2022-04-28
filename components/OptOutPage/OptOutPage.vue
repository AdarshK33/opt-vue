<template>
  <div class="row mainContainer">
    <div class="container optOutPage">
      <h1 class="contentHeader">Welcome to [Program Name]!</h1>
      <div class="row">
        <div class="col-sm-9">
          <h4>
            Did You know?Through this Program, your required course materials
            are
          </h4>

          <ul class="featureList fa-ul">
            <li>
              <i class="fa-li fa fa-check"></i>Offered at a discounted rate (
              students are saving between 35-40% every term )
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>Included as a flat course fee or
              charge as part of your education costs
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>Conveniently prepared for you
              before the first day of class
            </li>
          </ul>
        </div>
        <div class="col-sm-4">
          <!-- <img src="../assets/images/u22.png">-->
        </div>
      </div>
      <CommonCard />
      <div class="mt-40 text-center">
        <ViewMaterial />
        <OptOutOption />
      </div>
    </div>
  </div>
</template>

<script>
// import <import name> from 'import location'
import CommonCard from '../CommonCard'
import OptOutOption from '../OptOutOption'
import ViewMaterial from '../ViewMaterial'

export default {
  name: 'OptOutPage',
  components: {
    CommonCard,
    OptOutOption,
    ViewMaterial,
  },
  props: [],

  data() {
    return {
      dataHere: 'data',
    }
  },
  head() {
    return {
      title: '- Opt Out',
    }
  },
  mounted() {},
  watch: {},
  methods: {},
}
</script>

<style lang="scss">
.mainContent {
  height: 750px;
}

.featureList {
  padding: 0;
  margin: 0;
  margin-left: 30px;
  list-style-type: none;
  line-height: 1.8;
  font-size: 16px;
}

.banner {
  width: 89%;
  display: flex !important;
  background: #fff;
  border-radius: 20px;
}

.shadow1 {
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease-in-out;
  -webkit-box-shadow: 0px 0px 8px rgba(170, 170, 170, 1);
  -moz-box-shadow: 0px 0px 8px rgba(170, 170, 170, 1);
  box-shadow: 0px 0px 8px rgba(170, 170, 170, 1);
  border-radius: 20px;
}

.leftColumn {
  flex: 80%;
  padding: 20px;
}
.rightColumn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.leftColumn h4 {
  font-weight: 650;
  font-size: 22px;
  color: grey;
  font-family: sans-serif;
}
.leftColumn img {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
}
.leftColumn p {
  margin-top: 7vh;
  margin-left: 13vh;
  line-height: 1.8;
  font-size: 16px;
}
</style>
