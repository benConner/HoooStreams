angular.module('whooStreams')
.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('')
    $routeProvider
    .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'app/partials/main.html'
    }).when('/login',{
        controller: 'LoginCtrl',
        templateUrl: 'app/partials/login.html'
    }).when('/register',{
        controller: 'RegisterCtrl',
        templateUrl: 'app/partials/register.html'
    }).otherwise({
        redirectTo:'/'
    })
})
