import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
if (process.browser) {
  var ls = new SecureLS({ encodingType: 'aes', isCompression: false })
}

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'courseLocalData',
      paths: ['courseData.successOrderObj'],
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value)
    })(store)
  })
}
