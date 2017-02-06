angular.module('whooStreams')
.controller('LoginCtrl', function($scope, $location, authFactory){
    $scope.loginButton = (email,password)=>{
        authFactory.login(email,password)
        .then((res)=>{
            console.log("you in", res);
            $location.url('/')
        })
    }
})
