import VuexPersistence from 'vuex-persist'
import * as Cookies from 'js-cookie'
export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'courseData', // The key to store the state on in the storage provider.
      storage: window.localStorage // or window.sessionStorage or localForage
    }).plugin(store)
  })
}
