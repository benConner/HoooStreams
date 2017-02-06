angular.module('whooStreams')
.controller('RegisterCtrl', function($scope,$location, authFactory){
    console.log("RegisterCtrl");
    $scope.registerButton = (email, password)=>{
        authFactory.register(email, password)
        .then((res)=>{
            console.log("you new?", res);
            $location.url('/')
        })
    }

})
