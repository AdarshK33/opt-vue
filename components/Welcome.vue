<template>
  <div class="container-fluid" style="padding: 0 !important">
    <div id="mainContent">
      <div v-if="optInPg">
        <OptInPage />
      </div>
      <div v-else>
        <!--<OptOutPage />-->
      </div>
    </div>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome-free'
import OptInPage from './OptInPage/OptInPage.vue'
//import OptOutPage from './OptoutPage/OptOutPage'

export default {
  name: 'Welcome',
  components: {
    OptInPage,
    // OptOutPage,
  },
  data() {
    return {
      optInPg: true
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
