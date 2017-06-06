angular.module('whooStreams')
.controller('MediaCardCtrl', function($scope, $routeParams, $sce, guideboxMovieFactory, guideboxShowFactory, firebaseFactory, user, $location){
    $scope.uid = user;
    $scope.type = $routeParams.type
    //movie info break down and add type if saved into profile media
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
    //show info break down and add type if saved into profile media
    showId = (id, content)=>{
        guideboxShowFactory.findShow(content)
        .then((show)=>{
            //loop through show episodes by show id
            for (var i = 0; i < show.length; i++) {
                if(show[i].id == id){
                    show[i].type = "shows"
                    tv = show[i]
                    $scope.media = show[i]
                }
            }
            //find find show by id
            guideboxShowFactory.findShowByID(id)
            .then((res)=>{
                $scope.title = tv.title;
                $scope.img = tv.artwork_304x171;
                $scope.srces = res;

            })
        })
    }

    //saves media to users profile in firebase
    $scope.addMedia = (media)=>{
        uid = firebase.auth().currentUser.uid;
        firebaseFactory.saveToMyMedia(uid, media)
    }

    //checks type of media to call the right movie/show factory by id
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
    //function to return to landing page and return what was searched for 
    $scope.goBack = ()=>{
        $location.url(`/${routeParams.search}`)
    }

})
.filter('trusted', function ($sce) {
        return (url)=>{
            return $sce.trustAsResourceUrl(url);
        };
    });
