var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LoginCntlr',
        })
        .when('/signup', {
            templateUrl: 'pages/signup.html',
            controller: 'RegCntlr',
        })
        .otherwise({ redirectTo: '/login' });
});


app.controller('LoginCntlr', function () {
    console.log('Hello');
});

app.controller('RegCntlr', function () {
    console.log('Hello');
});