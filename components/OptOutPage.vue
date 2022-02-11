<template>
  <div class="row mainContainer mainContent" style>
    <h3>This is the opt OUT page</h3>
  </div>
</template>

<script>
// import <import name> from 'import location'

export default {
  name: 'OptOutPage',
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
      title: 'Opt Out'
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
}

</style>
