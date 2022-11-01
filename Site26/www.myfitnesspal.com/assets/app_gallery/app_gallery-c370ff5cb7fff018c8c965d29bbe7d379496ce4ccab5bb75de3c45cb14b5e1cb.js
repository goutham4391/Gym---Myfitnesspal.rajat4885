var MFP = (function (parent, $) {

  parent.AppGallery = (function () {

    var me = {};

    me.Rotator = (function(){

      var $rotatorDiv,
          _timer,
          DELAY = 8000; //time to show each image

      var rotator = {};

      rotator.state = {};

      rotator.init = function($div) {
        $rotatorDiv = $div;

        //initialize the state classes if they don't exist
        if ($('.current-image', $rotatorDiv).length === 0) {

          $('.featured-image', $rotatorDiv).first().addClass('current-image');
        }

        if ($('.next-image', $rotatorDiv).length === 0) {
          _getNextImage($('.current-image', $rotatorDiv)).addClass('next-image');
        }

        if ($('.previous-image', $rotatorDiv).length === 0) {
          _getPrevImage($('.current-image', $rotatorDiv)).addClass('previous-image');
        }

        //init state
        rotator.state = {
          'current' : $('.current-image', $rotatorDiv),
          'next' : $('.next-image', $rotatorDiv),
          'previous' : $('.previous-image', $rotatorDiv),
        };

        _updateStateClasses();
        _eventHandlers();
      };

      rotator.showNext = function() {

        rotator.state = {
          'current': rotator.state['next'],
          'next' : _getNextImage(rotator.state['next']),
          'previous' : rotator.state['current']
        };

        _updateStateClasses();
        _resetTimer();
      };

      rotator.showPrevious = function() {

        rotator.state = {
          'current': rotator.state['previous'],
          'next' : rotator.state['current'],
          'previous' : _getPrevImage(rotator.state['previous'])
        };

        _updateStateClasses();
        _resetTimer();
      };


      //private

      var _eventHandlers = function() {

        $('.next-image').live('click', function() {
          rotator.showNext();
          return false;
        });

        $('.previous-image').live('click', function() {
          rotator.showPrevious();
          return false;
        });

        $('.current-image').live('mouseover', function() {
          _stopTimer();
        });

        $('.current-image').live('mouseout', function() {
          _startTimer();
        });

        _startTimer();
      };

      var _startTimer = function() {
        if (_timer === false || _timer === undefined) {
          _timer = setInterval(function() {
            rotator.showNext();
          }, DELAY);
        }
      };

      var _stopTimer = function() {
        clearInterval(_timer);
        _timer = false;
      };

      var _resetTimer = function() {
        _stopTimer();
        _startTimer();
      };

      var _updateStateClasses = function() {
        rotator.state['current'].addClass('current-image');
        rotator.state['next'].removeClass('current-image');
        rotator.state['previous'].removeClass('current-image');

        $('.featured-image').removeClass('next-image previous-image');

        rotator.state['next'].addClass('next-image').removeClass('current-image');
        rotator.state['previous'].addClass('previous-image').removeClass('current-image');
      };

      var _getNextImage = function($app) {

        $next = $app.next('.featured-image');

        if ($next === undefined || $next.length === 0) {
          $next = $('.featured-image', $rotatorDiv).first();
        }

        return $next;
      };

      var _getPrevImage = function($app) {

        $prev = $app.prev('.featured-image');

        if ($prev === undefined || $prev.length === 0) {
          $prev = $('.featured-image', $rotatorDiv).last();
        }

        return $prev;

      };

      return rotator;

    })();

    me.Slider = (function() {
      var slider = {};
      var $element,
          $sliding_pane,
          $currentImg;

      var _delta = 0; // the distance to move when we navigate

      slider.init = function ($el) {
        $element = $el;
        $sliding_pane = $('.app-screenshot-list', $element);
        $currentImg = $('.app-screenshot', $element).first();

        $('.previous', $element).on('click', function() {
          slider.left();
          return false;
        });

        $('.next', $element).on('click', function() {
          slider.right();
          return false;
        });

        _updateNav();

      };

      // determine the width of the current element, and update the margin to show the one to the right
      slider.right = function() {
        var $nextImg = $currentImg.next('li');
        if($nextImg.length > 0) {
          _delta -= $currentImg.outerWidth();
          $sliding_pane.css({'marginLeft': _delta});
          $currentImg = $nextImg;
        }

        _updateNav();

      };

      // determine the width of the current element, and update the margin to show the one on the left
      slider.left = function() {
        var $prevImg = $currentImg.prev('li');
        if ($prevImg.length > 0) {
          _delta += $currentImg.outerWidth();
          $sliding_pane.css({'marginLeft': _delta});
          $currentImg = $prevImg;
        }

        _updateNav();

      };

      // determine which navigation arrows should be showing
      _updateNav = function() {
        var $prevImg = $currentImg.prev('li');
        var $nextImg = $currentImg.next('li');

        if($prevImg.length === 0) {
          $('.previous').addClass('off');
        } else if ($prevImg.length > 0) {
          $('.previous').removeClass('off');
        }

        if($nextImg.length === 0) {
          $('.next').addClass('off');
        } else if ($nextImg.length > 0) {
          $('.next').removeClass('off');
        }

      };

      return slider;
    })();


    me.init = function() {
      if ($('#featured-rotator').length > 0) {
        MFP.AppGallery.Rotator.init($('#featured-rotator'));
      }

      if ($('.slider').length > 0) {
        MFP.AppGallery.Slider.init($('.slider'));
      }

      $('.apps-sidebar .search-input').on('keypress', function(evt){
        var code = evt.keyCode ? evt.keyCode : evt.which;
        if (code === 13) {
          var query = '?query=' + $(this).val();
          window.location = MFP.URL.baseUrl + 'apps' + query;
        }
      });

      $('.unlink').on("click", function(e){
        if ( confirm('Are you sure you wish to unlink your accounts?') ) {
          $(this).closest('form').submit();
        }
        e.preventDefault();
      });
    };

    return me;

  }());

  return parent;

}(MFP || {}, jQuery));

$(document).ready(function() {
  MFP.AppGallery.init();
});
