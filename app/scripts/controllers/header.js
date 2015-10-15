'use strict';

define(['../app'], function(app) {
	app.controller('HeaderCtrl', function($scope, $window) {
		$scope.charts = [
			{name:'柱状图', type:'bar'},
			{name:'折线图', type:'line'},
			{name:'饼图', type:'pie'},
			{name:'散点图', type:'scatter'},
			{name:'k线图', type:'k'}
	    ];
	    $scope.defaultChart = $scope.charts[0];
	    $scope.isRealTime = true;
	    $scope.$watch("isRealTime", function(){
	    	if($scope.isRealTime){
	    		//$window.alert("开启实时预览！");
	    	}else{
	    		//$window.alert("关闭实时预览！");
	    	}
	    });
	    /*
	    $scope.$watch("charts", function(){
	    	if($scope.isRealTime){
	    		//$window.alert("开启实时预览！");
	    	}else{
	    		//$window.alert("关闭实时预览！");
	    	}
	    });
*/
	});
});