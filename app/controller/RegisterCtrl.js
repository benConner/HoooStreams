angular.module('whooStreams')
.controller('RegisterCtrl', function($scope,$location, authFactory){

    //function to create user profile
    $scope.registerButton = (email, password, username)=>{
        authFactory.register(email, password, username)
        .then((res)=>{
            $location.url('/')
        })
    }

})
