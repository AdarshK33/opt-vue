<template>
  <div>
    <h6 class="mt-40">Do you want to opt out?</h6>

    <h6>
      Opting out means you will be responsible for getting your required course
      materials on your own before class.
    </h6>

    <div class="form-group">
      <p>
        Opt out for:

        <select
          class="custom-select custom-select-medium termSelectionDropDown"
          id="terms"
          v-model="selectedTerm"
          @change="changeSelectedTermModal()"
        >
          <option>Spring 2021</option>
        </select>
      </p>
    </div>

    <button id="btnLogin" role="button">Opt Out</button>
    <div class="mt-40"></div>
  </div>
</template>
<script>
// import <import name> from 'import location'

export default {
  name: 'OptOutOption',
  components: {
    //button
  },
  props: [],

  data() {
    return {}
  },
  head() {
    return {
      title: '',
    }
  },
  mounted() {},
  watch: {},
  methods: {},
}
</script>
<style scoped>
.custom-select {
  width: auto;
}
</style>