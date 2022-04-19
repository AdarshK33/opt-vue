<template>
  <div class="row subHeader" v-if="Object.keys(userInf).length > 0">
    <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
      <img
        :src="tenant && tenant.urlLogo"
        height="68px"
        width="auto"
        :alt="tenant && tenant.name"
      />
    </div>
    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 welcomeText">
      <p>Welcome, {{ userInformation.firstName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userInformation: this.userInf,
      tenant: this.tenantP
    }
  },
  props: {
    userInf: {
      type: Object,
      required: false
    },
    tenantP: {
      type: Object,
      required: false
    }
  },

  watch: {
    userInfo(newVal) {
      this.userInformation = newVal
    },
    tenant(newVal) {
      this.tenant = newVal
    }
  },
  methods: {
    reDirect() {
      this.$router.go()
    }
  }
}
</script>

<style>
a {
  cursor: pointer;
}
</style>
