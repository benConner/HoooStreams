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
        guideboxMovieFactory.findMovie(content)
        .then((res)=>{
            $scope.movies = res;
            $scope.findShow(content)
        })
    }

    //grabs movie id and gets streaming info
    $scope.movieId = (movie)=>{
        movie.type = "movies";
        $location.url(`/media/${movie.type}/${movie.title}/${movie.id}`)
    }
    //grabs show id and gets streaming info
    $scope.showId = (show)=>{
        show.type = "shows";
        $location.url(`/media/${show.type}/${show.title}/${show.id}`)
    }

    // function to find shows by title
    $scope.findShow = (content)=>{
        guideboxShowFactory.findShow(content)
        .then((res)=>{
            $scope.shows = res;
        })
    }



    //my media tab redirect
    $scope.myMedia = ()=>{
        $location.url('/my_media')
    }

})
