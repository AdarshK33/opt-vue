<template>
  <div class="row mainContainer">
    <div class="container optOutPage">
      <h1 class="contentHeader">Welcome to [Program Name]!</h1>
        <CommonCard />
       
        <ViewMaterial />
        <OptOutOption />
      
    </div>
  </div>
</template>

<script>
// import <import name> from 'import location'
import CommonCard from '~/components/CommonComponents/CommonCard'
import OptOutOption from '~/components/CommonComponents/OptOutOption'
import ViewMaterial from '~/components/CommonComponents/ViewMaterial'

export default {
  name: 'OptOutPage',
  components: {
    CommonCard,
    OptOutOption,
    ViewMaterial,
  },
  props: [],

  data() {
    return {
      dataHere: 'data',
    }
  },
  head() {
    return {
      title: '- Opt Out',
    }
  },

}
</script>

<style lang="scss">
.mainContent {
  height: 750px;
}
.contentHeader
{
  margin-left: 30px;
}
.featureList {
  padding: 0;
  margin: 0;
  margin-left: 30px;
  list-style-type: none;
  line-height: 1.8;
  font-size: 16px;
}

.optOutPage {
  min-height: 55px;
  h4 {
    font-size: 1.3em;
    word-break: break-word;
    color:#000000;
    
  }
  h5 {
    font-size: 1.0em;
  
    word-break: break-word;
    color:#000000;
   
  }
  h6 {
    font-size: 0.9em;

    word-break: break-word;
    color: #000000;
    
  }
  .mt-40 {
      margin-top:40px;
  }  

}
</style>
