const Constants = Object.freeze({
  apiServices: {
    studentService: {
      instance: 'API_STUDENT',
      service: 'courses/student'
    },
    studentSsrService: {
      instance: 'API_STUDENT_SSR',
      service: 'courses/student'
    },
    oauthService: {
      instance: 'API_OAUTH',
      service: 'api/oauth'
    },
    ssrOAuthService: {
      instance: 'API_OAUTH_SSR',
      service: 'api/oauth'
    },
    authService: {
      instance: 'API_AUTH',
      service: 'api/users'
    },
    optoutService: {
      instance: 'API_OPTOUT',
      service: 'api/fdc-opt-out'
    }
  }
})

export default Constants
