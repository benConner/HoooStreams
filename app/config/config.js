angular.module('whooStreams')
.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('')
    $routeProvider
    .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'app/partials/main.html',
        resolve: {user: function(authFactory){
            return authFactory.showHideLogout()
        }}
    }).when('/login',{
        controller: 'LoginCtrl',
        templateUrl: 'app/partials/login.html'
    }).when('/register',{
        controller: 'RegisterCtrl',
        templateUrl: 'app/partials/register.html'
    }).when('/my_media',{
        controller: 'MyMediaCtrl',
        templateUrl: 'app/partials/myMedia.html',
        resolve: {user: function(authFactory){
            return authFactory.showHideLogout()
        }}
      }).otherwise({
        redirectTo:'/'
    })
 })
