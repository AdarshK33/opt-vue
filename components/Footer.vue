<template>
  <div class="footer" v-if="Object.keys(storeDetails).length > 0">
    <div class="container">
      <div class="row py-3">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <p class="storeNameHeader">{{ storeDetails.storeInfo.name }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 footerColumn">
          <h4>{{ storeDetails.storeInfo.name }}</h4>
          <p>
            {{
              storeDetails.storeInfo.storeAddress.addressLine1
                ? storeDetails.storeInfo.storeAddress.addressLine1
                : ''
            }}
            <br v-if="storeDetails.storeInfo.storeAddress.addressLine1" />
            {{
              storeDetails.storeInfo.storeAddress.addressLine2
                ? storeDetails.storeInfo.storeAddress.addressLine2
                : ''
            }}
            <br v-if="storeDetails.storeInfo.storeAddress.addressLine2" />
            {{
              storeDetails.storeInfo.storeAddress.city
                ? storeDetails.storeInfo.storeAddress.city + ','
                : ''
            }}
            {{ storeDetails.storeInfo.storeAddress.state }}
            {{ storeDetails.storeInfo.storeAddress.zipcode }}
          </p>
          <div>
            <a
              :href="
                storeDetails.footerLinks &&
                  storeDetails.footerLinks.contactMyBookstore
              "
              target="_blank"
              class="btn btn-rounded btn-outline-secondary btn-gray"
              >Contact Us &nbsp;<span class="fontSize0"
                >(opens in new window)</span
              ></a
            >
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2 footerColumn">
          <h4>STORE HOURS</h4>
          <ul>
            <li
              v-for="(val, i) in storeDetails.storeInfo.storeHours"
              :key="i"
              class="row"
            >
              <div class="col-2 p-0">{{ val.day }}:</div>
              <div v-if="val.time_from === 'CLOSED'" class="col-10">CLOSED</div>
              <div v-else class="col-10 pr-0">
                {{ val.time_from }} - {{ val.time_to }}
              </div>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2 footerColumn">
          <h4>YOUR BOOKSTORE QUICKLINKS</h4>
          <ul>
            <li>
              <a
                :href="storeDetails.footerLinks.contactMyBookstore"
                target="_blank"
                >Contact My Bookstore</a
              >
            </li>
            <li>
              <a :href="storeDetails.footerLinks.FAQ" target="_blank"
                >FAQs & Help</a
              >
            </li>
            <li>
              <a
                href="https://forms.bncollegemail.com/email/form2.htm"
                target="_blank"
                >News & Events</a
              >
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2 footerColumn">
          <h4>BNC QUICKLINKS</h4>
          <ul>
            <li>
              <a href="https://www.bncollege.com/about-us/" target="_blank"
                >About BNC</a
              >
            </li>
            <li>
              <a href="https://www.bncollege.com/careers/" target="_blank"
                >Careers at BNC</a
              >
            </li>
          </ul>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 footerColumn">
          <h4>HOMEWORK SOLUTIONS</h4>
          <ul>
            <li>
              <a href="https://www.bartleby.com/textbooks/" target="_blank"
                >Textbook Solutions</a
              >
            </li>
            <li>
              <a href="https://www.bartleby.com/" target="_blank"
                >Homework Help</a
              >
            </li>
            <li>
              <a href="https://www.bartleby.com/write/" target="_blank"
                >Writing Help</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="subFooterContainer">
        <ul>
          <li>
            <a
              href="https://www.bncollege.com/"
              target="_blank"
              manual_cm_re="VERSION1-_-FOOTERNAV-_-FooterLogo"
            >
              <img
                alt="b&amp;n college"
                src="~/assets/images/BNC_logo_footer.jpg"
                style="max-height:2em;width:78px;height:auto;"
              />
            </a>
          </li>
          <li>
            <a
              :href="
                storeDetails.footerLinks && storeDetails.footerLinks.copyright
              "
              target="_blank"
              >Copyright</a
            >
          </li>
          <li>
            <a
              :href="
                storeDetails.footerLinks &&
                  storeDetails.footerLinks.privacyAndSecurity
              "
              target="_blank"
              >Privacy & Security</a
            >
          </li>
          <li>
            <a
              :href="
                storeDetails.footerLinks &&
                  storeDetails.footerLinks.caPrivacyPolicy
              "
              target="_blank"
              >CA Privacy Policy</a
            >
          </li>
          <li>
            <a
              :href="
                storeDetails.footerLinks &&
                  storeDetails.footerLinks.accessibility
              "
              target="_blank"
              >Accessibility</a
            >
          </li>
          <li>
            <a
              :href="
                storeDetails.footerLinks && storeDetails.footerLinks.termsOfUse
              "
              target="_blank"
              >Terms of Use</a
            >
          </li>
          <li>
            <a
              :href="
                storeDetails.footerLinks && storeDetails.footerLinks.sitemap
              "
              target="_blank"
              >Sitemap</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      storeDetails: this.storeDets
    }
  },
  props: {
    storeDets: {
      type: Object,
      required: false
    }
  },
  watch: {
    storeDets(newVal) {
      this.storeDetails = newVal
    }
  }
}
</script>
