(function () {
  /* global angular, Image */

  'use strict';
  angular
    .module('ac-background-image-placeholder.directives')
    .directive('acBackgroundImagePlaceholder', acBackgroundImagePlaceholder);

	 /**
     * Temporary sets the element's `ac-background-image-placeholder` attribute's value as the element's CSS background-image
	 * while waiting for element's CSS background-image to load.
     * 
     * Usage: 
     *    <element style="background-image: url(./cats.jpg);"
	 *     ac-background-image-placeholder="data:image/png;base64,..."></element>
     * 
     * Temporary Result:
     *    <element style="background-image: url(data:image/png;base64,...);"
	 *     ac-background-image-placeholder="data:image/png;base64,..."></element>
	 * 
     * End Result:
     *    <element style="background-image: url(./cats.jpg);"
	 *     ac-background-image-placeholder="data:image/png;base64,..."></element>
     */
  function acBackgroundImagePlaceholder() {
    return {
      restrict: 'A',
      scope: {
        acBackgroundImagePlaceholder: '@'
      },
      link: link
    };

    function link(scope, element, attrs) {
      scope.$watch(function () {
        return element[0].style.backgroundImage;
      }, function () {
        var backgroundUrl = element[0].style.backgroundImage.slice(4, -1).replace(/"/g, '');
        element[0].style.backgroundImage = 'url("' + attrs.acBackgroundImagePlaceholder + '")';

        var image = new Image();
        image.onload = function () {
          element.css({
            background: 'url(' + this.src + ')'
          });
        };

        image.src = backgroundUrl;
      });
    }
  }
})();