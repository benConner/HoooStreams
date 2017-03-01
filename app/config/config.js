angular.module('whooStreams')
.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('')
    $routeProvider
    .when('WhooStreams/', {
        controller: 'MainCtrl',
        templateUrl: 'app/partials/main.html',
        resolve: {user: function(authFactory){
            return authFactory.showHideLogout()
        }}
    }).when('WhooStreams/login',{
        controller: 'LoginCtrl',
        templateUrl: 'app/partials/login.html'
    }).when('WhooStreams/register',{
        controller: 'RegisterCtrl',
        templateUrl: 'app/partials/register.html'
    }).when('/my_media',{
        controller: 'MyMediaCtrl',
        templateUrl: 'app/partials/myMedia.html',
        resolve: {user: function(authFactory){
            return authFactory.showHideLogout()
        }}
    }).when('WhooStreams/media/:type/:content/:mediaId',{
        controller: 'MediaCardCtrl',
        templateUrl: 'app/partials/MediaCard.html',
        resolve:{user: function(authFactory){
            return authFactory.saveLogout()
        }}
    }).otherwise({
        redirectTo:'WhooStreams/'
    })
 })
