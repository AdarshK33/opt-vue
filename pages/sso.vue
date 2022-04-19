<template>
  <div class="mainContent">
    <div class="middleContentDiv">
      <p>{{ errorMessage }}</p>
      <div v-if="showLoader" class="courseModalLoader">
        <Loader />
      </div>
    </div>
  </div>
</template>
<script>
import Loader from '~/components/Loader'
import { setCookie, getCookie } from '../cookies.js'
export default {
  name: 'sso',
  components: {
    Loader
  },
  middleware: 'auth',
  layout: 'nonAuthView',
  head() {
    return {
      title: 'SSO Login'
    }
  },
  data() {
    return {
      showLoader: true,
      validUser: null,
      errorMessage: ''
    }
  },
  mounted() {
    let queryParams = JSON.parse(
      new Buffer(this.$route.query.data, 'base64').toString('ascii')
    )
    // console.log(queryParams + "queryparams");
    this.fetchUserDetails(queryParams)
  },
  methods: {
    async fetchUserDetails(queryParams) {
      let expiresAt = new Date(queryParams.refreshTokenExpiresAt)
      const data = {
        tenantId: queryParams.tenantId,
        userId: queryParams.userId,
        emailId: queryParams.username,
        refreshToken: queryParams.refreshToken,
        accessToken: queryParams.accessToken,
        refreshTokenExpiresAt: queryParams.refreshTokenExpiresAt,
        firstLogin: queryParams.firstLogin || false
      }

      setCookie('user', JSON.stringify(data), {
        expires: expiresAt
      })
      let headers = {
        'X-Tenant-ID': queryParams.tenantId,
        'X-User-ID': queryParams.username,
        'X-User-Role': 'student',
        'X-Access-Token': queryParams.accessToken
      }
      if (queryParams.userId && queryParams.tenantId) {
        await this.$apis.baseService
          .getUserDetails({ ...headers })
          .then(async res => {
            // console.log(res + " User details response")
            if (res.data) {
              this.validUser = res.data

              await this.authoriseUser(queryParams)
            } else {
              this.showLoader = false
              this.errorMessage =
                'Error occurred authenticating user. Please try after sometime.'
            }
          })
          .catch(error => {
            this.showLoader = false
            this.errorMessage =
              'Error occurred authenticating user. Please try after sometime.'
            console.log(error + ' User details response error')
          })
      } else {
        this.showLoader = false
        this.errorMessage =
          'Error occurred authenticating user. Please try after sometime.'
      }
    },
    async authoriseUser(queryParams) {
      if (this.validUser) {
        let user = {}
        let cookie = getCookie('user')
        if (cookie) {
          user = JSON.parse(cookie)
        }
        let expiresAt = new Date(user.refreshTokenExpiresAt)

        let tenantId = this.validUser.tenantId
        let emailId = this.validUser.email
        let userId = this.validUser.id
        let currentRole = 'student'
        let accessToken = user.accessToken
          ? user.accessToken
          : queryParams.accessToken
        let refreshToken = user.refreshToken
          ? user.refreshToken
          : queryParams.refreshToken
        let refreshTokenExpiresAt = user.refreshTokenExpiresAt
          ? user.refreshTokenExpiresAt
          : queryParams.refreshTokenExpiresAt
        let requestId = this.validUser.requestId
        const data = {
          tenantId,
          userId,
          emailId,
          currentRole,
          accessToken,
          refreshToken,
          refreshTokenExpiresAt,
          requestId
        }
        await setCookie('user', JSON.stringify(data), {
          expires: expiresAt
        })

        this.routeUser()
        this.showLoader = false
      } else {
        this.showLoader = false
        this.errorMessage =
          'Error occurred authenticating user. Please try after sometime.'
      }
    },

    routeUser(currentTier) {
      window.location.replace('/courses/')
    }
  }
}
</script>
