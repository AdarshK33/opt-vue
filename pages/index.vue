<template>
  <div>
    <Welcome />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import { getCookie } from '../cookies.js'

export default {
  components: {
    Welcome
  },
  head() {
    return {
      title: 'Course List'
    }
  },
  data() {
    return {
      pageStat: 0,
      reqId: ''
    }
  },
  watch: {},
  created() {
    var cookie = getCookie('user')

    if (!cookie) {
      this.$router.push('/unauthorized')
    }
  },
  beforeMount: async function() {
    var cookie = getCookie('user')
    var user = JSON.parse(cookie)
    //console.log(cookie)
    this.reqId = user.requestId
    //await this.fetchUserDetails()
    await this.fetchStudentOptOutDetails()
  },
  async mounted() {
    if (document.documentMode) {
      this.$router.push('/unsupportedBrowser')
    }
  },

  methods: {
    async fetchStudentOptOutDetails() {
      let params = {
        requestId: this.reqId
      }
      await this.$apis.baseService
        .getStudentOptOutDetails(params)
        .then(res => {
          this.pageStat = res.data.pageStatus
          if (this.pageStat == '1') {
            //ptOutTerms has Terms and optInTerms = Null
            this.$router.push('/opt-out')
          } else if (this.pageStat == '2') {
            //optOutTerms = Null and optInTerms has Terms   =>   pageStatus = 2
            this.$router.push('/opt-in')
          } else if ((pageStatus = '0')) {
            this.$router.push('error.vue')
          }
        })
        .catch(err => {
          console.log(err, 'ERROR FROM STUDENT OPT OUT DETAILS')
        })
    }
  }
}
</script>
