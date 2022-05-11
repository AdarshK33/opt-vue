<template>
  <div>
    <Welcome />
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import { getCookie } from '../cookies.js'

export default {
  components: {
    Welcome
  },
  head() {
    return {
      title: 'Course List'
    }
  },
  data() {
    return {}
  },
  watch: {},
  created() {
    var cookie = getCookie('user')
    if (!cookie) {
      this.$router.push('/unauthorized')
    }
  },

  async mounted() {
    if (document.documentMode) {
      this.$router.push('/unsupportedBrowser')
    }
  }
}
</script>
