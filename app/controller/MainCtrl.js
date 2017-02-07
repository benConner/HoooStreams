angular.module('whooStreams')
.controller('MainCtrl', function($scope, authFactory, guideboxFactory){
    $scope.logOutButton = authFactory.logOut
    guideboxFactory.loadinMovie()
    .then((res)=>{
        $scope.movies = res
    })
    $scope.find = (content)=>{
        console.log("content", content);
        guideboxFactory.findMovie(content)
        .then((res)=>{
            console.log("res", res);
            $scope.movies = res;
        })
        $scope.content = "";
    }
})
