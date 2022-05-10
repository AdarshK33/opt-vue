<template>
  <div class="optoutsuccess">
    <div class="success_menu">
      <h3>
        You have successfully opted out of [Program_Name] for [Term Name].
      </h3>
      <hr />
    </div>
    <div class="container success_container">
      <div class="contentSuccess">
        <div
          class="input_success"
          :style="{ display: this.displayThank == false ? 'block' : 'none' }"
        >
          <b-form-group
            label="Please tell us why you decided not to participate in the program."
            label-for="input-formatter"
            class="mb-0 input_label"
          >
            <b-form-textarea
              id="textarea"
              placeholder=""
              rows="4"
              max-rows="8"
              style="height: 100px; overflow-y: hidden; border: 1px solid black  "
            ></b-form-textarea>
          </b-form-group>
          <div class="mt-20">
            <button type="button" id="btnSubmit" @click="submitSuccessBtn()">
              Submit
            </button>
          </div>
        </div>
        <div v-if="displayThank" class="thank_you_success">
          <h5>Thank you!</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import <import name> from 'import location'

export default {
  name: 'OptOutSuccessPage',
  components: {
    // SuccessPage
  },
  props: [],

  data() {
    return {
      displayThank: false,
    }
  },
  head() {
    return {
      title: '',
    }
  },
  methods: {
    submitSuccessBtn() {
      this.displayThank = true
    },
  },
}
</script>
<style >
.input_success {
  /* display: none; */
}
.success_menu {
  margin-top: 40px;
  text-align: center;
  /* height: 750px; */
}

.success_menu h3 {
  font-family: 'ProximaNovaMedium';
  font-size: 1.5em;
  color: #000000;
  font-family: 600;
}
.optoutsuccess button {
  background-color: #00274c;
  font-style: normal;
  font-family: 'ProximaNova';
  border-radius: 4px;
  height: 35px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: 1.75em;
  padding: 5px 2em;
  font-size: 14px;
  border: none;
  font-weight: 400;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;
  width: 150px;
  text-transform: uppercase;
}

.success_menu hr {
  text-align: center;
  border: 0;
  border-bottom: 1.5px solid #666;
  margin: auto;
  width: 670px;
  margin-top: 50px;
}
.success_container {
  margin: auto;
  max-width: 570px;
  margin-bottom: 90px;
}
.container .contentSuccess {
  width: 100%;
  height: 228px;
  border-radius: 2px;
  /* -webkit-transition: 1s; */
  /* transition: 1s; */
  /* box-shadow: 0 6px 20px 0 #1b1b1b3b; */
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;

  border: 1.5px solid black;
  background-color: white;
  display: block;
  /* position: relative; */
  margin-top: 30px;
}
.form_success {
  /* height: 100px; */
  border: 1px solid #666;
  border-radius: 0;
  font-size: 14px;
  padding: 10px 10px 100px 10px;
  color: #666;
  box-shadow: none;
  font-family: 'ProximaNova';
}

.input_label label {
  font-family: 'ProximaNovaMedium';
  font-size: 1em;
  color: #000000;
}
.thank_you_success h5 {
  text-align: center;
  position: relative;
  top: 85px;
  font-family: 'ProximaNovaMedium';
}
/* .textarea_success{
  border: 1px solid black;
} */
</style>