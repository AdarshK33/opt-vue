<template>
  <div class="showLoader">
    <div class="loader" style="display:block!important"></div>
  </div>

</template>
<script>
export default {
  name: 'Loader'
}
</script>
<style scoped>
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


.showLoader {
  display: flex;
  justify-content: center;
  margin-top: 22%;
}
.loader {
  border: 8px solid #fff;
  border-radius: 50%;
  border-top: 8px solid #3c799a;
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  z-index: 99999999;
}
</style>
