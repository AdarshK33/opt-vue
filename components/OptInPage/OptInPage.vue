<template>
  <div class="row mainContainer mainContent">
    <div class="container">
      <div class="welcome_back">
        <h2>Welcome back!</h2>
      </div>
      <div class="profile_name">
        <h5>Would you like to opt in to [profile name] ?</h5>
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
        <button class="button btn_optin" type="button">OPT IN</button>
      </div>
    </div>
    <div class="container mid_menu">
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

      <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="optin_header_card">
              <h3>What your fellow students are saying about the program:</h3>
            </div>
            <div class="string_quote_img">
              <img alt="b&amp;n college" src="~/assets/images/quote.png" />
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
    </div>
    <div class="container last_menu">
      <div class="welcome_back opt_out">
        <h4>Do you want opt out?</h4>
      </div>
      <div class="profile_name opt_out means">
        <h4>
          Out out means you will be responsible for getting required course
          materials on your own before class.
        </h4>
      </div>
      <div class="optin_dropdown opt_out">
        <h5>
          Opt out for:
          <select name="Spring_out" id="spring_out" class="spring_dropdown">
            <option value="one">Spring 2022</option>
            <option value="two">Spring 2022</option>
            <option value="three">Spring 2022</option>
            <option value="four">Spring 2022</option>
          </select>
        </h5>
      </div>
      <div class="button_optin">
        <button class="button btn_optin" type="button">OPT OUT</button>
      </div>
    </div>
  </div>
</template>
<script>
//import <import name> from 'import location'

export default {
  name: 'OptInPage',
  components: {
    //button
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
  mounted() {},
  watch: {},
  methods: {},
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
  font-weight: 400;
  font-size: 20px;
  text-align: center;
}
.optin_dropdown {
  margin-top: 20px;
}

.optin_dropdown h5 {
  text-align: center;
}
// .optin_dropdown .dropdown .btn-outline-secondary {
//   font-size: 16px;
//   font-weight: 700;
//   color: #00274c;
//   border-color: white;
// }
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
  padding: 8px 90px;
  color: white;
  background-color: #00274c;
  border-radius: 7px;
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

// .content {
//     width: 100%;
//     height: 700px;
//     // position: relative;
//     border-radius: 10px;
//     transition: 1s;

//     padding: 30px;
//     background-color: #FFFFFF;
// }

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
  left: 5px;
  max-height: 300px;
  width: 250px;
  height: auto;
  margin-left: 15px;
  position: relative;
  bottom: 134px;
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
   margin-top: 25px;
}
</style>
