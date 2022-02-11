import { getCookie } from '~/cookies.js'
import Constants from '~/utils/constants.js'

let qs = require('qs')
export const auth = async context => {
  let cookie = getCookie('user', context)
  // console.log('auth middleare')
  cookie = cookie ? (!process.server ? cookie : cookie.user) : ''

  if (cookie) {
    // console.log(cookie, "cookie")
    let user = cookie ? JSON.parse(cookie) : {}
    const isActiveRefreshToken = await refreshTokenCall(context, user) //isActiveRefreshToken
    // const isActiveRefreshToken = true;
    if (isActiveRefreshToken) {
      console.log('Active refresh token found')
      if (process.server) {
        await fetchUser(cookie, context)
      }
    } else {
      console.log('Active refresh token not found')
      await fetchTenantDetails(cookie, context)
    }
  }
}

const fetchTenantDetails = async (cookie, context) => {
  let userId
  let tenantId
  let accessToken
  let reqId
  let user
  if (cookie) {
    user = JSON.parse(cookie)
    userId = user.userId
    reqId = user.requestId
    tenantId = user.tenantId
    accessToken = user.accessToken ? user.accessToken : ''
  }
  const { $axios, store, redirect } = context
  let currentInstance = process.server
    ? Constants.apiServices.studentSsrService.instance
    : Constants.apiServices.studentService.instance

  let dataParams = {
    requestId: process.server ? 'SERVER_CALL' : reqId
  }
  console.log('Calling getTenantDetails params ', dataParams)
  console.log('REQ URL==> ', currentInstance, '/getTenantDetails')
  console.log('Parsed Cookie User Data==>', user)
  console.log('Request Headers ===> ', { tenantId, accessToken })

  await $axios({
    url_instance: currentInstance,
    url_suffix: `/getTenantDetails`,
    method: 'post',
    headers: {
      'X-Tenant-ID': tenantId,
      'X-Access-Token': accessToken,
      'X-User-Role': 'student'
    },
    data: dataParams
  })
    .then(res => {
      console.log('Success =>', res)
      if (res && res.data) {
        let ssoUrl = res.data.ssoUrl
        if (process.server) {
          redirect(ssoUrl)
        } else {
          window.location.href = ssoUrl
        }
      }
    })
    .catch(error => {
      console.log(
        "Can't get tenant details",
        error,
        error && error.response && error.response.status
          ? error.response.status
          : 'No Resonse STATUS :('
      )
    })
}

const fetchUser = async (cookie, context) => {
  let userId
  let reqId
  let tenantId
  let accessToken
  let user
  if (cookie) {
    user = JSON.parse(cookie)
    userId = user.emailId
    reqId = user.requestId
    tenantId = user.tenantId
    accessToken = user.accessToken ? user.accessToken : ''
  }
  const { $axios, store } = context

  let currentInstance = process.server
    ? Constants.apiServices.studentSsrService.instance
    : Constants.apiServices.studentService.instance

  await $axios({
    url_instance: currentInstance,
    method: 'post',
    url_suffix: `/getUser`,
    headers: {
      'X-Tenant-ID': tenantId,
      'X-User-ID': userId,
      'X-User-Role': 'student',
      'X-Access-Token': accessToken
    },
    data: {
      requestId: process.server ? 'SERVER_CALL' : reqId
    }
  })
    .then(async res => {
      console.log('Refresh' + res.data.requestId)
    })
    .catch(error => {
      console.log(error, "Can't get user by id")
    })
}

const refreshTokenCall = async (context, user) => {
  let params = {
    refresh_token: user.refreshToken
  }
  const { $axios } = context
  let isActiveRefreshToken
  try {
    const ssrAuthUrl = process.server
      ? Constants.apiServices.ssrOAuthService.instance
      : Constants.apiServices.oauthService.instance
    await $axios({
      url_instance: ssrAuthUrl,
      method: 'post',
      url_suffix: '/refreshToken',
      data: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    isActiveRefreshToken = true
  } catch (e) {
    isActiveRefreshToken = false
    console.log('Refresh Token Error ======>', e)
  }
  return isActiveRefreshToken
}

export default auth
