<template>
  <!-- <div class="header"> -->
  <header>
    <div class="nav navbar logoutPage">
      <div class="logo">
        <img
          src="~/assets/images/BNED_gray.png"
          style="margin-top: 2px;"
          alt="BNC FDC logo"
        />
      </div>
    </div>
  </header>
  <!-- </div> -->
</template>
<script>
import $ from 'jquery'
export default {
  name: 'UnauthorizedHeader',
  mounted() {
    $('.logo img').focus()
  }
}
</script>

<style scoped>
header {
  height: 66px;
  display: block;
  -webkit-box-shadow: 0 8px 6px -9px #4a7280;
  -moz-box-shadow: 0 8px 6px -9px #4a7280;
  box-shadow: 0 8px 6px -9px #4a7280;
  background-color: white;
}

.nav.navbar {
  padding: 0;
}

.nav.navbar.logoutPage {
  background: #4c5053;
  height: 100%;
}

.logo {
  position: relative;
  padding: 7px 0.7rem 0px 0.7rem;
  height: 59px;
}
</style>
