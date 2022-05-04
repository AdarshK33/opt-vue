<template>
  <div class="vieMaterial  mt-30">
    <div class="view_menu">
    <h3>
      Ready to view your courses and included materials?
    </h3>
    <h5>
      Participating in the program means you'll have affordable course materials
      before the first day of class.
    </h5>
    <div class="mt-20">
      <button type="button" id="btnViewMaterial">View Materials</button>
    </div>
    </div>
  </div>
</template>
<script>
// import <import name> from 'import location'

export default {
  name: 'ViewMaterial',
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
<style >
.view_menu{
  text-align: center;
}
.view_menu h5 {
  font-family: 'ProximaNovaMedium';
  font-weight: 600;
}
.view_menu h3 {
  font-family: 'ProximaNovabold';
 font-size: 1.4em;
 color:#000000
}
.vieMaterial button {
    background-color: #00274c;
    font-style: normal;
    font-family:  'ProximaNova';
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
    width:220px;
    text-transform: uppercase;
  }

</style>