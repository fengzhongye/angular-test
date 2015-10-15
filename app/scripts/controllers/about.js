'use strict';

define(['../app', '../filters/page'], function(app){
	app.controller('AboutCtrl', function($scope, pagefilter){
		$scope.predicate = "";
		$scope.friends = [
			{name:'John', age:25, gender:'boy'},
			{name:'Jessie', age:30, gender:'girl'},
			{name:'Johanna', age:28, gender:'girl'},
			{name:'Joy', age:15, gender:'girl'},
			{name:'Mary', age:28, gender:'girl'},
			{name:'Peter', age:95, gender:'boy'},
			{name:'Sebastian', age:50, gender:'boy'},
			{name:'Erika', age:27, gender:'girl'},
			{name:'Patrick', age:40, gender:'boy'},
			{name:'Samantha', age:60, gender:'girl'},
			{name:'Samantha', age:60, gender:'girl'}
		];
		/*
		$scope.currentPage = 1;
		$scope.pageSize = 5;
		$scope.totalPage = Math.ceil($scope.friends.length / 5);
		if($scope.currentPage > 1 && $scope.currentPage < $scope.totalPage){
			$scope.pages = [
				$scope.currentPage - 1,
				$scope.currentPage,
				$scope.currentPage + 1
			];
		}else if($scope.currentPage == 1 && $scope.totalPage > 1){
			$scope.pages = [
				$scope.currentPage,
				$scope.currentPage + 1
			];
		}else if($scope.currentPage == $scope.totalPage && $scope.totalPage > 1){
			$scope.pages = [
				$scope.currentPage - 1,
				$scope.currentPage
			];
		}
		$scope.endPage = $scope.totalPage;

		$scope.filterFunc = function(e){
			var start = $scope.currentPage * $scope.pageSize;
			for(var i = start; i < start + 5; i++){
				return e;
			}
			//return e.name.indexOf($scope.predicate) != -1; 
			//return e.age > 25;
		};
		*/
	});
});
