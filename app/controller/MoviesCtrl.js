angular.module('whooStreams')
.controller('MoviesCtrl', function($scope){
    $scope.movieId = (id)=>{
        console.log("id", id);
        guideboxMovieFactory.findMovieByID(id)
        .then((res)=>{
            console.log("res", res);
            $scope.title = res.title;
            $scope.img = res.poster_240x342;
            $scope.frees = res.free_web_sources;
            $scope.subs = res.subscription_web_sources;
            $scope.purchases = res.purchase_web_sources;
            $('#modal1').modal('open')
        })
    }
})
