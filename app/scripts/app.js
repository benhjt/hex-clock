(function () {
	'use strict';

	registerServiceWorker();
	displayTime();
}());

function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('sw.js').then(function (registration) {
			// Registration was successful
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}).catch(function (err) {
			// registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		});
	}
}

/**
 * Displays the time on screen and changes the background color
 */
function displayTime() {
	'use strict';

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	h = getNumberString(h);
	m = getNumberString(m);
	s = getNumberString(s);

	var colorString = "#" + h + m + s;

	document.body.style.background = colorString;
	document.querySelector("#hex-time").innerHTML = colorString;
	setTimeout(displayTime, 1000);
}

/**
 * Adds '0' prefix to a number if it is less than 10
 * @param  {Number} num the number to check
 * @return {String}     the number if greater than 10, or the nubmer prefixed
 * with a '0' if less than 10.
 */
function getNumberString(num) {
	'use strict';

	if (num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
