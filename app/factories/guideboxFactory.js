angular.module('whooStreams')
.factory('guideboxFactory', function($http){
    return{
        loadinMovie : ()=>{
            return $http
            .get('http://api-public.guidebox.com/v2/movies?api_key=801414ed2250b78cfd77530a81236699a890f6ec&limit=24')
            .then((res)=>{
                return res.data.results;
            })
        },
        findMovie : (title)=>{
            return $http
            .get(`http://api-public.guidebox.com/v2/search?api_key=801414ed2250b78cfd77530a81236699a890f6ec&type=movie&field=title&limit=5&query=${title}`)
            .then((res)=>{
                return res.data.results.slice(0,9);
            })
        },
        findMovieByID : (id)=>{
            return $http
            .get(`http://api-public.guidebox.com/v2/movies/${id}?api_key=801414ed2250b78cfd77530a81236699a890f6ec&sources=free,amazon_prime,netflix,hulu,hbo,showtime,stars,i_tune,google_play,cinemax,vudu`)
            .then((res)=>{
                //console.log("res movie id", res);
                return res.data;
            })
        }
    }
})
