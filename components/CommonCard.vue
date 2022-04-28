<template>
    <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="optin_header_card">
              <h3>What your fellow students are saying about the program:</h3>
            </div>
            <div class="string_quote_img">
              <img
                alt="b&amp;n college"
                src="~/assets/images/quote.png"
             
              />
            </div>
            <div class="quote_menu">
              <img
                src="~/assets/images/71statcrowd.png"
                alt="statcrowd_img"
                style="
                  max-height: 300px;
                  width: 250px;
                  height: auto;
                  margin-left: 15px;
                "
              />

              <P>
                It's very helpful that the program selects the matrerial I need
                for my classes and provides extra suggestions that might be
                helpful.Receiving my books was a simple and easy process too !"
              </P>
            
            </div>
          </div>
        </div>
     </div>
</template>

<script>  
// import <import name> from 'import location'

export default {
  name: 'CommonCard',
  components: {
    //button
  },
  props: [],

  data() {
    return {
     
    }
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

.content {
  margin-top: 30px;
  width: 100%;
  height: 227px;
  border-radius: 20px;
  -webkit-transition: 1s;
  transition: 1s;
  box-shadow: 0 6px 20px 0 #1b1b1b3b;
  padding-left: 30px;
  background-color: #ffffff;
  margin-bottom: 20px;
  display: block;
}
.mid_menu {
  margin-top: 30px;
}
.mid_menu .menu_list{
padding-left: 15px;
}
.optin_header_card h3 {
  padding-top: 20px;
  font-family: 'ProximaNova';
  font-weight: 600;
  color: dimgray;
}
.string_quote_img {
  padding-left: 27px;
  padding-top: 10px;
}
.quote_menu img {
  padding-top: 10px;
  float: right;
  left: 5px;
  max-height: 300px;
  width: 250px;
  height: auto;
  margin-left: 15px;
  position: relative;
  bottom: 128px;
}
.quote_menu p {
  text-align: justify;
  width: 760px;
  padding-left: 89px;
  position: absolute;
  top: 85px;
}
</style>