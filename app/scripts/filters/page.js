'use strict';

define(['../app'], function(app){
	app.filter('page', function(){
		return function(input, start){
			start = parseInt(start, 10);
			return input.slice(start);
		}
	});
});