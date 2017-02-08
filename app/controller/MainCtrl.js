angular.module('whooStreams')
.controller('MainCtrl', function($scope, authFactory, guideboxFactory){

    $scope.logOutButton = authFactory.logOut

    guideboxFactory.loadinMovie()
    .then((res)=>{
        res
        $scope.movies = res
    })
    $scope.find = (content)=>{
        console.log("content", content);
        guideboxFactory.findMovie(content)
        .then((res)=>{
            $scope.movies = res;
        })
        $scope.content = "";
    }
    $scope.movieId = (id)=>{
        console.log("id", id);
        guideboxFactory.findMovieByID(id)
        .then((res)=>{
            console.log("res", res);
            $scope.frees = res.free_web_sources
            $scope.subs = res.subscription_web_sources
            $scope.purchases = res.purchase_web_sources

        })
    }
})
