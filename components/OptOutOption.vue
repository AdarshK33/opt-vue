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

        <select name="Spring" id="spring" class="spring_dropdown">
            <option value="one"> <u>Spring 2022 </u></option>
            <option value="two"> <u>Spring 2022 </u></option>
            <option value="three"> <u>Spring 2022 </u></option>
            <option value="four"> <u>Spring 2022 </u></option>
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
.spring_dropdown {
  font-size: 16px;
  font-weight: 700;
  color: #00274c;
  border-color: white;
  border-bottom: 1px solid black;
  font-family: 'ProximaNovaBold';
}
</style>