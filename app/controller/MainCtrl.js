angular.module('whooStreams')
.controller('MainCtrl', function($scope, $location, authFactory, guideboxMovieFactory, guideboxShowFactory, firebaseFactory, user){
    //materialize tabs
    $('ul.tabs').tabs();


    //log out button
    $scope.logOutButton= ()=>{
        authFactory.logOut()
        $scope.logOut = false;
        $scope.loggedin = true;
    }

    //checks for current user and shows different buttons if logged in
    if(!user){
        $scope.logOut = false;
        $scope.loggedin = true;
    }else if(user){
        $scope.logOut = true;
        $scope.loggedin = false;
        $scope.userId = user.uid
    }

    guideboxMovieFactory.loadinMovie()
    .then((res)=>{
        $scope.movies = res
    })

    guideboxShowFactory.loadinShows()
    .then((res)=>{
        $scope.shows = res
    })

    //finds movies from title search and the does the same for shows
    $scope.findMovie = (content)=>{
        console.log("content", content);
        guideboxMovieFactory.findMovie(content)
        .then((res)=>{
            $scope.movies = res;
            $scope.findShow(content)
        })
    }
    //grabs movie id and gets streaming info
    $scope.movieId = (id)=>{
        console.log("id", id);
        guideboxMovieFactory.findMovieByID(id)
        .then((res)=>{
            $scope.media = res;
            $scope.title = res.title;
            $scope.img = res.poster_240x342;
            $scope.frees = res.free_web_sources;
            $scope.subs = res.subscription_web_sources;
            $scope.purchases = res.purchase_web_sources;
            $('#modal1').modal('open')
        })
    }
    //grabs show id and gets streaming info
    $scope.showId = (show)=>{
        guideboxShowFactory.findShowByID(show.id)
        .then((res)=>{
            show.type = "show";
            console.log("show", show);
            $scope.media = show;
            $scope.title = show.title;
            $scope.img = show.artwork_208x117;
            $scope.frees = res;
            $scope.subs = res;
            $scope.purchases = res;
            $('#modal1').modal('open')
        })
    }

    // function to find shows by title
    $scope.findShow = (content)=>{
        console.log("content", content);
        guideboxShowFactory.findShow(content)
        .then((res)=>{
            console.log(" show res", res);
            $scope.shows = res;
        })
    }

    //saves media to users firebase
    $scope.addMedia = (uid, media)=>{
        console.log("media", media);
        firebaseFactory.saveToMyMedia(uid, media)
    }

    //my media tab redirect
    $scope.media = ()=>{
        $location.url('/my_media')
    }

})
