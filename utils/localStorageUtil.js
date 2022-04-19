let localStorageAvail = false;
try {
  localStorage.setItem("test", "test");
  localStorage.removeItem("test");
  localStorageAvail = true;
} catch (e) {
  localStorageAvail = false;
}

const Util = localStorageAvail
  ? {
    institutionName: !process.server ? localStorage.getItem("institutionName") : "",
    institutionId: !process.server ? localStorage.getItem("institutionId") : "",
    storeId: !process.server ? localStorage.getItem("storeId") : "",
    userId: !process.server ? localStorage.getItem("userId") : "",
      
    }
  : {
      institutionName: "",
      institutionId: "",
      storeId:"",
      userId:""
    };

export default Util;