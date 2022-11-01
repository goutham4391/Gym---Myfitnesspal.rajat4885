/**
 * Global function that gets called by Captcha on success
 * @param {string} token Unique captcha token that's provided on a successful captcha pass
 */

function _captchaCB(token) {
  var form = document.querySelector('.captcha-form');
  form.submit();
}
;
