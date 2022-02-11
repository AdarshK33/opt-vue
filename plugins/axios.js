import { getCookie, setCookie, clearCookie } from '../cookies.js'
import Constants from '~/utils/constants.js'

let qs = require('qs')
const cookieparser = process.server ? require('cookieparser') : undefined

const getUrlPrefix = instance => {
  let service = ''
  const { apiServices } = Constants
  switch (instance) {
    case apiServices.studentService.instance:
      service = apiServices.studentService.service
      break
    case apiServices.studentSsrService.instance:
      service = apiServices.studentSsrService.service
      break
    case apiServices.authService.instance:
      service = apiServices.authService.service
      break
    case apiServices.oauthService.instance:
      service = apiServices.oauthService.service
      break
    case apiServices.ssrOAuthService.instance:
      service = apiServices.ssrOAuthService.service
      break
    default:
      service = ''
  }
  return service
}

export default function(app) {
  const { $axios, env, redirect, req, store } = app

  $axios.onRequest(config => {
    let cookie = getCookie('user', app)

    cookie = !process.server ? cookie : cookie.user
    let user = cookie && JSON.parse(cookie)
    const service = getUrlPrefix(config.url_instance)
    let requestId
    if (cookie) {
      config.headers['X-Tenant-ID'] = user.tenantId
      config.headers['X-User-ID'] = user.emailId
      config.headers['X-User-Role'] = 'student'
      config.headers['X-Access-Token'] = user.accessToken
      requestId = user.requestId ? user.requestId : 'SERVER_CALL'
    }

    config.baseURL = env[config.url_instance]
    config.url = config.baseURL + `${`/${service}${config.url_suffix}`}`

    config.url =
      config.url.indexOf('?') > 0
        ? config.url + `&timestamp=${new Date().getTime()}`
        : config.url + `?timestamp=${new Date().getTime()}`
  })

  $axios.onResponseError(async err => {
    let cookie = getCookie('user', app)

    cookie = !process.server ? cookie : cookie.user
    let user = cookie && JSON.parse(cookie)
    const code = parseInt(err.response && err.response.status)
    let originalRequest = err.config

    if ([401, 403].includes(code)) {
      let params = {
        refresh_token: user && user.refreshToken
      }

      if (code === 403) {
        const ssrAuthUrl = process.server
          ? Constants.apiServices.ssrOAuthService.instance
          : Constants.apiServices.oauthService.instance
        await $axios({
          url_instance: ssrAuthUrl,
          method: 'post',
          url_suffix: '/refreshToken',
          data: qs.stringify(params)
        })
          .then(async response => {
            if (response.status === 200) {
              if (user.refreshToken) {
                if (response.data && response.data.tokenFull) {
                  var expiresAt = new Date(user.refreshTokenExpiresAt)
                  const data = {
                    tenantId: user.tenantId,
                    userRole: 'student',
                    userEmail: user.emailId,
                    refreshToken: response.data.tokenFull.refreshToken || '',
                    accessToken: response.data.tokenFull.accessToken || ''
                  }
                  await setCookie('user', JSON.stringify(data), {
                    expires: expiresAt
                  })
                }
              }
            }
          })
          .catch(async e => {
            console.log(e, 'Refresh token error')
            await logout($axios, redirect, req, app)
            return Promise.reject(e)
          })
      } else {
        await logout($axios, redirect, req, app)
        console.log(err, '401 error', {
          errorRoute: originalRequest.url_suffix
        })
        return Promise.reject(err)
      }
    }
    return Promise.reject(err)
  })
}

const logout = async (redirect, req, app) => {
  let cookie = getCookie('user', app)

  cookie = !process.server ? cookie : cookie.user

  if (cookie) {
    redirect('/unauthorized/')
    clearCookie('user')
    clearCookie('refreshToken')
    clearCookie('token')

    if (!process.server) {
      localStorage.clear()
    }
  }
}
