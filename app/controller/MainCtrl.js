angular.module('whooStreams')
.controller('MainCtrl', function($scope, authFactory, guideboxMovieFactory,
    guideboxShowFactory){
    $('#modal1').modal('');
    $('ul.tabs').tabs();
    $scope.logOutButton = authFactory.logOut

    guideboxMovieFactory.loadinMovie()
    .then((res)=>{
        console.log("loadin res", res);
        $scope.movies = res
    })

    guideboxShowFactory.loadinShows()
    .then((res)=>{
        console.log("loadinshow res", res);
        $scope.shows = res
    })
    $scope.findMovie = (content)=>{
        console.log("content", content);
        guideboxMovieFactory.findMovie(content)
        .then((res)=>{
            $scope.movies = res;
            $scope.findShow(content)
        })
    }
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
    $scope.showId = (show)=>{
        //console.log("id", id);
        guideboxShowFactory.findShowByID(show.id)
        .then((res)=>{
            console.log("res", res);
            $scope.title = show.title;
            $scope.img = show.artwork_208x117;
            $scope.frees = res;
            $scope.subs = res;
            $scope.purchases = res;
            $('#modal1').modal('open')
        })
    }

    $scope.findShow = (content)=>{
        console.log("content", content);
        guideboxShowFactory.findShow(content)
        .then((res)=>{
            console.log(" show res", res);
            $scope.shows = res;
        })
    }

})
