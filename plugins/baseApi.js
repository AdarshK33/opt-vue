import baseApis from '~/api/baseApis.js'

export default (ctx, inject) => {
  const baseApisWithAxios = baseApis(ctx.$axios)

  const apis = {
    baseService: baseApisWithAxios
  }

  inject('apis', apis)
}
