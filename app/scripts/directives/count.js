define(["../app"], function(app){
	app.directive("increase", ["$timeout", function($timeout){
		return {
			replace:'false',
			scope:{},
			link:function(scope, element, attrs){
				var e = element[0];
				var countFrom, countTo, step;
				var calculate = function(){
					countFrom = parseInt(attrs.countFrom, 10) || 0;
					countTo = parseInt(attrs.countTo, 10) || 0;
					step = parseInt(attrs.step, 10) || 0;
					scope.timeoutId = null;
				}
				var tick = function(){
					scope.timeoutId = $timeout(function(){
						countFrom += step;
						if(countFrom >= countTo){
							$timeout.cancel(scope.timeoutId);
							e.textContent = countTo;
						}else{
							e.textContent = Math.round(countFrom);
							tick();
						}
					}, 1000);
				}
				var start = function(){
					if(scope.timeoutId){
						$timeout.cancel(scope.timeoutId);
					}
					calculate();
					tick();
				}
				attrs.$observe('countFrom', function (val) {
                    if (val) {
                        start();
                    }
                });
                attrs.$observe('countTo', function (val) {
                    start();
                });

                return true;
			}
		}
	}]);
});