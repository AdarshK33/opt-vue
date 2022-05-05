<template>
  <div class="row mainContainer mainContent">
    <div class="container">
      <div class="welcome_back">
        <h2>Welcome back!</h2>
      </div>
      <div class="profile_name">
        <h5>Would you like to opt in to [profile name]?</h5>
      </div>
      <div class="optin_dropdown">
        <h5>
          I'd like to opt in for my
          <select name="Spring" id="spring" class="spring_dropdown">
            <option value="one">Spring 2022</option>
            <option value="two">Spring 2022</option>
            <option value="three">Spring 2022</option>
            <option value="four">Spring 2022</option>
          </select>
          course material
        </h5>
      </div>
      <div class="button_optin">
        <button class="button btn_optin" type="button" id="btnOptIn">OPT IN</button>
      </div>
    </div>
 <!-- common card -->
   <CommonCard />
    <!-- common opt out -->
    <div class="container last_menu">
     <OptOutOption />
    </div>
  </div>
</template>
<script>
import OptOutOption from '../CommonComponents/OptOutOption.vue'
import CommonCard from '../CommonComponents/CommonCard.vue'

//import <import name> from 'import location'

export default {
  name: 'OptInPage',
  components: {
    OptOutOption,
    CommonCard
  },
  props: [],

  data() {
    return {
      dataHere: 'data',
    }
  },
  head() {
    return {
      title: '- Opt In',
    }
  },
  
}
</script>

<style lang="scss">
// .mainContent {
//   height: auto;
// }

.welcome_back h2 {
  text-align: center;
  color: #d14f00;
  font-family: 'ProximaNova';
  font-weight: 500;
  font-size: 40px;
}

.welcome_back {
  max-width: 280px;
  margin: auto;
  margin-top: 20px;
}
.profile_name h5 {
  max-width: 380px;
  margin: auto;
  color: #d14f00;
  font-family: 'ProximaNovaMedium';
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
.optin_dropdown {
  margin-top: 20px;
}
.optin_dropdown h5 {
  text-align: center;
}
.spring_dropdown {
  font-size: 16px;
  font-weight: 700;
  color: #00274c;
  border-color: white;
  border-bottom: 1px solid black;
  font-family: 'ProximaNovaBold';
}
.button_optin {
  max-width: 260px;
  margin: auto;
  margin-top: 20px;
  text-align: center;
}
.btn_optin {
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
  font-family: 'ProximaNovaMedium';
}
.menu_list h5 {
  color: black;
  font-size: 16px;

  font-family: 'ProximaNova';
}

.content {
  margin-top: 30px;
  width: 100%;
  height: 217px;
  border-radius: 20px;
  -webkit-transition: 1s;
  transition: 1s;
  box-shadow: 0 6px 20px 0 #1b1b1b3b;
  padding-left: 30px;
  background-color: #ffffff;
  // height: auto;
  margin-bottom: 20px;
  display: block;
}
.optin_header_card h3 {
  padding-top: 20px;
  font-family: 'ProximaNova';
  font-weight: 600;
  color: dimgray;
}
.quote_menu img {
  padding-top: 10px;
    float: right;
    left: 8px;
    max-height: 300px;
    width: 238px;
    height: auto;
    margin-left: 15px;
    position: relative;
    bottom: 19px;
    border-top-right-radius: 29px;
    border-bottom-right-radius: 20px;
}
.quote_menu p {
  text-align: justify;
  width: 760px;
  padding-left: 89px;
  position: absolute;
  top: 88px;
}
.opt_out h4 {
  color: #000000;
  font-family: 'ProximaNovaBold';
  text-align: center;
  font-size: 16px;
}
.card_p{
     position: relative;
    max-width: 650px;
    bottom: 28px;
    left: 108px;
    left: 85px;

}
.means h4 {
  font-size: 16px;
  text-align: center;
  font-family: 'ProximaNovaBold';
}
.string_quote_img {
  padding-left: 27px;
  padding-top: 10px;
}
.last_menu .button_optin {
  margin-bottom: 20px;
 
}
.last_menu{
  
  margin-bottom: 30px;

}


   

</style>
