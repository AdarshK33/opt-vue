import { getCookie } from '~/cookies.js'

const unauthorized = async context => {
  let cookie = getCookie('user', context)
  cookie = cookie ? (!process.server ? cookie : cookie.user) : ''
  if (cookie) {
    context.redirect('/')
  }
}

export default unauthorized
