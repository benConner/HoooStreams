angular.module('whooStreams')
.controller('RegisterCtrl', function($scope,$location, authFactory){
    console.log("RegisterCtrl");
    $scope.registerButton = (email, password, username)=>{
        authFactory.register(email, password, username)
        .then((res)=>{
            console.log("you new?", res);
            $location.url('/')
        })
    }

})
