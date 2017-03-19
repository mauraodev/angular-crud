angular.module('angular-crud', ['ngRoute', 'commentService'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            //templateUrl: 'partials/principal.html',
            controller: 'IndexController'
        });

    });