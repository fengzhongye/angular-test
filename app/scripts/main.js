"use strict";

require.config({
	paths:{
		'angular':'../bower_components/angular/angular',
	    'angular-animate':'../bower_components/angular-animate/angular-animate',
	    'angular-aria':'../bower_components/angular-aria/angular-aria',
	    'angular-cookies':'../bower_components/angular-cookies/angular-cookies',
	    'angular-messages':'../bower_components/angular-messages/angular-messages',
	    'angular-resource':'../bower_components/angular-resource/angular-resource',
	    'angular-route':'../bower_components/angular-route/angular-route',
	    'angular-sanitize':'../bower_components/angular-sanitize/angular-sanitize',
	    'angular-touch':'../bower_components/angular-touch/angular-touch',
	    'angular-bootstrap':'../bower_components/angular-bootstrap/ui-bootstrap-tpls'
	},
	shim:{
		'angular':{
			exports:'angular'
		},
		'angular-animate':{
			deps:['angular'],
			exports:'angular-animate'
		},
		'angular-aria':{
			deps:['angular'],
			exports:'angular-aria'
		},
		'angular-cookies':{
			deps:['angular'],
			exports:'angular-cookies'
		},
		'angular-messages':{
			deps:['angular'],
			exports:'angular-messages'
		},
		'angular-resource':{
			deps:['angular'],
			exports:'angular-resource'
		},
		'angular-route':{
			deps:['angular'],
			exports:'angular-route'
		},
		'angular-sanitize':{
			deps:['angular'],
			exports:'angular-sanitize'
		},
		'angular-touch':{
			deps:['angular'],
			exports:'angular-touch'
		},
		'angular-bootstrap':{
			deps:['angular'],
			exports:'angular-bootstrap'
		}
	},
	packages: [
        {
            name: 'echarts',
            location: '../bower_components/echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: '../bower_components/zrender/src', // zrender与echarts在同一级目录
            main: 'zrender'
        }
    ]
});

require(['angular', './controllers/main', './controllers/chart', './controllers/options', './controllers/timeline', './controllers/title', './controllers/tools'], function(ng){
	ng.bootstrap(document, ['myapp']);
});
