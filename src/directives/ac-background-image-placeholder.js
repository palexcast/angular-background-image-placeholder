(function () {
  /* global angular, document, Image, requestAnimationFrame */

  'use strict';
  angular
    .module('ac-background-image.directives')
    .directive('acBackgroundImage', acBackgroundImage);

  function acBackgroundImage() {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, element, attrs) {
      var backgroundDiv = createSubDiv();
      var placeholderDiv = createSubDiv();
      backgroundDiv.className = 'ac-bg-img__full-size';
      placeholderDiv.className = 'ac-bg-img__placeholder';
      placeholderDiv.style.opacity = 1;
      placeholderDiv.style.zIndex = 1;
      element[0].style.position = 'relative';
      element[0].appendChild(backgroundDiv);
      element[0].appendChild(placeholderDiv);

      attrs.$observe('placeholder', function () {
        placeholderDiv.style.backgroundImage = 'url(' + attrs.placeholder + ')';
      });
      attrs.$observe('backgroundImage', backgroundChange);

      function createSubDiv() {
        var div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = 0;
        div.style.top = 0;
        div.style.bottom = 0;
        div.style.right = 0;
        div.style.height = '100%';
        return div;
      }

      function backgroundChange() {
        placeholderDiv.style.opacity = 1;
        var image = new Image();
        image.addEventListener('load', function () {
          backgroundDiv.style.backgroundImage = 'url(' + this.src + ')';
          fadeOut(placeholderDiv);
        });
        image.src = attrs.backgroundImage;
      }

      function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
          if ((el.style.opacity -= 0.1) <= 0) {
            el.style.display = 'none';
          } else {
            requestAnimationFrame(fade);
          }
        })();
      }
    }
  }
})();