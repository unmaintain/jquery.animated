> ### ⚠️ This project in not maintained! Fork for any improvements!

# jquery.animated.js

Useful helper for [`Animate.css`](https://github.com/daneden/animate.css). If you wanna use other animations, just include another stylessheet & set custom options.

## Use
- Set [`Animate.css`](https://github.com/daneden/animate.css) or part of it.

- Set jQuery & jQuery.Animated.js.
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="jquery.animated.min.js"></script>
```

- Init plugin.
```javascript
// Just init on click and use shake or some another effect
$('#animated1').animated('shake');

// Use with callback
$('#animated2').animated('shake', function () {
	alert('Thank you for shake!');
});

// Use with options
$('#animated3').animated({
	animatedClass: 'animated',
	animationClass: 'shake',
	onAnimationEnd: function () {
		alert('Thank you for shake!');
	}
});

// Also you can reset default global options before init
$.animated.options = {
	animatedClass: 'animated', // Base animation class
	animationPrefix: '',       // Prefix for `animationClass`, it's useful if you use BEM
	animationClass: 'shake',   // Animation effect class
	onAnimationEnd: null       // Callback
};

// And simply use with default or custom global options
$('#animated4').animated();

// And with callback
$('#animated5').animated(function () {
	alert('Thank you for shake!');
});
```

## License

Released under the MIT license.
