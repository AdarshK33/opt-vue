<template>
  <div id="app" role="main">
    <div id="mainHeader" class="mainHeaderWrap" v-if="loadingComplete">
      <TopHeader
        :zipC="zip"
        :requestId="reqId"
        :storeNo="storeNumber"
        :campusInfo="campusDetails"
        @campusChanged="newCampusSelected"
      />
      <hr />
      <Header :userInf="userInfo" :tenantP="tenantDetails" />
      <hr />
      <div>
        <nuxt />
        <div id="mainFooter">
          <Footer :storeDets="storeDetails" />
        </div>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Loader from '~/components/Loader'
import { getCookie } from '../cookies.js'

export default {
  middleware: 'auth',
  components: {
    TopHeader,
    Header,
    Footer,
    Loader
  },
  data() {
    return {
      userInfo: {},
      reqId: '',
      campusDetails: [],
      termCode: '',
      termYear: '',
      storeDetails: {},
      tenantDetails: {},
      storeNumber: '',
      zip: '',
      loadingComplete: false
    }
  },
  created() {},
  beforeMount: async function() {
    await this.fetchUserDetails()
    await this.fetchTenantDetails()
    await this.fetchActiveTerms()
    // await this.fetchStoreDetails()
    await this.fetchingDone()

    var cookie = getCookie('user')

    if (document.documentMode) {
      this.$router.push('/unsupportedBrowser')
    } else {
      if (cookie) {
        var user = JSON.parse(cookie)
      } else {
        this.$router.push('/unauthorized')
      }
    }
  },
  async mounted() {},
  watch: {
    reqId(newVal) {
      this.reqId = newVal
    },
    storeNumber(newVal) {
      this.storeNumber = newVal
      this.fetchStoreDetails()
    },
    zip(newVal) {
      this.zip = newVal
    }
  },

  methods: {
    fetchingDone() {
      this.loadingComplete = true
    },
    newCampusSelected(val) {
      this.storeNumber = val.storeNumber
      this.fetchStoreDetails()
    },

    async fetchUserDetails() {
      await this.$apis.baseService
        .getUserDetails()
        .then(async res => {
          this.userInfo = res.data
          this.reqId = res.data.requestId
        })
        .catch(err => {
          console.log(err, 'REQUEST ID ERROR')
        })
    },

    async fetchActiveTerms() {
      let params = {
        requestId: this.reqId
      }

      await this.$apis.baseService
        .getActiveTerms(params)
        .then(async res => {
          console.log(res)
          // this.termCode = res.data.terms[0].termCode
          // this.termYear = res.data.terms[0].termYear
          // this.campusDetails = res.data.campuses
          // this.storeNumber = res.data.terms[0].campuses.storeNumber
        })
        .catch(err => {
          console.log(err, 'ActiveTerms ERROR')
        })
    },

    async fetchStoreDetails() {
      let params = {
        requestId: this.reqId,
        storeNumber: this.storeNumber
          ? this.storeNumber
          : this.campusDetails[0].storeNumber,
        termCode: this.termCode ? this.termCode : null,
        termYear: this.termYear ? this.termYear : null
        // cartId: cartId
      }

      await this.$apis.baseService
        .getStoreDetails(params)
        .then(async res => {
          this.storeDetails = res.data
          this.zip = res.data.storeInfo.storeAddress.zipcode
        })
        .catch(err => {
          console.log(err, 'FROM GET STORE DETAILS')
        })
    },

    async fetchTenantDetails() {
      let params = {
        requestId: this.reqId
      }

      await this.$apis.baseService
        .getTenantDetails(params)
        .then(res => {
          this.tenantDetails = res.data
        })
        .catch(err => {
          console.log(err, 'ERROR FROM TENANT DETAILS')
        })
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
