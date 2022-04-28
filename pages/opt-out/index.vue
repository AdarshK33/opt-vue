<template>
  <div>
    <OptOutPage />
  </div>
</template>
<script>
import OptOutPage from '~/components/OptOutPage/OptOutpage.vue'

export default ({
   components:{
       OptOutPage
   },
   props: [],

  data() {
    return {
      dataHere: 'data'
    }
  },
  head() {
    return {
      title: '- Opt Out'
    }
  },
  mounted() {},
  watch: {},
  methods: {}

})
</script>
