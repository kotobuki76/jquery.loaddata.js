(function(global) {
    "use strict";
	/**
	 * $.loaddata()
	 * @author kotobuki76
	 * @param {Object} _dom
	 * @param {string} _url
	 * @param {function} _callback
	 */
	$.extend({
		loaddata: function(_dom,_url,_callback) {
		    $(_dom).load(_url, _callback);
		}
	});

})((this || 0).self || global);