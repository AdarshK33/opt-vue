<template>
  <div>
    <Welcome />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import JWT from 'jsonwebtoken'
import { getCookie } from '../cookies.js'

export default {
  components: {
    Welcome,
  },
  head() {
    return {
      title: 'Course List',
    }
  },
  data() {
    return {}
  },
  watch: {},
  created() {
    let emailId = ''
    var cookie = getCookie('user')
    if (!cookie) {
      this.$router.push('/unauthorized')
    }
  },

  mounted() {
    window.onbeforeunload = function () {
      return true
    }
    if (document.documentMode) {
      this.$router.push('/unsupportedBrowser')
    }
  },
  beforeDestroy() {
    window.onbeforeunload = null
  },

  methods: {},
  computed: {},
}
</script>
