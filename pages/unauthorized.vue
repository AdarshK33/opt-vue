<template>
  <div class="mainContent">
    <UnauthorizedHeader />
    <div class="middleContentDiv logOutDiv">
      <div class="logOutText">
        We’re sorry, but your access could not be verified at this time. Please
        contact our Customer Care at
        <a href="mailto:aipsupport@bncservices.com"
          >aipsupport@bncservices.com</a
        >
        for assistance.
      </div>
    </div>
  </div>
</template>
<script>
import UnauthorizedHeader from '~/components/UnauthorizedHeader'
export default {
  name: 'Unauthorized',
  layout: 'nonAuthView',
  middleware: 'unauthorized',
  components: { UnauthorizedHeader }
}
</script>

<style scoped>
.mainContent {
  height: 100vh;
  background-color: #f4f3ef !important;
}

.middleContentDiv.logOutDiv {
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  padding: 30px 25px 30px 25px;
}

html,
body {
  height: 100%;
  background-color: #f4f3ef !important;
}

.logOutText {
  text-align: center;
  font-size: 20px;
  padding-bottom: 25px;
  font-weight: bold;
}
</style>
