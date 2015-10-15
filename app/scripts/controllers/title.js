'use strict';

define(['../app'], function(app) {
	app.controller('TitleCtrl', function($scope) {
		$scope.options = {
			isSmall:false,
			isLarge:true,
			showMainMenu:false,
			hideMainMenu:true,
			mainRight:true,
			mainDown:false
		};
		$scope.countTo = 100;
		$scope.countFrom = 0;
		$scope.toggleLeftRight = function(){
			$scope.options.isSmall = !$scope.options.isSmall;
			$scope.options.isLarge = !$scope.options.isLarge;
		}
		$scope.toggleMainSiderbar = function(){
			$scope.options.showMainMenu = !$scope.options.showMainMenu;
			$scope.options.hideMainMenu = !$scope.options.hideMainMenu;
			$scope.options.mainRight = !$scope.options.mainRight;
			$scope.options.mainDown = !$scope.options.mainDown;
		}
	});
});