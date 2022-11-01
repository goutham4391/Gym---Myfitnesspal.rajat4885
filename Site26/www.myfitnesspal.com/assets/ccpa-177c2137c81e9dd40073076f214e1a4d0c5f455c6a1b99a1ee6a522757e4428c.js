$(document).ready(function() {
  (function (MFP) {
    var MFP = MFP || {};
    var Util = MFP.Util = {};

    Util.setCookie = function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*86400000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    return MFP;
  })(MFP)

  $('#accept_btn').click(function () {
    // setting cookie to 6 months, same as MMF.
    MFP.Util.setCookie('CCPABannerShown', 1, 182);
    $('.ccpa-banner-root').hide();
  });
  
  $('#close_btn').click(function () {
    $('.ccpa-banner-root').hide();
  });

  $('.ccpa-cookies-link').click(function() {
    // trust arc script is already loaded, so we can can directly to show user cookie options
    if (truste) {
      truste.eu.clickListener();
    } else {
      console.debug('trustarc script not loaded. unable to load consent modal.');
    }
  });
});
