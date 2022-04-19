<template>
  <div class="wrapper">
    <h2>Sorry, something went wrong.</h2>
  </div>
</template>

<script>
export default {
  name: 'error',
  layout: 'nonAuthView',
  head() {
    return {
      title: 'Error'
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
}
h2 {
  font-size: 35px;
  font-weight: normal;
  color: #00274c;
  display: flex;
  justify-content: center;
  /* align-self: center;    <---- REMOVE */
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
