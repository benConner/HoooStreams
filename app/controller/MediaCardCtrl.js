angular.module('whooStreams')
.controller('MediaCardCtrl', function($scope, $routeParams, $sce, guideboxMovieFactory, guideboxShowFactory, firebaseFactory, user, $location){
    $scope.uid = user;
    $scope.type = $routeParams.type
    movieId = (id)=>{
        guideboxMovieFactory.findMovieByID(id)
        .then((res)=>{
            res.type = "movies"
            $scope.media = res;
            $scope.title = res.title;
            $scope.overview = res.overview;
            $scope.img = res.poster_240x342;
            $scope.frees = res.free_web_sources;
            $scope.subs = res.subscription_web_sources;
            $scope.purchases = res.purchase_web_sources;
        })
    }
    showId = (id, content)=>{
        guideboxShowFactory.findShow(content)
        .then((show)=>{
            for (var i = 0; i < show.length; i++) {
                if(show[i].id == id){
                    show[i].type = "shows"
                    tv = show[i]
                    $scope.media = show[i]
                }
            }
            guideboxShowFactory.findShowByID(id)
            .then((res)=>{
                $scope.title = tv.title;
                $scope.img = tv.artwork_304x171;
                $scope.srces = res;

            })
        })
    }

    //saves media to users firebase
    $scope.addMedia = (media)=>{
        uid = firebase.auth().currentUser.uid;
        firebaseFactory.saveToMyMedia(uid, media)
    }

    if($routeParams.type === 'movies'){
        movieId($routeParams.mediaId)
        guideboxMovieFactory.mediaVideos($routeParams.type, $routeParams.mediaId, 'videos')
        .then((res)=>{
            $scope.vidsArray = res;
        })
    }else{
        showId($routeParams.mediaId, $routeParams.content)
        guideboxShowFactory.findShowEpisode($routeParams.mediaId)
        .then((res)=>{
            $scope.vidsArray = res;

        })
    }
    $scope.goBack = ()=>{
        $location.url(`/${routeParams.search}`)
    }

})
.filter('trusted', function ($sce) {
        return (url)=>{
            return $sce.trustAsResourceUrl(url);
        };
    });
