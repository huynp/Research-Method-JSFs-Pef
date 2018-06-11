/*jshint unused:false */

(function (exports) {

	'use strict';

	var STORAGE_KEY = 'todos-vuejs';

	exports.todoStorage = {
		fetch: function () {
			var todos =[]
			for(var i=0; i<1000;i++)
				todos.push({
					title: "Todo #"+i,
					completed: false
				});
			return 	todos;
		},
		save: function (todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

})(window);
