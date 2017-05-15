(function () {
	'use strict';

	Array.prototype.orderByDescending = function (selector, comparer) {
		comparer = comparer || linq.SortComparer;
		return this.orderBy(selector, function (a, b) {
			return -comparer(a, b);
		});
	};

}());
