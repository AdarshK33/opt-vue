<template>
  <div
    class="mainContainer"
    role="main"
    aria-describedby="loginHeader"
    v-if="checkIE"
  >
    <h1 id="loginHeader">Welcome to First Day™ Complete Portal</h1>
    <form @submit.prevent="loginUser">
      <div>
        <label for="userEmail" class="hidden">User Email*</label>
        <input
          v-model="userEmail"
          name="user"
          id="userEmail"
          type="text"
          placeholder="User Email*"
        />
      </div>
      <div>
        <label for="password" class="hidden">Password*</label>
        <input
          v-model="password"
          name="password"
          id="password"
          type="password"
          placeholder="Password*"
        />
      </div>
      <button id="btnLogin" role="button">Login</button>
      <p
        v-if="errorMessage != ''"
        style="margin:10px; color: #cd2026;"
        aria-live="assertive"
        aria-atomic="true"
        class="errorMsg"
        role="alert"
      >
        {{ errorMessage }}
      </p>
    </form>
  </div>
</template>

<script>
import { setCookie, clearCookie, getCookie } from '../cookies.js'
import CryptoJS from 'crypto-js'

export default {
  name: 'Login',
  layout: 'nonAuthView',
  data() {
    return {
      userEmail: '',
      password: '',
      errorMessage: '',
      userRole: 'student',
      tenantId: '',
      accessToken: '',
      currentRole: '',
      refreshToken: '',
      expiresAt: '',
      userId: '',
      requestId: '',
      checkIE: false
    }
  },
  head() {
    return {
      title: 'Login'
    }
  },

  mounted() {
    let cookieData = getCookie('user')
    if (
      cookieData !== undefined &&
      cookieData !== null &&
      Object.keys(cookieData).length > 0
    ) {
      clearCookie('user')
    }
    if (document.documentMode) {
      this.$router.push('/unsupportedBrowser')
    } else {
      this.checkIE = true
    }
  },
  methods: {
    async loginUser() {
      this.errorMessage = ''

      if (this.userEmail.length > 0 && this.password.length > 0) {
        const cipher = this.encryptPassword(this.password)
        let params = {
          username: this.userEmail.trim(),
          password: cipher
        }
        await this.$apis.baseService
          .authenticateUser(params)
          .then(async res => {
            if (res && res.data && res.data.tokenFull) {
              this.accessToken = res.data.tokenFull
              this.refreshToken = res.data.refreshToken
              this.expiresAt = res.data.refreshTokenExpiresAt
              this.userDetails = res.data.user
              this.userEmail = res.data.user.email
              this.tenantId = res.data.user.tenant_id
  
              let headers = {
                'X-Tenant-ID': res.data.user.tenant_id,
                'X-User-ID': res.data.user.email,
                'X-User-Role': 'student',
                'X-Access-Token': res.data.tokenFull
              }
              await this.$apis.baseService
                .getUserDetails({
                  ...headers
                })
                .then(async res => {
                  this.userId = res.data.id
                  this.requestId = res.data.requestId

                  await this.setToCookies()
                })
                .catch(e => {
                  this.errorMessage =
                    'Something went wrong please try again later!'
                })
            } else if (res && res.data && res.data.msg) {
              this.errorMessage = res.data.msg
            } else {
              this.errorMessage = 'Incorrect user name or password!'
            }
          })
          .catch(error => {
            this.errorMessage =
              (error &&
                error.response &&
                error.response.data &&
                error.response.data.msg) ||
              'Incorrect user name or password!'
          })
      } else {
        this.errorMessage = 'Incorrect user name or password!'
      }
    },
    async setToCookies() {
      var expiresAt = new Date(this.expiresAt)
      let userId = this.userId
      let emailId = this.userEmail
      let requestId = this.requestId
      let tenantId = this.tenantId
      let accessToken = this.accessToken
      let refreshToken = this.refreshToken ? this.refreshToken : ''
      let refreshTokenExpiresAt = this.expiresAt
      const data = {
        tenantId,
        emailId,
        userId,
        requestId,
        accessToken,
        refreshToken,
        refreshTokenExpiresAt
      }
      setCookie('user', JSON.stringify(data), {
        expires: expiresAt
      })
      this.$router.push('/')
    },

    encryptPassword(password) {
      var ciphertext = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET_KEY
      ).toString()
      return ciphertext
    }
  }
}
</script>
<style scoped>
.mainContainer {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

input {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 0;
  box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.25);
  padding-left: 20px;
  margin-bottom: 20px;
}

button {
  background-color: #3c799a !important;
  border-radius: 2px;
  height: 35px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 1.75em;
  text-transform: uppercase;
  padding: 5px 2em;
  font-size: 12px;
  border: none;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}
</style>
