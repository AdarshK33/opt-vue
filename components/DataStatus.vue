<template>
  <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 contentWrapper">
    <div v-if="!allTrue" class="CourseMaterialLoader">
      <p v-if="isError" class="bigFont">
        <b>{{ errorMessage }}</b>
      </p>
      <p v-else style="position:absolute">
        <i class="fa fa-spinner fa-spin"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['allTrue', 'isError', 'errorMessage']
}
</script>

<style></style>
