var app = angular.module('myApp', ['ngRoute', 'firebase']);

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
            controller: 'EditCntlr',
        })
        .when('/cv', {
            templateUrl: 'pages/cv.html',
            controller: 'CVCntlr',
        })
        .otherwise({ redirectTo: '/login' });
});

app.run(function ($rootScope, $location, $route) {
    $rootScope.user = null;
    $rootScope.logged = function () {
        if (localStorage.getItem('user')) {
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

app.controller('EditCntlr', function ($scope, $firebaseObject) {
    $scope.basicInfo = $firebaseObject(dbRef('/basicInfo'));
});

app.controller('CVCntlr', function ($scope, $firebaseObject) {
    $scope.basicInfo = $firebaseObject(dbRef('/basicInfo'));
});