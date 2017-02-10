angular.module('whooStreams')
.controller('MyMediaCtrl',function($scope, firebaseFactory){
    firebaseFactory.loadinMyMedia()
    .then((res)=>{
        console.log("res from MyMediaCtrl", res);
    })
})
