'use strict';

define(['../app'], function(app) {
	app.controller('ChartCtrl', function($scope) {
		$scope.options = {
			isSmall:false,
			isLarge:true,
			showMainMenu:false,
			hideMainMenu:true,
			mainRight:true,
			mainDown:false
		};
	});
});