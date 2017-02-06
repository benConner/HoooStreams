angular.module('whooStreams')
.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('')
    $routeProvider
    .when('/', {
        controller: 'app/controller/MainCtrl',
        templateUrl: 'app/partials/main.html'
    }).otherwise({
        redirectTo:'/'
    })
})
