angular.module('whooStreams')
.controller('MyMediaCtrl',function($scope, firebaseFactory, guideboxMovieFactory, guideboxShowFactory, user, $location){
    //materialize modal
    $('#modal1').modal('');

    load()

    function load(){
         firebaseFactory.loadinMyMedia(firebase.auth().currentUser.uid)
        .then((res)=>{
            $scope.media = res.data
        })
    }
    $scope.userId = firebase.auth().currentUser.uid;

    $scope.movieId = (movie, key)=>{
        guideboxMovieFactory.findMovieByID(movie.id)
        .then((res)=>{
            $scope.mediaInfo = movie;
            $scope.key = key;
            $scope.title = res.title;
            $scope.img = res.poster_240x342;
            $scope.frees = res.free_web_sources;
            $scope.subs = res.subscription_web_sources;
            $scope.srces = undefined;
            $('#modal1').modal('open')
        })
    }
    $scope.showId = (show, key)=>{
        guideboxShowFactory.findShowByID(show.id)
        .then((res)=>{
            $scope.mediaInfo = show;
            $scope.key = key;
            $scope.title = show.title;
            $scope.img = show.artwork_208x117;
            $scope.frees = undefined;
            $scope.subs = undefined;
            $scope.srces = res;
            $('#modal1').modal('open')
        })
    }

    $scope.deleteMedia = (id, content)=>{
        firebaseFactory.deleteMyMedia(id, content)
        .then((res)=>{
            load()
        })
    }
    $scope.mediaInfoPage = (mediaInfo)=>{
            $location.url(`/media/${mediaInfo.type}/${mediaInfo.title}/${mediaInfo.id}/`)
    }

})
