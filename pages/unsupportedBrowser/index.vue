<template>
  <UnsupportedBrowser />
</template>

<script>
import UnsupportedBrowser from '~/components/UnsupportedBrowser.vue'

export default {
  name: 'unsupportedBrowser',
  layout: 'nonAuthView',
  components: {
    UnsupportedBrowser
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Unsupported Browser'
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
