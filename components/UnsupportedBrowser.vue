<template>
  <div class="unsupportedBrowser">
    <img
      src="~/assets/images/BNC_logo.png"
      alt="Barnes &amp; Noble COLLAGE"
      class="browserIconBNC"
    /><br />
    <img
      src="~/assets/images/icon-browser.png"
      alt="Browser"
      class="browserIcon"
    />
    <h1>
      Microsoft no longer supports Internet Explorer.<br />
      For the best experience, use one of these supported browsers:
    </h1>

    <div class="browserList">
      <div class="browserListItems">
        <a href="https://www.google.com/chrome/" id="lnkChrome" target="_blank">
          <img src="~/assets/images/icon-chrome.png" alt="Chrome Browser" />
          <h2>Google Chrome</h2>
        </a>
      </div>
      <div class="browserListItems">
        <a
          href="https://www.mozilla.org/en-US/firefox/new/"
          id="lnkFirefox"
          target="_blank"
        >
          <img
            src="~/assets/images/icon-firefox.png"
            alt="Mozilla Firefox Browser"
          />
          <h2>Mozilla Firefox</h2>
        </a>
      </div>
      <div class="browserListItems">
        <a
          href="https://support.apple.com/downloads/safari"
          id="lnkSafari"
          target="_blank"
        >
          <img
            src="~/assets/images/icon-safari.png"
            alt="Apple Safari Browser"
          />
          <h2>Apple Safari</h2>
        </a>
      </div>
      <div class="browserListItems">
        <a
          href="https://www.microsoft.com/en-us/edge"
          id="lnkEdge"
          target="_blank"
        >
          <img
            src="~/assets/images/icon-edge.png"
            alt="Microsoft Edge Browser"
          />
          <h2>Microsoft Edge</h2>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.unsupportedBrowser {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 150px;
  // text-align:center;
  a {
    text-decoration: none;
    display: inline-block;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0 30px;
    color: #3b3b3b;
    line-height: 24px;
  }
  .browserList {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    flex-wrap: wrap;
    .browserListItems {
      margin: 0 30px 10px;
    }
    h2 {
      font-size: 13px;
      font-weight: 600;
      margin: 20px 0;
    }
  }
  .mostRecent {
    opacity: 0.6;
    font-size: 13px;
    font-weight: 600;
    margin: 20px 0;
  }
  .browserIconBNC {
    margin: 0 30px 80px 0px;
  }
}

@media only screen and (max-width: 600px) {
  .unsupportedBrowser {
    flex-direction: row;
    padding: 15px;
  }
}
</style>
