$(function() {

  var _trackLogin = function(source) {
    MFP.Stats.track_gtm({
      event: 'log_in_link_click',
      attrs: {
        source: source
      }
    });

    return true;
  }

  // HTML-2824
  $('.fancylink[href="#fancy_login"]:not(.premium-nav-link)').click(function(e) {
    var source = $(e.target).data('ssoSource');
    _trackLogin(source)
  });

  $('.loginlink:not(.premium-nav-link)').click(function(e) {
    var source = $(e.target).data('ssoSource');
    _trackLogin(source)
  });

  $('#fancy_login').submit(function() {
    MFP.Stats.track_gtm({
      event: 'log_in_modal_screen_click',
      attrs: {
        button: 'email'
      }
    });
  });

  $('#facebook-login-css, .facebook-login-css').click(function() {
    MFP.Stats.track_gtm({
      event: 'log_in_modal_screen_click',
      attrs: {
        button: 'facebook'
      }
    });
  });

  $('.forgot-password-link').click(function(e) {
    var LOCATIONS = {
      '/': 'login',
      '/account/login': 'login',
      '/account/logout': 'login',
      '/account/create': 'signup'
    };
    var VALID_PATHNAMES = Object.keys(LOCATIONS);
    var isSsoElement = VALID_PATHNAMES.indexOf(window.location.pathname) > -1;
    var location;

    if(isSsoElement){
      location = LOCATIONS[window.location.pathname];

      MFP.Stats.track_gtm({
        event: 'forgot_password_link_click',
        attrs: {
          location: location
        }
      });
    }
  });

}());
