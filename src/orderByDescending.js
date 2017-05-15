(function () {
	'use strict';

	Array.prototype.orderByDescending = function (selector, comparer) {
        selector = selector || linq.Selector;
		comparer = comparer || linq.SortComparer;
		return this.orderBy(selector, function (a, b) {
			return -comparer(a, b);
		});
	};

}());
