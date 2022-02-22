<template>
  <div class="row mainContainer mainContent">
    <h3>This is the opt IN page</h3>
  </div>
</template>

<script>
// import <import name> from 'import location'

export default {
  name: 'OptInPage',
  components: {
    //button
  },
  props: [],

  data() {
    return {
      dataHere: 'data'
    }
  },
  head() {
    return {
      title: '- Opt In'
    }
  },
  mounted() {},
  watch: {},
  methods: {}
}
</script>

<style lang="scss">
.mainContent{
 height: 400px
}</style>
