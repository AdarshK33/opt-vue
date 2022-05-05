<template>
   <div class="container common_card mid_menu">
     <div class="d-flex bd-highlight">
      <div class="p-2 w-100 bd-highlight">
       <div class="menu_list">
        <h4>
          Did you know? through this program,your required course materials are
        </h4>
        <h5>
          <i class="fa fa-check"></i>
          Offered at a discounted rate (students are saving between 35-50% every
          term)
        </h5>
        <h5>
          <i class="fa fa-check"></i> Included as a flat course fee or charge as
          part of your education costs
        </h5>
        <h5>
          <i class="fa fa-check"></i> Conveninently prepared for you before the
          first day of class
        </h5>
      </div>
    </div>
    <div class="p-2 flex-shrink-1 bd-highlight opt-out-stat">
      <img
            src="~/assets/images/opt-out-stat.png"
            alt="opt-out-stat" 
            :style="{ display: $route.path === '/opt-out' ? 'block' : 'none' }"
          /> 
    </div>
  </div>
   <div class="content">
    <div class="d-flex bd-highlight">
      <div class="p-2 w-100 bd-highlight">
        <div class="optin_header_card">
          <h3>What your fellow students are saying about the program:</h3>
        </div>
        <div class="string_quote_img">
          <img alt="b&amp;n college" src="~/assets/images/quote.png" />
        </div>
        <P class="card_p">
          It's very helpful that the program selects the matrerial I need for my
          classes and provides extra suggestions that might be helpful.Receiving
          my books was a simple and easy process too !"
        </P>
      </div>
      <div class="p-2 flex-shrink-1 bd-highlight">
        <div class="quote_menu">
          <img
            src="~/assets/images/card-stat.png"
            alt="statcrowd_img"
             
          />
        </div>
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
    return {}
  },
  head() {
    return {
      title: '',
    }
  },

}
</script>
<style scoped>
.content {
  width: 100%;
  height: 228px;
  border-radius: 20px;
  -webkit-transition: 1s;
  transition: 1s;
  box-shadow: 0 6px 20px 0 #1b1b1b3b;
  padding-left: 30px;
  background-color: #ffffff;
  margin-bottom: 20px;
  display: block;
  bottom: 25px;
  position:relative;
}
.mid_menu {
  margin-top: 30px;
}
.mid_menu .menu_list {
  padding-left: 15px;
}

.menu_list h4 {
  color: black;
  font-size: 16px;
  font-weight: 600;
  font-family: 'ProximaNova';
}
.menu_list h5 {
  color: black;
  font-size: 16px;

  font-family: 'ProximaNova';
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
    left: 13px;
    max-height: 300px;
    width: 249px;
    height: auto;
    margin-left: 15px;
    position: relative;
    bottom: 18px;
    border-top-right-radius: 29px;
    border-bottom-right-radius: 20px;
}
.quote_menu p {
  text-align: justify;
  width: 760px;
  padding-left: 89px;
  position: relative;
  bottom: 28px;
}
.mid-menu-img
{
    position: relative;
    bottom: 77px;

}
.string_quote_img {
  padding-left: 27px;
  padding-top: 10px;
}
.card_p{
     position: relative;
    max-width: 650px;
    bottom: 28px;
    left: 108px;
    left: 85px;

}
.opt-out-stat img
{
      /* padding-top: 10px; */
    /* float: left; */
    /* left: 13px; */
    max-height: 300px;
    width: 157px;
    height: auto;
    /* margin-left: -121px; */
    position: relative;
    bottom: 38px;
    margin-right: 41px;
}
</style>