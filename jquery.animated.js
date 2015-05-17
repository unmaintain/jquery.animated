/*! jquery.animated.js v0.4.0 | felixexter | MIT | https://github.com/felixexter/jquery.animated */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {

	'use strict';

	var animationEndEvent = [
		'webkitAnimationEnd',
		'mozAnimationEnd',
		'MSAnimationEnd',
		'oanimationend',
		'animationend'
	].join(' ');

	$.animated = {
		options: {
			animatedClass: 'animated',
			animationPrefix: '',
			animationClass: 'shake',
			onAnimationEnd: null
		}
	};

	$.fn.animated = function (prop, callback) {
		var
			$element = this,
			options = $.extend({}, $.animated.options, $.isPlainObject(prop) ? prop : typeof prop === 'string' ? {
				animationClass: prop,
				onAnimationEnd: callback
			} : $.isFunction(prop) ? {
				onAnimationEnd: prop
			} : {}),
			animatedClass = options.animatedClass + ' ' + options.animationPrefix + options.animationClass;

		if ($element.hasClass(animatedClass)) {
			return this;
		}

		return this.addClass(animatedClass).one(animationEndEvent, function (event) {
			var _this = this;

			if (_this === event.target) {
				$(_this).removeClass(animatedClass);

				if ($.isFunction(options.onAnimationEnd)) {
					$.proxy(options.onAnimationEnd, _this)();
				}
			}
		});
	};
}));
