# angular-background-image-placeholder
Small directive (1,05 KB) for setting a background-image and a placeholder which shows while background-image is loaded.
When background-image is finished loading, the placeholder fades with a smooth opacity fade.

## Installation
Fetch from [npm](https://www.npmjs.com/package/angular-background-image-placeholder).
``` 
$ npm install angular-background-image-placeholder
``` 

Add to your HTML (or build script or whatever). Remember to load it after angular itself.
```html
<script type="text/javascript" src="./node_modules/angular/angular.min.js"></script>
<script type="text/javascript" src="./node_modules/angular-background-image-placeholder/angular-background-image-placeholder.min.js"></script>
```

Add to your app's dependency array
```javascript
angular
  .module('my-module', [
    'ac-background-image'
  ]);
```

## Example use
```html
<element ac-background-image background-image="./cats.jpg" placeholder="data:image/png;base64,iVBORw0..."></element>
```

### Result
```html
<element ac-background-image background-image="./cats.jpg" placeholder="data:image/png;base64,..." style="position:relative;">
    <div class="ac-bg-img__full-size" style="background-image:url(./cats.jpg);position:absolute;left:0;top:0;bottom:0;right:0;"></div>
    <div class="ac-bg-img__placeholder" style="background-image:url(data:image/png;base64,...);position:absolute;left:0;top:0;bottom:0;right:0;opacity:0"></div>
</element>
```

##Tip
Use a small image as a placeholder to maximize the effect. In the example above a base64 image is loaded removing the need for an url-request.
It is recommended that the placeholder is a downscaled(1% or lower) version of the full-size image to be loaded.

## Build
To build the app, run `npm run build`.

## License

MIT  
Copyright 2016 Alexander Castillo