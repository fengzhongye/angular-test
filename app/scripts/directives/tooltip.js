'use strict';

define(['../app'], function(app) {
	app.directive('tooltip', function() {
		return {
			restrict:'AE',
			//templateUrl:'../views/tooltip.html',
			scope:{},
			transclue:true,
			link:function(scope, element, attrs){
				element.bind('mouseover', function(){
					element.tooltip();
				});
			}
		}
	});
});