<template>
  <div class="row mainContainer">
    <div class="container optOutPage">
      <h1 class="contentHeader">Welcome to [Program Name]!</h1>
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
.contentHeader
{
  margin-left: 30px;
}
.featureList {
  padding: 0;
  margin: 0;
  margin-left: 30px;
  list-style-type: none;
  line-height: 1.8;
  font-size: 16px;
}

</style>
