import Constants from '~/utils/constants.js'

const studentInstance = process.server
  ? Constants.apiServices.studentSsrService.instance
  : Constants.apiServices.studentService.instance
const authInstance = Constants.apiServices.authService.instance

const optoutInstance = Constants.apiServices.optoutService.instance

export default $axios => ({
  //GENERIC
  getUserDetails(headers) {
    return $axios({
      url_instance: optoutInstance,
      method: 'post',
      url_suffix: `/getUser`,
      headers: headers
    })
  },

  getTenantDetails(params) {
    return $axios({
      url_instance: optoutInstance,
      method: 'post',
      url_suffix: `/getTenantDetails`,
      data: params
    })
  },

  getStoreDetails(params) {
    return $axios({
      url_instance: optoutInstance,
      method: 'post',
      url_suffix: '/getStoreDetails',
      data: params
    })
  },

  getCurrentWeather(params) {
    return $axios({
      url_instance: optoutInstance,
      method: 'post',
      url_suffix: '/getCurrentWeather',
      data: params
    })
  },

  //AUTH IMPLEMENTATION

  authenticateUser(params) {
    return $axios({
      url_instance: authInstance,
      method: 'post',
      url_suffix: '/un/fdc/authenticate',
      data: params
    })
  },

  //OPT OUT SERVICE
  getActiveTerms(params) {
    return $axios({
      url_instance: optoutInstance,
      method: 'post',
      url_suffix: `/getActiveTerms`,
      data: params
    })
  }
})
