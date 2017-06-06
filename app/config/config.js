angular.module('whooStreams')
.config(function($routeProvider, $locationProvider){
    //views for all available routes
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
    }).when('/media/:type/:content/:mediaId',{
        controller: 'MediaCardCtrl',
        templateUrl: 'app/partials/MediaCard.html',
        resolve:{user: function(authFactory){
            return authFactory.saveLogout()
        }}
    }).otherwise({
        redirectTo:'/'
    })
 })
