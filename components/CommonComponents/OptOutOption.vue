<template>
  <div
    class="text-center optOutOption"
    :style="{ display: terms.length != 0 ? 'block' : 'none' }"
  >
    <h5 class="mt-40">
      Do you want to <span class="optOutSpan">opt out?</span>
    </h5>

    <h5>
      Opting out means you will be responsible for getting your required course
      materials on your own before class.
    </h5>

    <div class="form-group opt-out-option">
      <p>
        Opt out for:

        <select name="Spring" id="spring" class="spring_dropdown mt-20">
          <option
            v-for="(val, i) in terms"
            :key="i"
            :value="val.termTitle"
            v-model="selectedTerm"
            >{{ val.termTitle }}</option
          >
        </select>
      </p>
    </div>
    <div class="mt-20">
      <button id="btnOptOut" role="button" @click="submitOptOutBtn()">
        Opt Out
      </button>
    </div>
    <div class="mt-40"></div>
  </div>
</template>
<script>
// import <import name> from 'import location'
import { getCookie } from '~/cookies.js'

export default {
  name: 'OptOutOption',
  components: {
    //button
  },
  props: {},

  data() {
    return {
      reqId: '',
      terms: []
    }
  },
  beforeMount: async function() {
    var cookie = getCookie('user')
    var user = JSON.parse(cookie)
    //console.log(cookie)await
    this.reqId = user.requestId
    await this.fetchActiveTerms()
  },
  head() {
    return {
      title: ''
    }
  },
  methods: {
    submitOptOutBtn() {
      this.$router.push({
        name: 'opt-out-success'
      })
    },
    async fetchActiveTerms() {
      let params = {
        requestId: this.reqId
      }

      await this.$apis.baseService
        .getActiveTerms(params)
        .then(async res => {
          this.terms = res.data.optOutTerms
        })
        .catch(err => {
          console.log(err, 'ActiveTerms ERROR')
        })
    }
  }
}
</script>
<style scoped>
.custom-select {
  width: auto;
}
.spring_dropdown {
  font-size: 15px;
  font-weight: 700;
  color: #000000;
  padding: 10px 0 10px;
  border-color: white;
  border-bottom: 1px solid black;
  font-family: 'ProximaNovaBold';
}
.optOutOption h5 {
  font-family: 'ProximaNovaBold';
  font-size: 15px;
}
.optOutOption button {
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
  width: 220px;
  text-transform: uppercase;
}
.optOutSpan {
  font-family: 'ProximaNova';
}
</style>
