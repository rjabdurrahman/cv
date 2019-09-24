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
        .when('/edit_info', {
            templateUrl: 'pages/edit_info.html',
            controller: 'RegCntlr',
        })
        .when('/cv', {
            templateUrl: 'pages/cv.html',
            controller: 'RegCntlr',
        })
        .otherwise({ redirectTo: '/login' });
});

app.run(function ($rootScope, $location, $route) {
    $rootScope.user = null;
    $rootScope.logged = function () {
        if (localStorage.getItem('user')){
            $rootScope.user = lsGet('user').email;
            return true;
        }
        else return false;
    }
});
app.controller('LoginCntlr', function () {
    console.log('Hello');
});

app.controller('RegCntlr', function () {
    console.log('Hello');
});