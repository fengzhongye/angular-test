'use strict';

define(['angular', 'angular-animate', 'angular-aria', 'angular-cookies', 'angular-messages', 'angular-resource', 'angular-route', 'angular-sanitize', 'angular-touch', 'angular-bootstrap'], function(ng){
    
    var app = ng.module('myapp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.bootstrap']);

    app.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl:'views/main.html',
            controller:'MainCtrl',
            controllerAs:'main'
        }).when('/options', {
            templateUrl:'views/options.html',
            controller:'OptionsCtrl',
            controllerAs:'options'
        }).when('/timeline', {
            templateUrl:'views/timeline.html',
            controller:'TimelineCtrl',
            controllerAs:'timeline'
        }).when('/title', {
            templateUrl:'views/title.html',
            controller:'TitleCtrl',
            controllerAs:'title'
        }).when('/tools', {
            templateUrl:'views/tools.html',
            controller:'ToolsCtrl',
            controllerAs:'tools'
        }).otherwise({
            redirectTo:'/'
        });
    });

    return app;
});