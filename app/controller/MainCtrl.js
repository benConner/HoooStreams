angular.module('whooStreams')
.controller('MainCtrl', function($scope, $location, authFactory, guideboxMovieFactory, guideboxShowFactory, firebaseFactory, user){
    //materialize modal
    $('#modal1').modal('');
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
        console.log("no user");
        $scope.logOut = false;
        $scope.loggedin = true;
    }else if(user){
        console.log("user");
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

    // $scope.saveMedia = (media)=>{
    //     firebaseFactory.saveToMyMedia()
    //     .then((res)=>{
    //     $scope
    //     })
    // }

})
