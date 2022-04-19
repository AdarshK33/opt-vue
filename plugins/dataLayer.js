import { getCookie } from '@/cookies.js'
import LocalStorageUtil from '~/utils/localStorageUtil.js'
import routeConfig from '@/routeConfig'
const cookieparser = process.server ? require('cookieparser') : undefined

export default ({ app }, context) => {
  let cookie = !process.server
    ? getCookie('user', context)
    : context &&
      context.req &&
      context.req.headers &&
      context.req.headers.cookie
    ? cookieparser.parse(context.req.headers.cookie)
    : ''
  cookie = !process.server ? cookie : cookie.user

  function setDigitalData(to) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (to) {
          window.digitalData.pageName = routeConfig[to.name]
            ? routeConfig[to.name].pageName
            : 'Course List'
          window.digitalData.SiteSection = routeConfig[to.name]
            ? routeConfig[to.name].siteSection
            : 'Student FDC'
        } else {
          if (Object.keys(routeConfig).length > 0) {
            Object.keys(routeConfig).forEach((val, index) => {
              const documentTitle = document.title.toLowerCase()
              const routeConfigPageName = routeConfig[
                val
              ].pageName.toLowerCase()
              if (documentTitle.includes(routeConfigPageName)) {
                window.digitalData.pageName = routeConfig[val].pageName
                window.digitalData.SiteSection = routeConfig[val].siteSection
              }
            })
          } else {
            window.digitalData.pageName = document.title
            window.digitalData.SiteSection = 'Misc'
          }
        }
        if (cookie) {
          var user = JSON.parse(cookie)
          window.digitalData.InstitutionName = LocalStorageUtil.institutionName
          window.digitalData.InstitutionID = user.tenantId
          window.digitalData.UserId = user.userId
          // window.digitalData.storeId = LocalStorageUtil.storeId;
        } else {
          window.digitalData.InstitutionName = ''
          window.digitalData.InstitutionID = ''
          window.digitalData.UserId = ''
          // window.digitalData.storeId = "";
        }
        // console.log('adobe digital data', window.digitalData)
        resolve('done')
      }, 500)
    })
  }

  async function waitforSetDigitalData(to) {
    var x = await setDigitalData(to)
  }

  const adobeTrackScript = () => {
    // console.log("script tag added");
    const adobeScr =
      process.env.DEPLOY_ENV === 'prod-aip-fdc'
        ? '//assets.adobedtm.com/93282bfbabf3/a276db06a974/launch-73a95430aee5.min.js'
        : '//assets.adobedtm.com/93282bfbabf3/a276db06a974/launch-3382f77bf374-staging.min.js'
    const adobeScriptTag = document.createElement('script')
    adobeScriptTag.src = adobeScr
    document.head.appendChild(adobeScriptTag)
  }

  const fireViewStartCustomEvent = () => {
    // console.log("fireViewStartCustomEvent started");
    var event = new CustomEvent('event-view-start', {
      detail: window.digitalData
    })
    var obj = document.dispatchEvent(event)
  }

  if (cookie) {
    window.digitalData = {}
    waitforSetDigitalData().then(() => {
      // console.log("wait for digital data");
      adobeTrackScript()
      fireViewStartCustomEvent()
    })

    var obj = document.querySelector('body')
    obj.addEventListener('event-view-end', e => {})
    const fireViewEndCustomEvent = () => {
      var event = new CustomEvent('event-view-end', {
        detail: window.digitalData
      })
      obj.dispatchEvent(event)
    }

    app.router.afterEach((to, from) => {
      waitforSetDigitalData(to).then(() => {
        try {
          fireViewEndCustomEvent()
          if (window && window.s && window.s.t) {
            window.s.t()
          }
        } catch (e) {}
      })
    })
  } else {
    window.digitalData = {}
    waitforSetDigitalData().then(() => {
      adobeTrackScript()
      fireViewStartCustomEvent()
    })
  }
}

/* IE11 Polyfill*/
;(function() {
  if (typeof window.CustomEvent === 'function') return false

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null }
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }

  window.CustomEvent = CustomEvent
})()
