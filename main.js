(function() {
    'use strict';
    var navbar = document.querySelector('.navbar');
    var hasClassTransparent = false;

    var scrollHandle = function() {
        var scrollTop = 0;
        if (navbar) {
            hasClassTransparent = navbar.className.indexOf('transparent') > -1;
			scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollTop >= 10) {
				navbar.classList.remove('transparent');
			} else {
				if (!hasClassTransparent) {
					navbar.classList.add('transparent');
				}
			}
		}
    };

    window.onscroll = scrollHandle;
}());
