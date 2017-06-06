angular.module('whooStreams')
.controller('LoginCtrl', function($scope, $location, authFactory){
    // login to get profile info from firebase
    $scope.loginButton = (email,password)=>{
        authFactory.login(email,password)
        .then((res)=>{
            $location.url('/')
        })
    }
})
