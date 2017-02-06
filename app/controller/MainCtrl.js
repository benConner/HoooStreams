angular.module('whooStreams')
.controller('MainCtrl', function($scope, authFactory){
    $scope.logOutButton = authFactory.logOut
})
